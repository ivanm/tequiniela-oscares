export interface Nomination {
  movie?: string;
  movieSlug?: string;
  name?: string;
  nameSlug?: string;
  imgSrc?: string;
}

export interface AdaptedScreenplayNomination extends Nomination {
  movieSlug:
    | "american-fiction"
    | "barbie"
    | "oppenheimer"
    | "poor-things"
    | "the-zone-of-interest";
}

export interface AnimatedFeatureNomination extends Nomination {
  movieSlug:
    | "the-boy-and-the-heron"
    | "elemental"
    | "nimona"
    | "robot-dreams"
    | "spider-man-across-the-spider-verse";
}

export interface AnimatedShortNomination extends Nomination {
  movieSlug:
    | "letter-to-a-pig"
    | "ninety-five-senses"
    | "our-uniform"
    | "pachyderme"
    | "war-is-over";
}

export interface BestPictureNomination extends Nomination {
  movieSlug:
    | "american-fiction"
    | "anatomy-of-a-fall"
    | "barbie"
    | "the-holdovers"
    | "killers-of-the-flower-moon"
    | "maestro"
    | "oppenheimer"
    | "past-lives"
    | "poor-things"
    | "the-zone-of-interest";
}

export interface CinematographyNomination extends Nomination {
  movieSlug:
    | "el-conde"
    | "killers-of-the-flower-moon"
    | "maestro"
    | "oppenheimer"
    | "poor-things";
}

export interface CostumeDesignNomination extends Nomination {
  movieSlug:
    | "barbie"
    | "killers-of-the-flower-moon"
    | "napoleon"
    | "oppenheimer"
    | "poor-things";
}

export interface DirectingNomination extends Nomination {
  nameSlug:
    | "justine-triet"
    | "martin-scorsese"
    | "christopher-nolan"
    | "yorgos-lanthimos"
    | "jonathan-glazer";
}

export interface DocumentaryFeatureNomination extends Nomination {
  movieSlug:
    | "bobi-wine"
    | "the-eternal-memory"
    | "four-daughters"
    | "to-kill-a-tiger"
    | "20-days-in-mariupol";
}

export interface DocumentaryShortNomination extends Nomination {
  movieSlug:
    | "the-abcs-of-book-banning"
    | "the-barber-of-little-rock"
    | "island-in-between"
    | "the-last-repair-shop"
    | "nai-nai-and-wai-po";
}

export interface FilmEditingNomination extends Nomination {
  movieSlug:
    | "anatomy-of-a-fall"
    | "the-holdovers"
    | "killers-of-the-flower-moon"
    | "oppenheimer"
    | "poor-things";
}

export interface InternationalFeatureNomination extends Nomination {
  movieSlug:
    | "io-capitano"
    | "perfect-days"
    | "society-of-the-snow"
    | "the-teachers-lounge"
    | "the-zone-of-interest";
}

export interface LeadingActorNomination extends Nomination {
  nameSlug:
    | "bradley-cooper"
    | "colman-domingo"
    | "paul-giamatti"
    | "cillian-murphy"
    | "jeffrey-wright";
}

export interface LeadingActressNomination extends Nomination {
  nameSlug:
    | "annette-bening"
    | "lily-gladstone"
    | "sandra-huller"
    | "carey-mulligan"
    | "emma-stone";
}

export interface LiveActionShortNomination extends Nomination {
  movieSlug:
    | "the-after"
    | "invincible"
    | "knight-of-fortune"
    | "red-white-and-blue"
    | "the-wonderful-story-of-henry-sugar";
}

export interface MakeupNomination extends Nomination {
  movieSlug:
    | "golda"
    | "maestro"
    | "oppenheimer"
    | "poor-things"
    | "society-of-the-snow";
}

export interface OriginalScoreNomination extends Nomination {
  movieSlug:
    | "american-fiction"
    | "indiana-jones-and-the-dial-of-destiny"
    | "killers-of-the-flower-moon"
    | "oppenheimer"
    | "poor-things";
}

export interface OriginalScreenplayNomination extends Nomination {
  movieSlug:
    | "anatomy-of-a-fall"
    | "the-holdovers"
    | "maestro"
    | "may-december"
    | "past-lives";
}

