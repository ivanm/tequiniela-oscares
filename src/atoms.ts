import { atom, type RecoilState } from "recoil";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { type UserNominations, WinnerNominations } from "./nominees";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

import firebaseConfig from "./firebaseConfig";

export const hasNominationTimePassedState: RecoilState<boolean> = atom<boolean>(
  {
    key: "hasNominationTimePassed",
    // Blocks Frontend after 2023-03-12, needs Backend validation
    default: new Date().getTime() > new Date("2023-03-12").getTime(),
    // Uncomment to fast-forward time to 2023-03-12
    // default: true,
  }
);

export const userNominationsState: RecoilState<UserNominations> =
  atom<UserNominations>({
    key: "userNominations",
    default: {},
    effects: [
      ({ onSet, setSelf }) => {

        // TODO Optimize this logic, query is called multiple times!

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        (async () => {
          const querySnapshot = await getDocs(
            collection(db, "tequiniela-user-nominations")
          );

          const allNominations = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));

          const auth = await getAuth(app);
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
            setSelf(userNominationsServer.data.nominations);
          }
        })();

        onSet(async (userNominations) => {
          const app = initializeApp(firebaseConfig);
          const db = getFirestore(app);
          const auth = getAuth(app);
          const user = auth.currentUser;

          let documentId = "";

          const querySnapshot = await getDocs(
            collection(db, "tequiniela-user-nominations")
          );

          const allNominations = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));

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
            documentId = userNominationsServer.id;
          }

          if (user != null) {
            if (documentId === "") {
              addDoc(collection(db, "tequiniela-user-nominations"), {
                uid: user.uid,
                nominations: userNominations,
              });
            } else {
              updateDoc(doc(db, "tequiniela-user-nominations", documentId), {
                nominations: userNominations,
              });
            }
          }
        });
      },
    ],
  });

export const winnerNominationsState: RecoilState<WinnerNominations> =
  atom<WinnerNominations>({
    key: "winnerNominations",
    default: {
      bestPicture: { movieSlug: "avatar" },
      directing: { nameSlug: "todd-field" },
      leadingActor: { nameSlug: "paul-mescal" },
      leadingActress: { nameSlug: "ana-de-armas" },
      supportingActor: { nameSlug: "barry-keoghan" },
      supportingActress: { nameSlug: "hong-chau" },
      animatedFeature: { movieSlug: "guillermo-del-toros-pinocchio" },
      originalScreenplay: { movieSlug: "the-fabelmans" },
      adaptedScreenplay: { movieSlug: "living" },
      internationalFeature: { movieSlug: "close" },
      documentaryFeature: { movieSlug: "fire-of-love" },
      documentaryShort: { movieSlug: "the-elephant-whisperers" },
      liveActionShort: { movieSlug: "ivalu" },
      animatedShort: { movieSlug: "ice-merchants" },
      originalScore: { movieSlug: "the-fabelmans" },
      originalSong: { movieSlug: "top-gun" },
      sound: { movieSlug: "the-batman" },
      productionDesign: { movieSlug: "the-fabelmans" },
      cinematography: { movieSlug: "tar" },
      makeup: { movieSlug: "the-batman" },
      costumeDesign: { movieSlug: "babylon" },
      filmEditing: { movieSlug: "top-gun" },
      visualEffects: { movieSlug: "avatar" },
    },
  });

export const documentIdState: RecoilState<string | undefined> = atom<
  string | undefined
>({
  key: "documentId",
  default: undefined,
});
