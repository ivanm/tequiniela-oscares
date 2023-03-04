import { atom, type RecoilState } from "recoil";
import {
  type UserNominations,
  type WinnerNominations,
  type UserDocumentData,
} from "./nominees";

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
  });

export const winnerNominationsState: RecoilState<WinnerNominations> =
  atom<WinnerNominations>({
    key: "winnerNominations",
    default: {
      // bestPicture: { movieSlug: "avatar" },
      // directing: { nameSlug: "todd-field" },
      // leadingActor: { nameSlug: "paul-mescal" },
      // leadingActress: { nameSlug: "ana-de-armas" },
      // supportingActor: { nameSlug: "barry-keoghan" },
      // supportingActress: { nameSlug: "hong-chau" },
      // animatedFeature: { movieSlug: "guillermo-del-toros-pinocchio" },
      // originalScreenplay: { movieSlug: "the-fabelmans" },
      // adaptedScreenplay: { movieSlug: "living" },
      // internationalFeature: { movieSlug: "close" },
      // documentaryFeature: { movieSlug: "fire-of-love" },
      // documentaryShort: { movieSlug: "the-elephant-whisperers" },
      // liveActionShort: { movieSlug: "ivalu" },
      // animatedShort: { movieSlug: "ice-merchants" },
      // originalScore: { movieSlug: "the-fabelmans" },
      // originalSong: { movieSlug: "top-gun" },
      // sound: { movieSlug: "the-batman" },
      // productionDesign: { movieSlug: "the-fabelmans" },
      // cinematography: { movieSlug: "tar" },
      // makeup: { movieSlug: "the-batman" },
      // costumeDesign: { movieSlug: "babylon" },
      // filmEditing: { movieSlug: "top-gun" },
      // visualEffects: { movieSlug: "avatar" },
    },
  });

export const documentIdState: RecoilState<string | undefined> = atom<
  string | undefined
>({
  key: "documentId",
  default: undefined,
});

export const allUsersNominationsState: RecoilState<
  { id: string; data: UserDocumentData }[]
> = atom<{ id: string; data: UserDocumentData }[]>({
  key: "allUsersNominations",
  default: [],
});