export interface OriginalSongNomination extends Nomination {
  nameSlug:
    | "the-fire-inside"
    | "im-just-ken"
    | "it-never-went-away"
    | "wahzhazhe"
    | "what-was-i-made-for";
}

export interface ProductionDesignNomination extends Nomination {
  movieSlug:
    | "barbie"
    | "killers-of-the-flower-moon"
    | "napoleon"
    | "oppenheimer"
    | "poor-things";
}

export interface SoundNomination extends Nomination {
  movieSlug:
    | "the-creator"
    | "maestro"
    | "mission-impossible-dead-reckoning"
    | "oppenheimer"
    | "the-zone-of-interest";
}

export interface SupportingActorNomination extends Nomination {
  nameSlug:
    | "sterling-k-brown"
    | "robert-de-niro"
    | "robert-downey-jr"
    | "ryan-gosling"
    | "mark-ruffalo";
}

export interface SupportingActressNomination extends Nomination {
  nameSlug:
    | "emily-blunt"
    | "danielle-brooks"
    | "america-ferrera"
    | "jodie-foster"
    | "davine-joy-randolph";
}

export interface VisualEffectsNomination extends Nomination {
  movieSlug:
    | "the-creator"
    | "godzilla-minus-one"
    | "guardians-of-the-galaxy-vol-3"
    | "mission-impossible-dead-reckoning"
    | "napoleon";
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
      movie: "American Fiction",
      movieSlug: "american-fiction",
    },
    {
      movie: "Anatomy of a Fall",
      movieSlug: "anatomy-of-a-fall",
    },
    {
      movie: "Barbie",
      movieSlug: "barbie",
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
      movie: "Maestro",
      movieSlug: "maestro",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
    },
    {
      movie: "Past Lives",
      movieSlug: "past-lives",
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
  directing: [
    {
      movie: "Anatomy of a Fall",
      movieSlug: "anatomy-of-a-fall",
      name: "Justine Triet",
      nameSlug: "justine-triet",
    },
    {
      movie: "Killers of the Flower Moon",
      movieSlug: "killers-of-the-flower-moon",
      name: "Martin Scorsese",
      nameSlug: "martin-scorsese",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
      name: "Christopher Nolan",
      nameSlug: "christopher-nolan",
    },
    {
      movie: "Poor Things",
      movieSlug: "poor-things",
      name: "Yorgos Lanthimos",
      nameSlug: "yorgos-lanthimos",
    },
    {
      movie: "The Zone of Interest",
      movieSlug: "the-zone-of-interest",
      name: "Jonathan Glazer",
      nameSlug: "jonathan-glazer",
    },
  ],
  leadingActor: [
    {
      movie: "Maestro",
      movieSlug: "maestro",
      name: "Bradley Cooper",
      nameSlug: "bradley-cooper",
    },
    {
      movie: "Rustin",
      movieSlug: "rustin",
      name: "Colman Domingo",
      nameSlug: "colman-domingo",
    },
    {
      movie: "The Holdovers",
      movieSlug: "the-holdovers",
      name: "Paul Giamatti",
      nameSlug: "paul-giamatti",
    },
    {
      movie: "Oppenheimer",
      movieSlug: "oppenheimer",
      name: "Cillian Murphy",
      nameSlug: "cillian-murphy",
    },
    {
      movie: "American Fiction",
      movieSlug: "american-fiction",
      name: "Jeffrey Wright",
      nameSlug: "jeffrey-wright",
    },
  ],
  leadingActress: [
    {
      movie: "Nyad",
      movieSlug: "nyad",
      name: "Annette Bening",
      nameSlug: "annette-bening",
    },
    {
      movie: "Killers of the Flower Moon",
      movieSlug: "killers-of-the-flower-moon",
      name: "Lily Gladstone",
      nameSlug: "lily-gladstone",
    },
    {
      movie: "Anatomy of a Fall",
      movieSlug: "anatomy-of-a-fall",
      name: "Sandra Hüller",
      nameSlug: "sandra-huller",
    },
    {
      movie: "Maestro",
      movieSlug: "maestro",
      name: "Carey Mulligan",
      nameSlug: "carey-mulligan",
    },
    {
      movie: "Poor Things",
      movieSlug: "poor-things",
      name: "Emma Stone",
      nameSlug: "emma-stone",
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
      name: "danielle-brooks",
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
