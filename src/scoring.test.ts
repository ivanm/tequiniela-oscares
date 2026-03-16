import { describe, it, expect } from "vitest";
import {
  computeScores,
  normalizeWinners,
  NAME_SLUG_MATCH_KEYS,
  NominationPick,
} from "./scoring";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const CATEGORIES_23 = [
  "bestPicture",
  "directing",
  "leadingActor",
  "leadingActress",
  "supportingActor",
  "supportingActress",
  "originalScreenplay",
  "adaptedScreenplay",
  "originalSong",
  "originalScore",
  "internationalFeature",
  "animatedFeature",
  "documentaryFeature",
  "productionDesign",
  "costumeDesign",
  "makeup",
  "sound",
  "filmEditing",
  "cinematography",
  "visualEffects",
  "liveActionShort",
  "animatedShort",
  "documentaryShort",
] as const;

const CATEGORIES_24 = [...CATEGORIES_23, "casting"] as const;

function slugKeyFor(cat: string): "nameSlug" | "movieSlug" {
  return NAME_SLUG_MATCH_KEYS.includes(cat) ? "nameSlug" : "movieSlug";
}

/** Build a winners (or nominations) record from an ordered array of slug values. */
function buildRecord(
  categories: readonly string[],
  slugs: string[],
): Record<string, NominationPick> {
  const rec: Record<string, NominationPick> = {};
  categories.forEach((cat, i) => {
    rec[cat] = { [slugKeyFor(cat)]: slugs[i] };
  });
  return rec;
}

/** Build user nominations: correct slug for each category, except swap in alt slug at wrongIndices. */
function buildNominations(
  categories: readonly string[],
  winnerSlugs: string[],
  altSlugs: string[],
  wrongIndices: number[],
): Record<string, NominationPick> {
  const noms: Record<string, NominationPick> = {};
  categories.forEach((cat, i) => {
    const slug = wrongIndices.includes(i) ? altSlugs[i] : winnerSlugs[i];
    noms[cat] = { [slugKeyFor(cat)]: slug };
  });
  return noms;
}

// ---------------------------------------------------------------------------
// Fixtures — winner slugs extracted from seed data (relevant slug only)
// ---------------------------------------------------------------------------

// 2023 (95th, 23 categories)
const winnerSlugs2023 = [
  "everything-everywhere-all-at-once", // bestPicture (movieSlug)
  "daniel-kwan-daniel-scheinert",      // directing (nameSlug)
  "brendan-fraser",                    // leadingActor (nameSlug)
  "michelle-yeoh",                     // leadingActress (nameSlug)
  "ke-huy-quan",                       // supportingActor (nameSlug)
  "jamie-lee-curtis",                  // supportingActress (nameSlug)
  "everything-everywhere-all-at-once", // originalScreenplay (movieSlug)
  "women-talking",                     // adaptedScreenplay (movieSlug)
  "naatu-naatu",                       // originalSong (nameSlug)
  "all-quiet-on-the-western-front",    // originalScore (movieSlug)
  "all-quiet-on-the-western-front",    // internationalFeature (movieSlug)
  "guillermo-del-toros-pinocchio",     // animatedFeature (movieSlug)
  "navalny",                           // documentaryFeature (movieSlug)
  "all-quiet-on-the-western-front",    // productionDesign (movieSlug)
  "black-panther-wakanda-forever",     // costumeDesign (movieSlug)
  "the-whale",                         // makeup (movieSlug)
  "top-gun-maverick",                  // sound (movieSlug)
  "everything-everywhere-all-at-once", // filmEditing (movieSlug)
  "all-quiet-on-the-western-front",    // cinematography (movieSlug)
  "avatar-the-way-of-water",           // visualEffects (movieSlug)
  "an-irish-goodbye",                  // liveActionShort (movieSlug)
  "the-boy-the-mole-the-fox-and-the-horse", // animatedShort (movieSlug)
  "the-elephant-whisperers",           // documentaryShort (movieSlug)
];

