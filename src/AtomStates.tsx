import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useFirestore } from "reactfire";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";

import {
  userNominationsState,
  allUsersNominationsState,
  documentIdState,
  winnerNominationsState,
  hasNominationTimePassedState,
} from "./atoms";
import { type UserDocumentData } from "./nominees";

import useEffectOnce from "./hooks/useEffectOnce";

const nominationsCollection = "2025-user-nominations";
const configCollection = "2025-config";

export const AtomStates = () => {
  const [userNominations, setUserNominations] =
    useRecoilState(userNominationsState);
  const [allUsersNominations, setAllUsersNominations] = useRecoilState(
    allUsersNominationsState,
  );
  const [, setWinnerNominations] = useRecoilState(winnerNominationsState);
  const [, setHasNominationTimePassed] = useRecoilState(
    hasNominationTimePassedState,
  );
  const [documentId, setDocumentId] = useRecoilState(documentIdState);

  const db = useFirestore();

  useEffectOnce(() => {
    let unsuscribeAllNominations: null | (() => void) = null;
    (async () => {
      const q = query(collection(db, nominationsCollection));
      unsuscribeAllNominations = onSnapshot(q, (querySnapshot) => {
        const allNominations = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() as UserDocumentData,
        }));
        setAllUsersNominations(allNominations);
      });

      const querySnapshot = await getDocs(
        collection(db, nominationsCollection),
      );

      const allNominations = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      const configSnapshot = await getDoc(doc(db, configCollection, "default"));
      let votingEnabled = false;
      if (configSnapshot.exists()) {
        votingEnabled = configSnapshot.data().votingEnabled;
      }

      const auth = await getAuth();
      const user = auth.currentUser;

      const userNominationsServer =
        user !== null
          ? allNominations.find(({ data: { uid } }) => {
              return uid === user.uid;
            })
          : undefined;
      if (
        userNominationsServer &&
        userNominationsServer.data &&
        userNominationsServer.data.nominations
      ) {
        setDocumentId(userNominationsServer.data.uid);
        setUserNominations(userNominationsServer.data.nominations);
      } else if (user != null && documentId === undefined && votingEnabled) {
        await setDoc(doc(db, nominationsCollection, user.uid), {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          created: new Date().toISOString(),
          updated: new Date().toISOString(),
          nominations: {},
        });
        setDocumentId(user.uid);
      }
    })();

    let unsuscribeWinners: null | (() => void) = null;
    (async () => {
      unsuscribeWinners = onSnapshot(doc(db, configCollection, "default"), (doc) => {
        if (doc !== undefined) {
          setWinnerNominations(doc.data()?.winners);
          setHasNominationTimePassed(!doc.data()?.votingEnabled);
        }
      });
    })();

    return () => {
      if (unsuscribeAllNominations !== null) {
        unsuscribeAllNominations();
      }
      if (unsuscribeWinners !== null) {
        unsuscribeWinners();
      }
    };
  });

  useEffect(() => {
    (async () => {
      const auth = await getAuth();
      const user = auth.currentUser;
      if (
        user != null &&
        documentId != null &&
        Object.keys(userNominations).length > 0
      ) {
        updateDoc(doc(db, nominationsCollection, documentId), {
          nominations: userNominations,
          updated: new Date().toISOString(),
        });
        const found = allUsersNominations.find(({ id }) => id === documentId);

        if (found != undefined) {
          const currentDoc = {
            ...found,
            data: { ...found.data, nominations: userNominations },
          };
          setAllUsersNominations([
            ...allUsersNominations.filter(({ id }) => id !== documentId),
            currentDoc,
          ]);
        }
      }
    })();
  }, [userNominations]);

  return <></>;
};
