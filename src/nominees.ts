export interface Nomination {
  movie?: string;
  movieSlug?: string;
  name?: string;
  nameSlug?: string;
  imgSrc?: string;
}

export interface AdaptedScreenplayNomination extends Nomination {
  movieSlug:
    | "a-complete-unknown"
    | "conclave"
    | "emilia-perez"
    | "nickel-boys"
    | "sing-sing";
}

export interface AnimatedFeatureNomination extends Nomination {
  movieSlug:
    | "flow"
    | "inside-out-2"
    | "memoir-of-a-snail"
    | "wallace-and-gromit"
    | "the-wild-robot";
}

export interface AnimatedShortNomination extends Nomination {
  movieSlug:
    | "beautiful-men"
    | "in-the-shadow-of-the-cypress"
    | "magic-candies"
    | "wander-to-wonder"
    | "yuck";
}

export interface BestPictureNomination extends Nomination {
  movieSlug:
    | "anora"
    | "the-brutalist"
    | "a-complete-unknown"
    | "conclave"
    | "dune-2"
    | "emilia-perez"
    | "im-still-here"
    | "nickel-boys"
    | "the-substance"
    | "wicked";
}

export interface CinematographyNomination extends Nomination {
  movieSlug:
    | "the-brutalist"
    | "dune-2"
    | "emilia-perez"
    | "maria"
    | "nosferatu";
}

export interface CostumeDesignNomination extends Nomination {
  movieSlug:
    | "a-complete-unknown"
    | "conclave"
    | "gladiator-2"
    | "nosferatu"
    | "wicked";
}

export interface DirectingNomination extends Nomination {
  nameSlug:
    | "anora"
    | "the-brutalist"
    | "a-complete-unknown"
    | "emilia-perez"
    | "the-substance";
}

export interface DocumentaryFeatureNomination extends Nomination {
  movieSlug:
    | "black-box-diaries"
    | "no-other-land"
    | "porcelain-war"
    | "soundtrack-to-a-coup-detat"
    | "sugarcane";
}

export interface DocumentaryShortNomination extends Nomination {
  movieSlug:
    | "death-by-numbers"
    | "i-am-ready-warden"
    | "incident"
    | "instruments-of-a-beating-heart"
    | "the-only-girl-in-the-orchestra";
}

export interface FilmEditingNomination extends Nomination {
  movieSlug:
    | "anora"
    | "the-brutalist"
    | "conclave"
    | "emilia-perez"
    | "wicked";
}

export interface InternationalFeatureNomination extends Nomination {
  movieSlug:
    | "im-still-here"
    | "the-girl-with-the-needle"
    | "emilia-perez"
    | "the-seed-of-the-sacred-fig"
    | "flow";
}

export interface LeadingActorNomination extends Nomination {
  nameSlug:
    | "adrien-brody"
    | "timothee-chalamet"
    | "colman-domingo"
    | "ralph-fiennes"
    | "sebastian-stan";
}

export interface LeadingActressNomination extends Nomination {
  nameSlug:
    | "cynthia-erivo"
    | "karla-sofia-gascon"
    | "mikey-madison"
    | "demi-moore"
    | "fernanda-torres";
}

export interface LiveActionShortNomination extends Nomination {
  movieSlug:
    | "a-lien"
    | "anuja"
    | "im-not-a-robot"
    | "the-last-ranger"
    | "the-man-who-could-not-remain-silent";
}

export interface MakeupNomination extends Nomination {
  movieSlug:
    | "a-different-man"
    | "emilia-perez"
    | "nosferatu"
    | "the-substance"
    | "wicked";
}

export interface OriginalScoreNomination extends Nomination {
  movieSlug:
    | "the-brutalist"
    | "conclave"
    | "emilia-perez"
    | "wicked"
    | "the-wild-robot";
}

export interface OriginalScreenplayNomination extends Nomination {
  movieSlug:
    | "anora"
    | "the-brutalist"
    | "a-real-pain"
    | "september-5"
    | "the-substance";
}

export interface OriginalSongNomination extends Nomination {
  nameSlug:
    | "el-mal"
    | "the-journey"
    | "like-a-bird"
    | "mi-camino"
    | "never-too-late";
}

export interface ProductionDesignNomination extends Nomination {
  movieSlug:
    | "the-brutalist"
    | "conclave"
    | "dune-2"
    | "nosferatu"
    | "wicked";
}

export interface SoundNomination extends Nomination {
  movieSlug:
    | "a-complete-unknown"
    | "dune-2"
    | "emilia-perez"
    | "wicked"
    | "the-wild-robot";
}

