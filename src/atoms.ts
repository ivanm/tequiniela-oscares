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
    default: {},
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

export const windowResizeState: RecoilState<
  { scrollbarWidth?: number| undefined; windowWidth?: number| undefined }
> = atom<{ scrollbarWidth?: number| undefined; windowWidth?: number| undefined }>({
  key: "windowResize",
  default: {},
});
