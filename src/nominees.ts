export interface Nomination {
  movie?: string;
  movieSlug?: string;
  name?: string;
  nameSlug?: string;
  imgSrc?: string;
}

export interface AdaptedScreenplayNomination extends Nomination {
  movieSlug:
    | "bugonia"
    | "frankenstein"
    | "hamnet"
    | "one-battle-after-another"
    | "train-dreams";
}

export interface AnimatedFeatureNomination extends Nomination {
  movieSlug:
    | "arco"
    | "elio"
    | "kpop-demon-hunters"
    | "little-amelie-or-the-character-of-rain"
    | "zootopia-2";
}

export interface AnimatedShortNomination extends Nomination {
  movieSlug:
    | "butterfly"
    | "forevergreen"
    | "the-girl-who-cried-pearls"
    | "retirement-plan"
    | "the-three-sisters";
}

export interface BestPictureNomination extends Nomination {
  movieSlug:
    | "bugonia"
    | "f1"
    | "frankenstein"
    | "hamnet"
    | "marty-supreme"
    | "one-battle-after-another"
    | "the-secret-agent"
    | "sentimental-value"
    | "sinners"
    | "train-dreams";
}

export interface CinematographyNomination extends Nomination {
  movieSlug:
    | "frankenstein"
    | "marty-supreme"
    | "one-battle-after-another"
    | "sinners"
    | "train-dreams";
}

export interface CostumeDesignNomination extends Nomination {
  movieSlug:
    | "avatar-fire-and-ash"
    | "frankenstein"
    | "hamnet"
    | "marty-supreme"
    | "sinners";
}

export interface DirectingNomination extends Nomination {
  nameSlug:
    | "chloe-zhao"
    | "josh-safdie"
    | "paul-thomas-anderson"
    | "joachim-trier"
    | "ryan-coogler";
}

export interface DocumentaryFeatureNomination extends Nomination {
  movieSlug:
    | "the-alabama-solution"
    | "come-see-me-in-the-good-light"
    | "cutting-through-rocks"
    | "mr-nobody-against-putin"
    | "the-perfect-neighbor";
}

export interface DocumentaryShortNomination extends Nomination {
  movieSlug:
    | "all-the-empty-rooms"
    | "armed-only-with-a-camera"
    | "children-no-more"
    | "the-devil-is-busy"
    | "perfectly-a-strangeness";
}

export interface FilmEditingNomination extends Nomination {
  movieSlug:
    | "f1"
    | "marty-supreme"
    | "one-battle-after-another"
    | "sentimental-value"
    | "sinners";
}

export interface InternationalFeatureNomination extends Nomination {
  movieSlug:
    | "it-was-just-an-accident"
    | "the-secret-agent"
    | "sentimental-value"
    | "sirat"
    | "the-voice-of-hind-rajab";
}

export interface LeadingActorNomination extends Nomination {
  nameSlug:
    | "timothee-chalamet"
    | "leonardo-dicaprio"
    | "ethan-hawke"
    | "michael-b-jordan"
    | "wagner-moura";
}

export interface LeadingActressNomination extends Nomination {
  nameSlug:
    | "jessie-buckley"
    | "rose-byrne"
    | "kate-hudson"
    | "renate-reinsve"
    | "emma-stone";
}

export interface LiveActionShortNomination extends Nomination {
  movieSlug:
    | "butchers-stain"
    | "a-friend-of-dorothy"
    | "jane-austens-period-drama"
    | "the-singers"
    | "two-people-exchanging-saliva";
}

export interface MakeupNomination extends Nomination {
  movieSlug:
    | "frankenstein"
    | "kokuho"
    | "sinners"
    | "the-smashing-machine"
    | "the-ugly-stepsister";
}

export interface OriginalScoreNomination extends Nomination {
  movieSlug:
    | "bugonia"
    | "frankenstein"
    | "hamnet"
    | "one-battle-after-another"
    | "sinners";
}

export interface OriginalScreenplayNomination extends Nomination {
  movieSlug:
    | "blue-moon"
    | "it-was-just-an-accident"
    | "marty-supreme"
    | "sentimental-value"
    | "sinners";
}

