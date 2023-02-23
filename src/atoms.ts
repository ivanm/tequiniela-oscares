import { atom, type RecoilState } from "recoil";
import { type UserNominations, WinnerNominations } from "./nominees";

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
    default: {
      bestPicture: { movieSlug: "all-quiet" },
      directing: { nameSlug: "steven-spielberg" },
      leadingActor: { nameSlug: "austin-butler" },
      leadingActress: { nameSlug: "ana-de-armas" },
      supportingActor: { nameSlug: "judd-hirsch" },
      supportingActress: { nameSlug: "hong-chau" },
      animatedFeature: { movieSlug: "the-sea-beast" },
      originalScreenplay: { movieSlug: "tar" },
      adaptedScreenplay: { movieSlug: "living" },
      internationalFeature: { movieSlug: "close" },
      documentaryFeature: { movieSlug: "navalny" },
      documentaryShort: { movieSlug: "haulout" },
      liveActionShort: { movieSlug: "ivalu" },
      animatedShort: { movieSlug: "the-flying-sailor" },
      originalScore: { movieSlug: "babylon" },
      originalSong: { movieSlug: "top-gun" },
      sound: { movieSlug: "elvis" },
      productionDesign: { movieSlug: "babylon" },
      cinematography: { movieSlug: "elvis" },
      makeup: { movieSlug: "the-batman" },
      costumeDesign: { movieSlug: "elvis" },
      filmEditing: { movieSlug: "tar" },
      visualEffects: { movieSlug: "avatar" },
    },
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