export interface SupportingActorNomination extends Nomination {
  nameSlug:
    | "yura-borisov"
    | "kieran-culkin"
    | "edward-norton"
    | "guy-pearce"
    | "jeremy-strong";
}

export interface SupportingActressNomination extends Nomination {
  nameSlug:
    | "monica-barbaro"
    | "ariana-grande"
    | "felicity-jones"
    | "isabella-rossellini"
    | "zoe-saldana";
}

export interface VisualEffectsNomination extends Nomination {
  movieSlug:
    | "alien-romulus"
    | "better-man"
    | "dune-2"
    | "kingdom-of-the-planet-of-the-apes"
    | "wicked";
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
      movie: "Anora",
      movieSlug: "anora",
    },
    {
      movie: "The Brutalist",
      movieSlug: "the-brutalist",
    },
    {
      movie: "A Complete Unknown",
      movieSlug: "a-complete-unknown",
    },
    {
      movie: "Conclave",
      movieSlug: "conclave",
    },
    {
      movie: "Dune: Part Two",
      movieSlug: "dune-2",
    },
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
    },
    {
      movie: "I'm still here",
      movieSlug: "im-still-here",
    },
    {
      movie: "Nickel Boys",
      movieSlug: "nickel-boys",
    },
    {
      movie: "The Substance",
      movieSlug: "the-substance",
    },
    {
      movie: "Wicked",
      movieSlug: "wicked",
    },
  ],
  directing: [
    {
      movie: "Anora",
      movieSlug: "anora",
      name: "Sean Baker",
      nameSlug: "sean-baker",
    },
    {
      movie: "The Brutalist",
      movieSlug: "the-brutalist",
      name: "Brady Corbet",
      nameSlug: "brady-corbet",
    },
    {
      movie: "A Complete Unknown",
      movieSlug: "a-complete-unknown",
      name: "James Mangold",
      nameSlug: "james-mangold",
    },
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
      name: "Jacques Audiard",
      nameSlug: "jacques-audiard",
    },
    {
      movie: "The Substance",
      movieSlug: "the-substance",
      name: "Coralie Fargeat",
      nameSlug: "coralie-fargeat",
    },
  ],
  leadingActor: [
    {
      movie: "The Brutalist",
      movieSlug: "the-brutalist",
      name: "Adrien Brody",
      nameSlug: "adrien-brody",
    },
    {
      movie: "A Complete Unknown",
      movieSlug: "a-complete-unknown",
      name: "Timothée Chalamet",
      nameSlug: "timothee-chalamet",
    },
    {
      movie: "Sing Sing",
      movieSlug: "sing-sing",
      name: "Colman Domingo",
      nameSlug: "colman-domingo",
    },
    {
      movie: "Conclave",
      movieSlug: "conclave",
      name: "Ralph Fiennes",
      nameSlug: "ralph-fiennes",
    },
    {
      movie: "The Apprentice",
      movieSlug: "the-apprentice",
      name: "Sebastian Stan",
      nameSlug: "sebastian-stan",
    },
  ],
  leadingActress: [
    {
      movie: "Wicked",
      movieSlug: "wicked",
      name: "Cynthia Erivo",
      nameSlug: "cynthia-erivo",
    },
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
      name: "Karla Sofia Gascon",
      nameSlug: "karla-sofia-gascon",
    },
    {
      movie: "Anora",
      movieSlug: "anora",
      name: "Mikey Madison",
      nameSlug: "mikey-madison",
    },
    {
      movie: "The Substance",
      movieSlug: "the-substance",
      name: "Demi Moore",
      nameSlug: "demi-moore",
    },
    {
      movie: "I'm Still Here",
      movieSlug: "im-still-here",
      name: "Fernanda Torres",
      nameSlug: "fernanda-torres",
    },
  ],
  supportingActor: [
    {
      movie: "American Fiction",
      movieSlug: "american-fiction",
      name: "Sterling K. Brown",
      nameSlug: "sterling-k-brown",
    },
    {
      movie: "Killers of the Flower Moon",
      movieSlug: "killers-of-the-flower-moon",
      name: "Robert De Niro",
      nameSlug: "robert-de-niro",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
      name: "Robert Downey Jr.",
      nameSlug: "robert-downey-jr",
    },
    {
      movie: "Barbie",
      movieSlug: "barbie",
      name: "Ryan Gosling",
      nameSlug: "ryan-gosling",
    },
    {
      movie: "Poor Things",
      movieSlug: "poor-things",
      name: "Mark Ruffalo",
      nameSlug: "mark-ruffalo",
    },
  ],
  supportingActress: [
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
      name: "Emily Blunt",
      nameSlug: "emily-blunt",
    },
    {
      movie: "The Color Purple",
      movieSlug: "the-color-purple",
      name: "Danielle Brooks",
      nameSlug: "danielle-brooks",
    },
    {
      movie: "Barbie",
      movieSlug: "barbie",
      name: "America Ferrera",
      nameSlug: "america-ferrera",
    },
    {
      movie: "Nyad",
      movieSlug: "nyad",
      name: "Jodie Foster",
      nameSlug: "jodie-foster",
    },
    {
      movie: "The Holdovers",
      movieSlug: "the-holdovers",
      name: "Da'Vine Joy Randolph",
      nameSlug: "davine-joy-randolph",
    },
  ],
  animatedFeature: [
    {
      movie: "The Boy and the Heron",
      movieSlug: "the-boy-and-the-heron",
    },
    {
      movie: "Elemental",
      movieSlug: "elemental",
    },
    {
      movie: "Nimona",
      movieSlug: "nimona",
    },
    {
      movie: "Robot Dreams",
      movieSlug: "robot-dreams",
    },
    {
      movie: "Spider-Man: Across the Spider-Verse",
      movieSlug: "spider-man-across-the-spider-verse",
    },
  ],
  originalScreenplay: [
    {
      movie: "Anatomy of a Fall",
      movieSlug: "anatomy-of-a-fall",
    },
    {
      movie: "The Holdovers",
      movieSlug: "the-holdovers",
    },
    {
      movie: "Maestro",
      movieSlug: "maestro",
    },
    {
      movie: "May December",
      movieSlug: "may-december",
    },
    {
      movie: "Past Lives",
      movieSlug: "past-lives",
    },
  ],
  adaptedScreenplay: [
    {
      movie: "American Fiction",
      movieSlug: "american-fiction",
    },
    {
      movie: "Barbie",
      movieSlug: "barbie",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
    },
    {
      movie: "Poor Things",
      movieSlug: "poor-things",
    },
    {
      movie: "The Zone of Interest",
      movieSlug: "the-zone-of-interest",
    },
  ],
  internationalFeature: [
    {
      movie: "Io Capitano",
      movieSlug: "io-capitano",
    },
    {
      movie: "Perfect Days",
      movieSlug: "perfect-days",
    },
    {
      movie: "Society of the Snow",
      movieSlug: "society-of-the-snow",
    },
    {
      movie: "The Teacher's Lounge",
      movieSlug: "the-teachers-lounge",
    },
    {
      movie: "The Zone of Interest",
      movieSlug: "the-zone-of-interest",
    },
  ],
  documentaryFeature: [
    {
      movie: "Bobi Wine: The People's President",
      movieSlug: "bobi-wine",
    },
    {
      movie: "The Eternal Memory",
      movieSlug: "the-eternal-memory",
    },
    {
      movie: "Four Daughters",
      movieSlug: "four-daughters",
    },
    {
      movie: "To Kill a Tiger",
      movieSlug: "to-kill-a-tiger",
    },
    {
      movie: "20 Days in Mariupol",
      movieSlug: "20-days-in-mariupol",
    },
  ],
  documentaryShort: [
    {
      movie: "The ABCs of Book Banning",
      movieSlug: "the-abcs-of-book-banning",
    },
    {
      movie: "The Barber of Little Rock",
      movieSlug: "the-barber-of-little-rock",
    },
    {
      movie: "Island in Between",
      movieSlug: "island-in-between",
    },
    {
      movie: "The Last Repair Shop",
      movieSlug: "the-last-repair-shop",
    },
    {
      movie: "Nǎi Nai & Wài Pó",
      movieSlug: "nai-nai-and-wai-po",
    },
  ],
  liveActionShort: [
    {
      movie: "The After",
      movieSlug: "the-after",
    },
    {
      movie: "Invincible",
      movieSlug: "invincible",
    },
    {
      movie: "Knight of Fortune",
      movieSlug: "knight-of-fortune",
    },
    {
      movie: "Red, White and Blue",
      movieSlug: "red-white-and-blue",
    },
    {
      movie: "The Wonderful Story of Henry Sugar",
      movieSlug: "the-wonderful-story-of-henry-sugar",
    },
  ],
  animatedShort: [
    {
      movie: "Letter to a Pig",
      movieSlug: "letter-to-a-pig",
    },
    {
      movie: "Ninety-Five Senses",
      movieSlug: "ninety-five-senses",
    },
    {
      movie: "Our Uniform",
      movieSlug: "our-uniform",
    },
    {
      movie: "Pachyderme",
      movieSlug: "pachyderme",
    },
    {
      movie: "War is Over!",
      movieSlug: "war-is-over",
    },
  ],
  originalScore: [
    {
      movie: "American Fiction",
      movieSlug: "american-fiction",
    },
    {
      movie: "Indiana Jones and the Dial of Destiny",
      movieSlug: "indiana-jones-and-the-dial-of-destiny",
    },
    {
      movie: "Killers of the Flower Moon",
      movieSlug: "killers-of-the-flower-moon",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
    },
    {
      movie: "Poor Things",
      movieSlug: "poor-things",
    },
  ],
  originalSong: [
    {
      movie: "Flamin' Hot",
      movieSlug: "flamin-hot",
      name: "The Fire Inside",
      nameSlug: "the-fire-inside",
    },
    {
      movie: "Barbie",
      movieSlug: "barbie",
      name: "I'm Just Ken",
      nameSlug: "im-just-ken",
    },
    {
      movie: "American Symphony",
      movieSlug: "american-symphony",
      name: "It Never Went Away",
      nameSlug: "it-never-went-away",
    },
    {
      movie: "Killers of the Flower Moon",
      movieSlug: "killers-of-the-flower-moon",
      name: "Wahzhazhe",
      nameSlug: "wahzhazhe",
    },
    {
      movie: "Barbie",
      movieSlug: "barbie",
      name: "What Was I Made For?",
      nameSlug: "what-was-i-made-for",
    },
  ],
  sound: [
    {
      movie: "The Creator",
      movieSlug: "the-creator",
    },
    {
      movie: "Maestro",
      movieSlug: "maestro",
    },
    {
      movie: "Mission: Impossible - Dead Reckoning Part One",
      movieSlug: "mission-impossible-dead-reckoning",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
    },
    {
      movie: "The Zone of Interest",
      movieSlug: "the-zone-of-interest",
    },
  ],
  productionDesign: [
    {
      movie: "Barbie",
      movieSlug: "barbie",
    },
    {
      movie: "Killers of the Flower Moon",
      movieSlug: "killers-of-the-flower-moon",
    },
    {
      movie: "Napoleon",
      movieSlug: "napoleon",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
    },
    {
      movie: "Poor Things",
      movieSlug: "poor-things",
    },
  ],
  cinematography: [
    {
      movie: "El Conde",
      movieSlug: "el-conde",
    },
    {
      movie: "Killers of the Flower Moon",
      movieSlug: "killers-of-the-flower-moon",
    },
    {
      movie: "Maestro",
      movieSlug: "maestro",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
    },
    {
      movie: "Poor Things",
      movieSlug: "poor-things",
    },
  ],
  makeup: [
    {
      movie: "Golda",
      movieSlug: "golda",
    },
    {
      movie: "Maestro",
      movieSlug: "maestro",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
    },
    {
      movie: "Poor Things",
      movieSlug: "poor-things",
    },
    {
      movie: "Society of the Snow",
      movieSlug: "society-of-the-snow",
    },
  ],
  costumeDesign: [
    {
      movie: "Barbie",
      movieSlug: "barbie",
    },
    {
      movie: "Killers of the Flower Moon",
      movieSlug: "killers-of-the-flower-moon",
    },
    {
      movie: "Napoleon",
      movieSlug: "napoleon",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
    },
    {
      movie: "Poor Things",
      movieSlug: "poor-things",
    },
  ],
  filmEditing: [
    {
      movie: "Anatomy of a Fall",
      movieSlug: "anatomy-of-a-fall",
    },
    {
      movie: "The Holdovers",
      movieSlug: "the-holdovers",
    },
    {
      movie: "Killers of the Flower Moon",
      movieSlug: "killers-of-the-flower-moon",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
    },
    {
      movie: "Poor Things",
      movieSlug: "poor-things",
    },
  ],
  visualEffects: [
    {
      movie: "The Creator",
      movieSlug: "the-creator",
    },
    {
      movie: "Godzilla Minus One",
      movieSlug: "godzilla-minus-one",
    },
    {
      movie: "Guardians of the Galaxy Vol. 3",
      movieSlug: "guardians-of-the-galaxy-vol-3",
    },
    {
      movie: "Mission: Impossible - Dead Reckoning Part One",
      movieSlug: "mission-impossible-dead-reckoning",
    },
    {
      movie: "Napoleon",
      movieSlug: "napoleon",
    },
  ],
};

export default nominees;