const altSlugs2023 = [
  "the-banshees-of-inisherin",         // bestPicture
  "steven-spielberg",                  // directing
  "austin-butler",                     // leadingActor
  "cate-blanchett",                    // leadingActress
  "brian-tyree-henry",                 // supportingActor
  "angela-bassett",                    // supportingActress
  "the-banshees-of-inisherin",         // originalScreenplay
  "glass-onion",                       // adaptedScreenplay
  "hold-my-hand",                      // originalSong
  "the-fabelmans",                     // originalScore
  "argentina-1985",                    // internationalFeature
  "puss-in-boots-the-last-wish",       // animatedFeature
  "all-the-beauty-and-the-bloodshed",  // documentaryFeature
  "babylon",                           // productionDesign
  "elvis",                             // costumeDesign
  "all-quiet-on-the-western-front",    // makeup
  "all-quiet-on-the-western-front",    // sound
  "top-gun-maverick",                  // filmEditing
  "tar",                               // cinematography
  "top-gun-maverick",                  // visualEffects
  "le-pupille",                        // liveActionShort
  "ice-merchants",                     // animatedShort
  "stranger-at-the-gate",             // documentaryShort
];

// 2024 (96th, 23 categories)
const winnerSlugs2024 = [
  "oppenheimer", "christopher-nolan", "cillian-murphy", "emma-stone",
  "robert-downey-jr", "davine-joy-randolph", "anatomy-of-a-fall",
  "american-fiction", "what-was-i-made-for", "oppenheimer",
  "the-zone-of-interest", "the-boy-and-the-heron", "20-days-in-mariupol",
  "poor-things", "poor-things", "poor-things", "the-zone-of-interest",
  "oppenheimer", "oppenheimer", "godzilla-minus-one",
  "the-wonderful-story-of-henry-sugar", "war-is-over", "the-last-repair-shop",
];

const altSlugs2024 = [
  "killers-of-the-flower-moon", "martin-scorsese", "paul-giamatti",
  "lily-gladstone", "ryan-gosling", "america-ferrera", "past-lives",
  "barbie", "im-just-ken", "killers-of-the-flower-moon", "io-capitano",
  "elemental", "four-daughters", "barbie", "barbie", "maestro",
  "the-creator", "poor-things", "killers-of-the-flower-moon", "the-creator",
  "the-after", "letter-to-a-pig", "nai-nai-and-wai-po",
];

// 2025 (97th, 23 categories)
const winnerSlugs2025 = [
  "anora", "sean-baker", "adrien-brody", "mikey-madison", "kieran-culkin",
  "zoe-saldana", "anora", "conclave", "el-mal", "the-brutalist",
  "im-still-here", "flow", "no-other-land", "wicked", "wicked",
  "the-substance", "dune-part-two", "anora", "the-brutalist",
  "dune-part-two", "im-not-a-robot", "in-the-shadow-of-the-cypress",
  "the-only-girl-in-the-orchestra",
];

const altSlugs2025 = [
  "the-brutalist", "brady-corbet", "timothee-chalamet", "demi-moore",
  "guy-pearce", "ariana-grande", "the-brutalist", "emilia-perez",
  "kiss-the-sky", "conclave", "the-girl-with-the-needle", "inside-out-2",
  "sugarcane", "the-brutalist", "a-complete-unknown", "emilia-perez",
  "wicked", "the-brutalist", "conclave", "wicked",
  "the-man-who-could-not-remain-silent", "beautiful-men", "incident",
];

// Wrong indices per user (from seed script). Index = position in CATEGORIES_23.
// 2023: expected scores → 18, 16, 15, 14, 12, 11, 10, 8
const wrongIndices2023 = [
  [7, 10, 14, 20, 22],
  [2, 7, 10, 14, 15, 20, 22],
  [2, 7, 8, 10, 14, 15, 18, 20],
  [2, 5, 7, 8, 10, 14, 15, 18, 20],
  [1, 2, 5, 7, 8, 10, 12, 14, 15, 18, 20],
  [1, 2, 3, 5, 7, 8, 10, 12, 14, 15, 18, 20],
  [1, 2, 3, 5, 7, 8, 10, 12, 14, 15, 16, 18, 20],
  [1, 2, 3, 4, 5, 7, 8, 10, 12, 14, 15, 16, 18, 20, 22],
];

// 2024: expected scores → 17, 15, 14, 13, 11, 10, 9, 7
const wrongIndices2024 = [
  [7, 10, 14, 18, 20, 22],
  [2, 7, 10, 14, 15, 18, 20, 22],
  [2, 5, 7, 10, 14, 15, 18, 20, 22],
  [1, 2, 5, 7, 10, 14, 15, 18, 20, 22],
  [1, 2, 5, 7, 8, 10, 14, 15, 16, 18, 20, 22],
  [1, 2, 3, 5, 7, 8, 10, 14, 15, 16, 18, 20, 22],
  [1, 2, 3, 5, 7, 8, 10, 12, 14, 15, 16, 18, 20, 22],
  [0, 1, 2, 3, 5, 7, 8, 10, 12, 14, 15, 16, 18, 20, 21, 22],
];

