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

export interface NormalizedWinners {
  primary: Record<string, NominationPick>;
  tied: Record<string, NominationPick>;
}

/** Normalize raw Firestore winners: arrays become primary + tied, objects pass through. */
export function normalizeWinners(raw: Record<string, unknown>): NormalizedWinners {
  const primary: Record<string, NominationPick> = {};
  const tied: Record<string, NominationPick> = {};
  for (const [key, val] of Object.entries(raw)) {
    if (Array.isArray(val)) {
      primary[key] = val[0];
      if (val.length > 1) tied[key] = val[1];
    } else {
      primary[key] = val as NominationPick;
    }
  }
  return { primary, tied };
}

export function computeScores(
  users: { uid: string; nominations: Record<string, NominationPick> }[],
  winners: Record<string, NominationPick>,
  tiedWinners?: Record<string, NominationPick>,
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
    const tiedWinner = tiedWinners?.[category]?.[slugKey];

    if (winner && winner !== "") {
      users.forEach((user) => {
        const userPick = user.nominations?.[category]?.[slugKey];
        if (userPick === winner || (tiedWinner && userPick === tiedWinner)) {
          uidPointsMap[user.uid] = (uidPointsMap[user.uid] || 0) + 1;
        }
      });
    }
  });

  return uidPointsMap;
}
