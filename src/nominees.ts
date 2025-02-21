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
    | "sean-baker"
    | "brady-corbet"
    | "james-mangold"
    | "jacques-audiard"
    | "coralie-fargeat";
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
      movie: "Anora",
      movieSlug: "anora",
      name: "Yura Borisov",
      nameSlug: "yura-borisov",
    },
    {
      movie: "A Real Pain",
      movieSlug: "a-real-pain",
      name: "Kieran Culkin",
      nameSlug: "kieran-culkin",
    },
    {
      movie: "A Complete Unknown",
      movieSlug: "a-complete-unknown",
      name: "Edward Norton",
      nameSlug: "edward-norton",
    },
    {
      movie: "The Brutalist",
      movieSlug: "the-brutalist",
      name: "Guy Pearce",
      nameSlug: "guy-pearce",
    },
    {
      movie: "The Apprentice",
      movieSlug: "the-apprentice",
      name: "Jeremy Strong",
      nameSlug: "jeremy-strong",
    },
  ],
  supportingActress: [
    {
      movie: "A Complete Unknown",
      movieSlug: "a-complete-unknown",
      name: "Monica Barbaro",
      nameSlug: "monica-barbaro",
    },
    {
      movie: "Wicked",
      movieSlug: "wicked",
      name: "Ariana Grande",
      nameSlug: "ariana-grande",
    },
    {
      movie: "The Brutalist",
      movieSlug: "the-brutalist",
      name: "Felicity Jones",
      nameSlug: "felicity-jones",
    },
    {
      movie: "Conclave",
      movieSlug: "conclave",
      name: "Isabella Rossellini",
      nameSlug: "isabella-rossellini",
    },
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
      name: "Zoe Saldaña",
      nameSlug: "zoe-saldana",
    },
  ],
  animatedFeature: [
    {
      movie: "Flow",
      movieSlug: "flow",
    },
    {
      movie: "Inside Out 2",
      movieSlug: "inside-out-2",
    },
    {
      movie: "Memoir of a Snail",
      movieSlug: "memoir-of-a-snail",
    },
    {
      movie: "Wallace & Gromit: Vengeance Most Fowl",
      movieSlug: "wallace-and-gromit",
    },
    {
      movie: "The Wild Robot",
      movieSlug: "the-wild-robot",
    },
  ],
  originalScreenplay: [
    {
      movie: "Anora",
      movieSlug: "anora",
    },
    {
      movie: "The Brutalist",
      movieSlug: "the-brutalist",
    },
    {
      movie: "A Real Pain",
      movieSlug: "a-real-pain",
    },
    {
      movie: "September 5",
      movieSlug: "september-5",
    },
    {
      movie: "The Substance",
      movieSlug: "the-substance",
    },
  ],
  adaptedScreenplay: [
    {
      movie: "A Complete Unknown",
      movieSlug: "a-complete-unknown",
    },
    {
      movie: "Conclave",
      movieSlug: "conclave",
    },
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
    },
    {
      movie: "Nickel Boys",
      movieSlug: "nickel-boys",
    },
    {
      movie: "Sing Sing",
      movieSlug: "sing-sing",
    },
  ],
  internationalFeature: [
    {
      movie: "I'm Still Here",
      movieSlug: "im-still-here",
    },
    {
      movie: "The Girl with the Needle",
      movieSlug: "the-girl-with-the-needle",
    },
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
    },
    {
      movie: "The Seed of the Sacred Fig",
      movieSlug: "the-seed-of-the-sacred-fig",
    },
    {
      movie: "Flow",
      movieSlug: "flow",
    },
  ],
  documentaryFeature: [
    {
      movie: "Black Box Diaries",
      movieSlug: "black-box-diaries",
    },
    {
      movie: "No Other Land",
      movieSlug: "no-other-land",
    },
    {
      movie: "Porcelain War",
      movieSlug: "porcelain-war",
    },
    {
      movie: "Soundtrack to a Coup d'Etat",
      movieSlug: "soundtrack-to-a-coup-detat",
    },
    {
      movie: "Sugarcane",
      movieSlug: "sugarcane",
    },
  ],
  documentaryShort: [
    {
      movie: "Death by Numbers",
      movieSlug: "death-by-numbers",
    },
    {
      movie: "I Am Ready, Warden",
      movieSlug: "i-am-ready-warden",
    },
    {
      movie: "Incident",
      movieSlug: "incident",
    },
    {
      movie: "Instruments of a Beating Heart",
      movieSlug: "instruments-of-a-beating-heart",
    },
    {
      movie: "The Only Girl in the Orchestra",
      movieSlug: "the-only-girl-in-the-orchestra",
    },
  ],
  liveActionShort: [
    {
      movie: "A Lien",
      movieSlug: "a-lien",
    },
    {
      movie: "Anuja",
      movieSlug: "anuja",
    },
    {
      movie: "I'm Not a Robot",
      movieSlug: "im-not-a-robot",
    },
    {
      movie: "The Last Ranger",
      movieSlug: "the-last-ranger",
    },
    {
      movie: "The Man Who Could Not Remain Silent",
      movieSlug: "the-man-who-could-not-remain-silent",
    },
  ],
  animatedShort: [
    {
      movie: "Beautiful Men",
      movieSlug: "beautiful-men",
    },
    {
      movie: "In the Shadow of the Cypress",
      movieSlug: "in-the-shadow-of-the-cypress",
    },
    {
      movie: "Magic Candies",
      movieSlug: "magic-candies",
    },
    {
      movie: "Wander to Wonder",
      movieSlug: "wander-to-wonder",
    },
    {
      movie: "Yuck!",
      movieSlug: "yuck",
    },
  ],
  originalScore: [
    {
      movie: "The Brutalist",
      movieSlug: "the-brutalist",
    },
    {
      movie: "Conclave",
      movieSlug: "conclave",
    },
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
    },
    {
      movie: "Wicked",
      movieSlug: "wicked",
    },
    {
      movie: "The Wild Robot",
      movieSlug: "the-wild-robot",
    },
  ],
  originalSong: [
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
      name: "El Mal",
      nameSlug: "el-mal",
    },
    {
      movie: "The Six Triple Eight",
      movieSlug: "the-six-triple-eight",
      name: "The Journey",
      nameSlug: "the-journey",
    },
    {
      movie: "Sing Sing",
      movieSlug: "sing-sing",
      name: "Like A Bird",
      nameSlug: "like-a-bird",
    },
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
      name: "Mi Camino",
      nameSlug: "mi-camino",
    },
    {
      movie: "Elton John: Never Too Late",
      movieSlug: "elton-john-never-too-late",
      name: "Never Too Late",
      nameSlug: "never-too-late",
    },
  ],
  sound: [
    {
      movie: "A Complete Unknown",
      movieSlug: "a-complete-unknown",
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
      movie: "Wicked",
      movieSlug: "wicked",
    },
    {
      movie: "The Wild Robot",
      movieSlug: "the-wild-robot",
    },
  ],
  productionDesign: [
    {
      movie: "The Brutalist",
      movieSlug: "the-brutalist",
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
      movie: "Nosferatu",
      movieSlug: "nosferatu",
    },
    {
      movie: "Wicked",
      movieSlug: "wicked",
    },
  ],
  cinematography: [
    {
      movie: "The Brutalist",
      movieSlug: "the-brutalist",
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
      movie: "Maria",
      movieSlug: "maria",
    },
    {
      movie: "Nosferatu",
      movieSlug: "nosferatu",
    },
  ],
  makeup: [
    {
      movie: "A Different Man",
      movieSlug: "a-different-man",
    },
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
    },
    {
      movie: "Nosferatu",
      movieSlug: "nosferatu",
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
  costumeDesign: [
    {
      movie: "A Complete Unknown",
      movieSlug: "a-complete-unknown",
    },
    {
      movie: "Conclave",
      movieSlug: "conclave",
    },
    {
      movie: "Gladiator II",
      movieSlug: "gladiator-2",
    },
    {
      movie: "Nosferatu",
      movieSlug: "nosferatu",
    },
    {
      movie: "Wicked",
      movieSlug: "wicked",
    },
  ],
  filmEditing: [
    {
      movie: "Anora",
      movieSlug: "anora",
    },
    {
      movie: "The Brutalist",
      movieSlug: "the-brutalist",
    },
    {
      movie: "Conclave",
      movieSlug: "conclave",
    },
    {
      movie: "Emilia Pérez",
      movieSlug: "emilia-perez",
    },
    {
      movie: "Wicked",
      movieSlug: "wicked",
    },
  ],
  visualEffects: [
    {
      movie: "Alien: Romulus",
      movieSlug: "alien-romulus",
    },
    {
      movie: "Better Man",
      movieSlug: "better-man",
    },
    {
      movie: "Dune: Part Two",
      movieSlug: "dune-2",
    },
    {
      movie: "Kingdom of the Planet of the Apes",
      movieSlug: "kingdom-of-the-planet-of-the-apes",
    },
    {
      movie: "Wicked",
      movieSlug: "wicked",
    },
  ],
};

export default nominees;
