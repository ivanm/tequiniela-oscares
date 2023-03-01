import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useFirestore } from "reactfire";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

import {
  userNominationsState,
  allUsersNominationsState,
  documentIdState,
} from "./atoms";

import useEffectOnce from "./hooks/useEffectOnce";

export const AtomStates = () => {
  const [userNominations, setUserNominations] =
    useRecoilState(userNominationsState);
  const [allUsersNominations, setAllUsersNominations] = useRecoilState(
    allUsersNominationsState
  );
  const [documentId, setDocumentId] = useRecoilState(documentIdState);

  const db = useFirestore();

  useEffectOnce(() => {
    (async () => {
      const querySnapshot = await getDocs(
        collection(db, "tequiniela-user-nominations")
      );

      const allNominations = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setAllUsersNominations(allNominations);

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
        setDocumentId(userNominationsServer.id);
        setUserNominations(userNominationsServer.data.nominations);
      } else if (user != null && documentId === undefined) {
        const docRef = await addDoc(
          collection(db, "tequiniela-user-nominations"),
          {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
            created: new Date().toISOString(),
            nominations: {},
          }
        );
        setDocumentId(docRef.id);
      }
    })();
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