export interface OriginalSongNomination extends Nomination {
  nameSlug:
    | "dear-me"
    | "golden"
    | "i-lied-to-you"
    | "sweet-dreams-of-joy"
    | "train-dreams";
}

export interface ProductionDesignNomination extends Nomination {
  movieSlug:
    | "frankenstein"
    | "hamnet"
    | "marty-supreme"
    | "one-battle-after-another"
    | "sinners";
}

export interface SoundNomination extends Nomination {
  movieSlug:
    | "f1"
    | "frankenstein"
    | "one-battle-after-another"
    | "sinners"
    | "sirat";
}

export interface SupportingActorNomination extends Nomination {
  nameSlug:
    | "benicio-del-toro"
    | "jacob-elordi"
    | "delroy-lindo"
    | "sean-penn"
    | "stellan-skarsgard";
}

export interface SupportingActressNomination extends Nomination {
  nameSlug:
    | "elle-fanning"
    | "inga-ibsdotter-lilleaas"
    | "amy-madigan"
    | "wunmi-mosaku"
    | "teyana-taylor";
}

export interface VisualEffectsNomination extends Nomination {
  movieSlug:
    | "avatar-fire-and-ash"
    | "f1"
    | "jurassic-world-rebirth"
    | "the-lost-bus"
    | "sinners";
}

export interface CastingNomination extends Nomination {
  nameSlug:
    | "nina-gold"
    | "jennifer-venditti"
    | "cassandra-kulukundis"
    | "gabriel-domingues"
    | "francine-maisler";
}

export interface Nominees {
  bestPicture: BestPictureNomination[];
  directing: DirectingNomination[];
  leadingActor: LeadingActorNomination[];
  leadingActress: LeadingActressNomination[];
  supportingActor: SupportingActorNomination[];
  supportingActress: SupportingActressNomination[];
  animatedFeature: AnimatedFeatureNomination[];
  originalScreenplay: OriginalScreenplayNomination[];
  adaptedScreenplay: AdaptedScreenplayNomination[];
  internationalFeature: InternationalFeatureNomination[];
  documentaryFeature: DocumentaryFeatureNomination[];
  documentaryShort: DocumentaryShortNomination[];
  liveActionShort: LiveActionShortNomination[];
  animatedShort: AnimatedShortNomination[];
  originalScore: OriginalScoreNomination[];
  originalSong: OriginalSongNomination[];
  sound: SoundNomination[];
  productionDesign: ProductionDesignNomination[];
  cinematography: CinematographyNomination[];
  makeup: MakeupNomination[];
  costumeDesign: CostumeDesignNomination[];
  filmEditing: FilmEditingNomination[];
  visualEffects: VisualEffectsNomination[];
  casting: CastingNomination[];
}

export interface SelectedNominations {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  [key: string]: any;
  bestPicture?: BestPictureNomination;
  directing?: DirectingNomination;
  leadingActor?: LeadingActorNomination;
  leadingActress?: LeadingActressNomination;
  supportingActor?: SupportingActorNomination;
  supportingActress?: SupportingActressNomination;
  animatedFeature?: AnimatedFeatureNomination;
  originalScreenplay?: OriginalScreenplayNomination;
  adaptedScreenplay?: AdaptedScreenplayNomination;
  internationalFeature?: InternationalFeatureNomination;
  documentaryFeature?: DocumentaryFeatureNomination;
  documentaryShort?: DocumentaryShortNomination;
  liveActionShort?: LiveActionShortNomination;
  animatedShort?: AnimatedShortNomination;
  originalScore?: OriginalScoreNomination;
  originalSong?: OriginalSongNomination;
  sound?: SoundNomination;
  productionDesign?: ProductionDesignNomination;
  cinematography?: CinematographyNomination;
  makeup?: MakeupNomination;
  costumeDesign?: CostumeDesignNomination;
  filmEditing?: FilmEditingNomination;
  visualEffects?: VisualEffectsNomination;
  casting?: CastingNomination;
}

export type UserNominations = SelectedNominations;
export type WinnerNominations = SelectedNominations;

export interface UserDocumentData {
  created: string;
  displayName: string;
  emai: string;
  nominations: UserNominations;
  photoURL: string;
  uid: string;
}

export interface UserDocument {
  id: string;
  data: UserDocumentData;
}

