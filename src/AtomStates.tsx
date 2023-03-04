import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useFirestore } from "reactfire";
import { getAuth } from "firebase/auth";
import {
  collection,
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
import { type UserDocumentData } from './nominees';

import useEffectOnce from "./hooks/useEffectOnce";

export const AtomStates = () => {
  const [userNominations, setUserNominations] =
    useRecoilState(userNominationsState);
  const [allUsersNominations, setAllUsersNominations] = useRecoilState(
    allUsersNominationsState
  );
  const [, setWinnerNominations] = useRecoilState(winnerNominationsState);
  const [, setHasNominationTimePassed] = useRecoilState(
    hasNominationTimePassedState
  );
  const [documentId, setDocumentId] = useRecoilState(documentIdState);

  const db = useFirestore();

  useEffectOnce(() => {
    let unsuscribeAllNominations: null | (() => void) = null;
    (async () => {
      const q = query(collection(db, "tequiniela-user-nominations"));
      unsuscribeAllNominations = onSnapshot(q, (querySnapshot) => {
        const allNominations = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() as UserDocumentData,
        }));
        setAllUsersNominations(allNominations);
      });

      const querySnapshot = await getDocs(
        collection(db, "tequiniela-user-nominations")
      );

      const allNominations = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

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
      } else if (user != null && documentId === undefined) {
        await setDoc(doc(db, "tequiniela-user-nominations", user.uid), {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          created: new Date().toISOString(),
          nominations: {},
        });
        setDocumentId(user.uid);
      }
    })();

    let unsuscribeWinners: null | (() => void) = null;
    (async () => {
      unsuscribeWinners = onSnapshot(doc(db, "config", "default"), (doc) => {
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
        updateDoc(doc(db, "tequiniela-user-nominations", documentId), {
          nominations: userNominations,
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
