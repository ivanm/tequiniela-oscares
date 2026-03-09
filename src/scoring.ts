export const NAME_SLUG_MATCH_KEYS = [
  "directing",
  "supportingActor",
  "supportingActress",
  "leadingActress",
  "leadingActor",
  "originalSong",
  "casting",
];

export interface NominationPick {
  nameSlug?: string;
  movieSlug?: string;
}

export function computeScores(
  users: { uid: string; nominations: Record<string, NominationPick> }[],
  winners: Record<string, NominationPick>,
): Record<string, number> {
  const uidPointsMap: Record<string, number> = {};

  users.forEach((user) => {
    uidPointsMap[user.uid] = 0;
  });

  Object.keys(winners).forEach((category) => {
    const slugKey = NAME_SLUG_MATCH_KEYS.includes(category)
      ? "nameSlug"
      : "movieSlug";
    const winner = winners[category]?.[slugKey];

    if (winner && winner !== "") {
      users.forEach((user) => {
        if (user.nominations?.[category]?.[slugKey] == winner) {
          uidPointsMap[user.uid] = (uidPointsMap[user.uid] || 0) + 1;
        }
      });
    }
  });

  return uidPointsMap;
}