// 2025: expected scores → 16, 14, 13, 12, 11, 9, 8, 7
const wrongIndices2025 = [
  [7, 10, 14, 15, 18, 20, 22],
  [2, 7, 8, 10, 14, 15, 18, 20, 22],
  [2, 5, 7, 8, 10, 14, 15, 18, 20, 22],
  [1, 2, 5, 7, 8, 10, 14, 15, 18, 20, 22],
  [1, 2, 3, 5, 7, 8, 10, 14, 15, 18, 20, 22],
  [1, 2, 3, 5, 7, 8, 10, 12, 14, 15, 16, 18, 20, 22],
  [0, 1, 2, 3, 5, 7, 8, 10, 12, 14, 15, 16, 18, 20, 22],
  [0, 1, 2, 3, 4, 5, 7, 8, 10, 12, 14, 15, 16, 18, 20, 22],
];

const userUids = [
  "user-0", "user-1", "user-2", "user-3",
  "user-4", "user-5", "user-6", "user-7",
];

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("computeScores", () => {
  // --- Perfect & zero scores ---

  it("returns 23 for a perfect score (23-category year)", () => {
    const winners = buildRecord(CATEGORIES_23, winnerSlugs2023);
    const noms = buildRecord(CATEGORIES_23, winnerSlugs2023);
    const users = [{ uid: "perfect", nominations: noms }];

    expect(computeScores(users, winners)).toEqual({ perfect: 23 });
  });

  it("returns 24 for a perfect score (24-category year with casting)", () => {
    const slugs = [...winnerSlugs2023, "rich-delia"];
    const winners = buildRecord(CATEGORIES_24, slugs);
    const noms = buildRecord(CATEGORIES_24, slugs);
    const users = [{ uid: "perfect24", nominations: noms }];

    expect(computeScores(users, winners)).toEqual({ perfect24: 24 });
  });

  it("returns 0 when all answers are wrong", () => {
    const winners = buildRecord(CATEGORIES_23, winnerSlugs2023);
    const noms = buildNominations(
      CATEGORIES_23,
      winnerSlugs2023,
      altSlugs2023,
      Array.from({ length: 23 }, (_, i) => i),
    );
    const users = [{ uid: "zero", nominations: noms }];

    expect(computeScores(users, winners)).toEqual({ zero: 0 });
  });

  // --- Partial scores matching seed script expectations ---

  describe("2023 partial scores (23 categories)", () => {
    const expectedScores = [18, 16, 15, 14, 12, 11, 10, 8];
    const winners = buildRecord(CATEGORIES_23, winnerSlugs2023);

    expectedScores.forEach((expected, i) => {
      it(`user ${i} scores ${expected}`, () => {
        const noms = buildNominations(
          CATEGORIES_23,
          winnerSlugs2023,
          altSlugs2023,
          wrongIndices2023[i],
        );
        const users = [{ uid: userUids[i], nominations: noms }];
        expect(computeScores(users, winners)[userUids[i]]).toBe(expected);
      });
    });
  });

  describe("2024 partial scores (23 categories)", () => {
    const expectedScores = [17, 15, 14, 13, 11, 10, 9, 7];
    const winners = buildRecord(CATEGORIES_23, winnerSlugs2024);

    expectedScores.forEach((expected, i) => {
      it(`user ${i} scores ${expected}`, () => {
        const noms = buildNominations(
          CATEGORIES_23,
          winnerSlugs2024,
          altSlugs2024,
          wrongIndices2024[i],
        );
        const users = [{ uid: userUids[i], nominations: noms }];
        expect(computeScores(users, winners)[userUids[i]]).toBe(expected);
      });
    });
  });

  describe("2025 partial scores (23 categories)", () => {
    const expectedScores = [16, 14, 13, 12, 11, 9, 8, 7];
    const winners = buildRecord(CATEGORIES_23, winnerSlugs2025);

    expectedScores.forEach((expected, i) => {
      it(`user ${i} scores ${expected}`, () => {
        const noms = buildNominations(
          CATEGORIES_23,
          winnerSlugs2025,
          altSlugs2025,
          wrongIndices2025[i],
        );
        const users = [{ uid: userUids[i], nominations: noms }];
        expect(computeScores(users, winners)[userUids[i]]).toBe(expected);
      });
    });
  });

  // --- Edge cases ---

  it("returns empty map for empty users array", () => {
    const winners = buildRecord(CATEGORIES_23, winnerSlugs2023);
    expect(computeScores([], winners)).toEqual({});
  });

  it("returns 0 for all users when winners is empty", () => {
    const noms = buildRecord(CATEGORIES_23, winnerSlugs2023);
    const users = [
      { uid: "a", nominations: noms },
      { uid: "b", nominations: noms },
    ];
    expect(computeScores(users, {})).toEqual({ a: 0, b: 0 });
  });

  it("does not crash and scores 0 for a missing category nomination", () => {
    const winners = buildRecord(CATEGORIES_23, winnerSlugs2023);
    // User has no nominations at all
    const users = [{ uid: "empty", nominations: {} }];
    expect(computeScores(users, winners)).toEqual({ empty: 0 });
  });

  it("handles user with partial nominations (some categories missing)", () => {
    const winners = buildRecord(CATEGORIES_23, winnerSlugs2023);
    // User only nominated bestPicture correctly
    const noms: Record<string, NominationPick> = {
      bestPicture: { movieSlug: "everything-everywhere-all-at-once" },
    };
    const users = [{ uid: "partial", nominations: noms }];
    expect(computeScores(users, winners)).toEqual({ partial: 1 });
  });

  // --- nameSlug vs movieSlug correctness ---

  it("uses nameSlug for casting and directing, movieSlug for bestPicture", () => {
    // Winner with both slugs set — only the correct one should matter
    const winners: Record<string, NominationPick> = {
      casting: { nameSlug: "rich-delia", movieSlug: "wicked" },
      directing: { nameSlug: "sean-baker", movieSlug: "anora" },
      bestPicture: { nameSlug: "some-producer", movieSlug: "anora" },
    };

    // User matches nameSlug for casting/directing but movieSlug for bestPicture
    const correctUser = {
      uid: "correct",
      nominations: {
        casting: { nameSlug: "rich-delia" },
        directing: { nameSlug: "sean-baker" },
        bestPicture: { movieSlug: "anora" },
      },
    };
    // User has wrong nameSlug but right movieSlug for directing — should NOT match
    const wrongUser = {
      uid: "wrong",
      nominations: {
        casting: { movieSlug: "wicked" },      // wrong key
        directing: { movieSlug: "anora" },      // wrong key
        bestPicture: { nameSlug: "some-producer" }, // wrong key
      },
    };

    const scores = computeScores([correctUser, wrongUser], winners);
    expect(scores.correct).toBe(3);
    expect(scores.wrong).toBe(0);
  });

  // --- Multiple users scored independently ---

  it("scores multiple users independently", () => {
    const winners = buildRecord(CATEGORIES_23, winnerSlugs2023);
    const perfectNoms = buildRecord(CATEGORIES_23, winnerSlugs2023);
    const zeroNoms = buildNominations(
      CATEGORIES_23,
      winnerSlugs2023,
      altSlugs2023,
      Array.from({ length: 23 }, (_, i) => i),
    );
    const partialNoms = buildNominations(
      CATEGORIES_23,
      winnerSlugs2023,
      altSlugs2023,
      wrongIndices2023[0], // 5 wrong → 18
    );

    const users = [
      { uid: "p", nominations: perfectNoms },
      { uid: "z", nominations: zeroNoms },
      { uid: "m", nominations: partialNoms },
    ];
    const scores = computeScores(users, winners);

    expect(scores.p).toBe(23);
    expect(scores.z).toBe(0);
    expect(scores.m).toBe(18);
  });

  // --- Tied winners ---

  describe("tied winners", () => {
    it("awards 1 point when user picked the primary tied winner", () => {
      const winners: Record<string, NominationPick> = {
        liveActionShort: { movieSlug: "two-people-exchanging-saliva" },
      };
      const tiedWinners: Record<string, NominationPick> = {
        liveActionShort: { movieSlug: "the-singers" },
      };
      const users = [{
        uid: "u1",
        nominations: { liveActionShort: { movieSlug: "two-people-exchanging-saliva" } },
      }];
      expect(computeScores(users, winners, tiedWinners)["u1"]).toBe(1);
    });

    it("awards 1 point when user picked the secondary tied winner", () => {
      const winners: Record<string, NominationPick> = {
        liveActionShort: { movieSlug: "two-people-exchanging-saliva" },
      };
      const tiedWinners: Record<string, NominationPick> = {
        liveActionShort: { movieSlug: "the-singers" },
      };
      const users = [{
        uid: "u1",
        nominations: { liveActionShort: { movieSlug: "the-singers" } },
      }];
      expect(computeScores(users, winners, tiedWinners)["u1"]).toBe(1);
    });

    it("awards 0 points when user picked neither tied winner", () => {
      const winners: Record<string, NominationPick> = {
        liveActionShort: { movieSlug: "two-people-exchanging-saliva" },
      };
      const tiedWinners: Record<string, NominationPick> = {
        liveActionShort: { movieSlug: "the-singers" },
      };
      const users = [{
        uid: "u1",
        nominations: { liveActionShort: { movieSlug: "some-other-film" } },
      }];
      expect(computeScores(users, winners, tiedWinners)["u1"]).toBe(0);
    });

    it("tied winner doesn't affect scoring of other categories", () => {
      const winners: Record<string, NominationPick> = {
        bestPicture: { movieSlug: "anora" },
        liveActionShort: { movieSlug: "two-people-exchanging-saliva" },
      };
      const tiedWinners: Record<string, NominationPick> = {
        liveActionShort: { movieSlug: "the-singers" },
      };
      const users = [{
        uid: "u1",
        nominations: {
          bestPicture: { movieSlug: "anora" },
          liveActionShort: { movieSlug: "the-singers" },
        },
      }];
      expect(computeScores(users, winners, tiedWinners)["u1"]).toBe(2);
    });

    it("works correctly when tiedWinners is undefined (backwards compat)", () => {
      const winners: Record<string, NominationPick> = {
        bestPicture: { movieSlug: "anora" },
      };
      const users = [{
        uid: "u1",
        nominations: { bestPicture: { movieSlug: "anora" } },
      }];
      expect(computeScores(users, winners)["u1"]).toBe(1);
      expect(computeScores(users, winners, undefined)["u1"]).toBe(1);
    });
  });

  // --- normalizeWinners ---

  describe("normalizeWinners", () => {
    it("passes through plain objects unchanged", () => {
      const raw = {
        bestPicture: { movieSlug: "anora" },
        directing: { nameSlug: "sean-baker" },
      };
      const { primary, tied } = normalizeWinners(raw);
      expect(primary).toEqual(raw);
      expect(tied).toEqual({});
    });

    it("splits array into primary and tied", () => {
      const raw = {
        liveActionShort: [
          { movieSlug: "two-people-exchanging-saliva" },
          { movieSlug: "the-singers" },
        ],
      };
      const { primary, tied } = normalizeWinners(raw);
      expect(primary).toEqual({ liveActionShort: { movieSlug: "two-people-exchanging-saliva" } });
      expect(tied).toEqual({ liveActionShort: { movieSlug: "the-singers" } });
    });

    it("handles single-element array as single winner", () => {
      const raw = {
        liveActionShort: [{ movieSlug: "only-one" }],
      };
      const { primary, tied } = normalizeWinners(raw);
      expect(primary).toEqual({ liveActionShort: { movieSlug: "only-one" } });
      expect(tied).toEqual({});
    });

    it("handles mix of arrays and objects", () => {
      const raw = {
        bestPicture: { movieSlug: "anora" },
        liveActionShort: [
          { movieSlug: "winner-a" },
          { movieSlug: "winner-b" },
        ],
      };
      const { primary, tied } = normalizeWinners(raw);
      expect(primary.bestPicture).toEqual({ movieSlug: "anora" });
      expect(primary.liveActionShort).toEqual({ movieSlug: "winner-a" });
      expect(tied.liveActionShort).toEqual({ movieSlug: "winner-b" });
      expect(tied.bestPicture).toBeUndefined();
    });
  });

  // --- All 8 users at once (2023) ---

  it("scores all 8 users correctly in a single call (2023)", () => {
    const winners = buildRecord(CATEGORIES_23, winnerSlugs2023);
    const expectedScores = [18, 16, 15, 14, 12, 11, 10, 8];

    const users = userUids.map((uid, i) => ({
      uid,
      nominations: buildNominations(
        CATEGORIES_23,
        winnerSlugs2023,
        altSlugs2023,
        wrongIndices2023[i],
      ),
    }));

    const scores = computeScores(users, winners);
    userUids.forEach((uid, i) => {
      expect(scores[uid]).toBe(expectedScores[i]);
    });
  });
});