const nominees: Nominees = {
  bestPicture: [
    {
      movie: "Bugonia",
      movieSlug: "bugonia",
    },
    {
      movie: "F1",
      movieSlug: "f1",
    },
    {
      movie: "Frankenstein",
      movieSlug: "frankenstein",
    },
    {
      movie: "Hamnet",
      movieSlug: "hamnet",
    },
    {
      movie: "Marty Supreme",
      movieSlug: "marty-supreme",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
    },
    {
      movie: "The Secret Agent",
      movieSlug: "the-secret-agent",
    },
    {
      movie: "Sentimental Value",
      movieSlug: "sentimental-value",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
    },
    {
      movie: "Train Dreams",
      movieSlug: "train-dreams",
    },
  ],
  directing: [
    {
      movie: "Hamnet",
      movieSlug: "hamnet",
      name: "Chloé Zhao",
      nameSlug: "chloe-zhao",
    },
    {
      movie: "Marty Supreme",
      movieSlug: "marty-supreme",
      name: "Josh Safdie",
      nameSlug: "josh-safdie",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
      name: "Paul Thomas Anderson",
      nameSlug: "paul-thomas-anderson",
    },
    {
      movie: "Sentimental Value",
      movieSlug: "sentimental-value",
      name: "Joachim Trier",
      nameSlug: "joachim-trier",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
      name: "Ryan Coogler",
      nameSlug: "ryan-coogler",
    },
  ],
  leadingActor: [
    {
      movie: "Marty Supreme",
      movieSlug: "marty-supreme",
      name: "Timothée Chalamet",
      nameSlug: "timothee-chalamet",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
      name: "Leonardo DiCaprio",
      nameSlug: "leonardo-dicaprio",
    },
    {
      movie: "Blue Moon",
      movieSlug: "blue-moon",
      name: "Ethan Hawke",
      nameSlug: "ethan-hawke",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
      name: "Michael B. Jordan",
      nameSlug: "michael-b-jordan",
    },
    {
      movie: "The Secret Agent",
      movieSlug: "the-secret-agent",
      name: "Wagner Moura",
      nameSlug: "wagner-moura",
    },
  ],
  leadingActress: [
    {
      movie: "Hamnet",
      movieSlug: "hamnet",
      name: "Jessie Buckley",
      nameSlug: "jessie-buckley",
    },
    {
      movie: "If I Had Legs I'd Kick You",
      movieSlug: "if-i-had-legs-id-kick-you",
      name: "Rose Byrne",
      nameSlug: "rose-byrne",
    },
    {
      movie: "Song Sung Blue",
      movieSlug: "song-sung-blue",
      name: "Kate Hudson",
      nameSlug: "kate-hudson",
    },
    {
      movie: "Sentimental Value",
      movieSlug: "sentimental-value",
      name: "Renate Reinsve",
      nameSlug: "renate-reinsve",
    },
    {
      movie: "Bugonia",
      movieSlug: "bugonia",
      name: "Emma Stone",
      nameSlug: "emma-stone",
    },
  ],
  supportingActor: [
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
      name: "Benicio Del Toro",
      nameSlug: "benicio-del-toro",
    },
    {
      movie: "Frankenstein",
      movieSlug: "frankenstein",
      name: "Jacob Elordi",
      nameSlug: "jacob-elordi",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
      name: "Delroy Lindo",
      nameSlug: "delroy-lindo",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
      name: "Sean Penn",
      nameSlug: "sean-penn",
    },
    {
      movie: "Sentimental Value",
      movieSlug: "sentimental-value",
      name: "Stellan Skarsgård",
      nameSlug: "stellan-skarsgard",
    },
  ],
  supportingActress: [
    {
      movie: "Sentimental Value",
      movieSlug: "sentimental-value",
      name: "Elle Fanning",
      nameSlug: "elle-fanning",
    },
    {
      movie: "Sentimental Value",
      movieSlug: "sentimental-value",
      name: "Inga Ibsdotter Lilleaas",
      nameSlug: "inga-ibsdotter-lilleaas",
    },
    {
      movie: "Weapons",
      movieSlug: "weapons",
      name: "Amy Madigan",
      nameSlug: "amy-madigan",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
      name: "Wunmi Mosaku",
      nameSlug: "wunmi-mosaku",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
      name: "Teyana Taylor",
      nameSlug: "teyana-taylor",
    },
  ],
  animatedFeature: [
    {
      movie: "Arco",
      movieSlug: "arco",
    },
    {
      movie: "Elio",
      movieSlug: "elio",
    },
    {
      movie: "KPop Demon Hunters",
      movieSlug: "kpop-demon-hunters",
    },
    {
      movie: "Little Amelie or the Character of Rain",
      movieSlug: "little-amelie-or-the-character-of-rain",
    },
    {
      movie: "Zootopia 2",
      movieSlug: "zootopia-2",
    },
  ],
  originalScreenplay: [
    {
      movie: "Blue Moon",
      movieSlug: "blue-moon",
    },
    {
      movie: "It Was Just an Accident",
      movieSlug: "it-was-just-an-accident",
    },
    {
      movie: "Marty Supreme",
      movieSlug: "marty-supreme",
    },
    {
      movie: "Sentimental Value",
      movieSlug: "sentimental-value",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
    },
  ],
  adaptedScreenplay: [
    {
      movie: "Bugonia",
      movieSlug: "bugonia",
    },
    {
      movie: "Frankenstein",
      movieSlug: "frankenstein",
    },
    {
      movie: "Hamnet",
      movieSlug: "hamnet",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
    },
    {
      movie: "Train Dreams",
      movieSlug: "train-dreams",
    },
  ],
  internationalFeature: [
    {
      movie: "It Was Just an Accident",
      movieSlug: "it-was-just-an-accident",
    },
    {
      movie: "The Secret Agent",
      movieSlug: "the-secret-agent",
    },
    {
      movie: "Sentimental Value",
      movieSlug: "sentimental-value",
    },
    {
      movie: "Sirat",
      movieSlug: "sirat",
    },
    {
      movie: "The Voice of Hind Rajab",
      movieSlug: "the-voice-of-hind-rajab",
    },
  ],
  documentaryFeature: [
    {
      movie: "The Alabama Solution",
      movieSlug: "the-alabama-solution",
    },
    {
      movie: "Come See Me in the Good Light",
      movieSlug: "come-see-me-in-the-good-light",
    },
    {
      movie: "Cutting Through Rocks",
      movieSlug: "cutting-through-rocks",
    },
    {
      movie: "Mr. Nobody Against Putin",
      movieSlug: "mr-nobody-against-putin",
    },
    {
      movie: "The Perfect Neighbor",
      movieSlug: "the-perfect-neighbor",
    },
  ],
  documentaryShort: [
    {
      movie: "All the Empty Rooms",
      movieSlug: "all-the-empty-rooms",
    },
    {
      movie: "Armed Only with a Camera",
      movieSlug: "armed-only-with-a-camera",
    },
    {
      movie: "Children No More",
      movieSlug: "children-no-more",
    },
    {
      movie: "The Devil Is Busy",
      movieSlug: "the-devil-is-busy",
    },
    {
      movie: "Perfectly a Strangeness",
      movieSlug: "perfectly-a-strangeness",
    },
  ],
  liveActionShort: [
    {
      movie: "Butcher's Stain",
      movieSlug: "butchers-stain",
    },
    {
      movie: "A Friend of Dorothy",
      movieSlug: "a-friend-of-dorothy",
    },
    {
      movie: "Jane Austen's Period Drama",
      movieSlug: "jane-austens-period-drama",
    },
    {
      movie: "The Singers",
      movieSlug: "the-singers",
    },
    {
      movie: "Two People Exchanging Saliva",
      movieSlug: "two-people-exchanging-saliva",
    },
  ],
  animatedShort: [
    {
      movie: "Butterfly",
      movieSlug: "butterfly",
    },
    {
      movie: "Forevergreen",
      movieSlug: "forevergreen",
    },
    {
      movie: "The Girl Who Cried Pearls",
      movieSlug: "the-girl-who-cried-pearls",
    },
    {
      movie: "Retirement Plan",
      movieSlug: "retirement-plan",
    },
    {
      movie: "The Three Sisters",
      movieSlug: "the-three-sisters",
    },
  ],
  originalScore: [
    {
      movie: "Bugonia",
      movieSlug: "bugonia",
    },
    {
      movie: "Frankenstein",
      movieSlug: "frankenstein",
    },
    {
      movie: "Hamnet",
      movieSlug: "hamnet",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
    },
  ],
  originalSong: [
    {
      movie: "Diane Warren: Relentless",
      movieSlug: "diane-warren-relentless",
      name: "Dear Me",
      nameSlug: "dear-me",
    },
    {
      movie: "KPop Demon Hunters",
      movieSlug: "kpop-demon-hunters",
      name: "Golden",
      nameSlug: "golden",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
      name: "I Lied to You",
      nameSlug: "i-lied-to-you",
    },
    {
      movie: "Viva Verdi!",
      movieSlug: "viva-verdi",
      name: "Sweet Dreams of Joy",
      nameSlug: "sweet-dreams-of-joy",
    },
    {
      movie: "Train Dreams",
      movieSlug: "train-dreams",
      name: "Train Dreams",
      nameSlug: "train-dreams",
    },
  ],
  sound: [
    {
      movie: "F1",
      movieSlug: "f1",
    },
    {
      movie: "Frankenstein",
      movieSlug: "frankenstein",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
    },
    {
      movie: "Sirat",
      movieSlug: "sirat",
    },
  ],
  productionDesign: [
    {
      movie: "Frankenstein",
      movieSlug: "frankenstein",
    },
    {
      movie: "Hamnet",
      movieSlug: "hamnet",
    },
    {
      movie: "Marty Supreme",
      movieSlug: "marty-supreme",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
    },
  ],
  cinematography: [
    {
      movie: "Frankenstein",
      movieSlug: "frankenstein",
    },
    {
      movie: "Marty Supreme",
      movieSlug: "marty-supreme",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
    },
    {
      movie: "Train Dreams",
      movieSlug: "train-dreams",
    },
  ],
  makeup: [
    {
      movie: "Frankenstein",
      movieSlug: "frankenstein",
    },
    {
      movie: "Kokuho",
      movieSlug: "kokuho",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
    },
    {
      movie: "The Smashing Machine",
      movieSlug: "the-smashing-machine",
    },
    {
      movie: "The Ugly Stepsister",
      movieSlug: "the-ugly-stepsister",
    },
  ],
  costumeDesign: [
    {
      movie: "Avatar: Fire and Ash",
      movieSlug: "avatar-fire-and-ash",
    },
    {
      movie: "Frankenstein",
      movieSlug: "frankenstein",
    },
    {
      movie: "Hamnet",
      movieSlug: "hamnet",
    },
    {
      movie: "Marty Supreme",
      movieSlug: "marty-supreme",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
    },
  ],
  filmEditing: [
    {
      movie: "F1",
      movieSlug: "f1",
    },
    {
      movie: "Marty Supreme",
      movieSlug: "marty-supreme",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
    },
    {
      movie: "Sentimental Value",
      movieSlug: "sentimental-value",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
    },
  ],
  visualEffects: [
    {
      movie: "Avatar: Fire and Ash",
      movieSlug: "avatar-fire-and-ash",
    },
    {
      movie: "F1",
      movieSlug: "f1",
    },
    {
      movie: "Jurassic World: Rebirth",
      movieSlug: "jurassic-world-rebirth",
    },
    {
      movie: "The Lost Bus",
      movieSlug: "the-lost-bus",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
    },
  ],
  casting: [
    {
      movie: "Hamnet",
      movieSlug: "hamnet",
      name: "Nina Gold",
      nameSlug: "nina-gold",
    },
    {
      movie: "Marty Supreme",
      movieSlug: "marty-supreme",
      name: "Jennifer Venditti",
      nameSlug: "jennifer-venditti",
    },
    {
      movie: "One Battle After Another",
      movieSlug: "one-battle-after-another",
      name: "Cassandra Kulukundis",
      nameSlug: "cassandra-kulukundis",
    },
    {
      movie: "The Secret Agent",
      movieSlug: "the-secret-agent",
      name: "Gabriel Domingues",
      nameSlug: "gabriel-domingues",
    },
    {
      movie: "Sinners",
      movieSlug: "sinners",
      name: "Francine Maisler",
      nameSlug: "francine-maisler",
    },
  ],
};

export default nominees;
