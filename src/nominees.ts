export interface Nomination {
  movie?: string;
  movieSlug?: string;
  name?: string;
  nameSlug?: string;
  imgSrc?: string;
}

export interface BestPictureNomination extends Nomination {
  movieSlug:
    | "all-quiet"
    | "avatar"
    | "the-banshees"
    | "elvis"
    | "everything-everywhere"
    | "the-fabelmans"
    | "tar"
    | "top-gun"
    | "triangle-of-sadness"
    | "women-talking";
}

export interface DirectingNomination extends Nomination {
  nameSlug:
    | "martin-mcdonag"
    | "daniel-kwan-daniel-scheinert"
    | "steven-spielberg"
    | "todd-field"
    | "ruben-ostlund";
}

export interface LeadingActorNomination extends Nomination {
  nameSlug:
    | "austin-butler"
    | "colin-farrell"
    | "brendan-fraser"
    | "paul-mescal"
    | "bill-nighy";
}

export interface LeadingActressNomination extends Nomination {
  nameSlug:
    | "cate-blanchett"
    | "ana-de-armas"
    | "andrea-riseborough"
    | "michelle-williams"
    | "michelle-yeoh";
}

export interface SupportingActorNomination extends Nomination {
  nameSlug:
    | "brendan-gleeson"
    | "brian-tyree-henry"
    | "judd-hirsch"
    | "barry-keoghan"
    | "ke-huy-quan";
}

export interface SupportingActressNomination extends Nomination {
  nameSlug:
    | "angela-bassett"
    | "hong-chau"
    | "kerry-condon"
    | "jamie-lee-curtis"
    | "stephanie-hsu";
}

export interface AnimatedFeatureNomination extends Nomination {
  movieSlug:
    | "guillermo-del-toros-pinocchio"
    | "marcel"
    | "puss-in-boots"
    | "the-sea-beast"
    | "turning-red";
}

export interface OriginalScreenplayNomination extends Nomination {
  movieSlug:
    | "the-banshees"
    | "everything-everywhere"
    | "the-fabelmans"
    | "tar"
    | "triangle-of-sadness";
}

export interface AdaptedScreenplayNomination extends Nomination {
  movieSlug:
    | "all-quiet"
    | "glass-onion"
    | "living"
    | "top-gun"
    | "women-talking";
}

export interface InternationalFeatureNomination extends Nomination {
  movieSlug: "all-quiet" | "argentina-1985" | "close" | "eo" | "the-quiet-girl";
}

export interface DocumentaryFeatureNomination extends Nomination {
  movieSlug:
    | "all-that-breathes"
    | "all-the-beauty"
    | "fire-of-love"
    | "a-house-made-of-splinters"
    | "navalny";
}

export interface DocumentaryShortNomination extends Nomination {
  movieSlug:
    | "the-elephant-whisperers"
    | "haulout"
    | "how-do-you-measure-a-year"
    | "the-martha-mitchell-effect"
    | "stranger-at-the-gate";
}

export interface LiveActionShortNomination extends Nomination {
  movieSlug:
    | "an-irish-goodbye"
    | "ivalu"
    | "le-pupille"
    | "night-ride"
    | "the-red-suitcase";
}

export interface AnimatedShortNomination extends Nomination {
  movieSlug:
    | "the-boy-the-mole-the-fox-and-the-horse"
    | "the-flying-sailor"
    | "ice-merchants"
    | "my-year-of-dicks"
    | "an-ostrich-told-me";
}

export interface OriginalScoreNomination extends Nomination {
  movieSlug:
    | "all-quiet"
    | "babylon"
    | "the-banshees"
    | "everything-everywhere"
    | "the-fabelmans";
}

export interface OriginalSongNomination extends Nomination {
  movieSlug:
    | "tell-it-like-a-woman"
    | "top-gun"
    | "black-panther"
    | "rrr"
    | "everything-everywhere";
}

export interface SoundNomination extends Nomination {
  movieSlug: "all-quiet" | "avatar" | "the-batman" | "elvis" | "top-gun";
}

export interface ProductionDesignNomination extends Nomination {
  movieSlug: "all-quiet" | "avatar" | "babylon" | "elvis" | "the-fabelmans";
}

export interface CinematographyNomination extends Nomination {
  movieSlug: "all-quiet" | "bardo" | "elvis" | "empire-of-light" | "tar";
}

export interface MakeupNomination extends Nomination {
  movieSlug:
    | "all-quiet"
    | "the-batman"
    | "black-panther"
    | "elvis"
    | "the-whale";
}

export interface CostumeDesignNomination extends Nomination {
  movieSlug:
    | "babylon"
    | "black-panther"
    | "elvis"
    | "everything-everywhere"
    | "mrs-harris";
}

export interface FilmEditingNomination extends Nomination {
  movieSlug:
    | "the-banshees"
    | "elvis"
    | "everything-everywhere"
    | "tar"
    | "top-gun";
}

export interface VisualEffectsNomination extends Nomination {
  movieSlug:
    | "all-quiet"
    | "avatar"
    | "the-batman"
    | "black-panther"
    | "top-gun";
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

const nominees: Nominees = {
  bestPicture: [
    {
      movie: "All Quiet on the Western Front",
      movieSlug: "all-quiet",
    },
    {
      movie: "Avatar: The Way of Water",
      movieSlug: "avatar",
    },
    {
      movie: "The Banshees of Inisherin",
      movieSlug: "the-banshees",
    },
    {
      movie: "Elvis",
      movieSlug: "elvis",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
    },
    {
      movie: "The Fabelmans",
      movieSlug: "the-fabelmans",
    },
    {
      movie: "Tár",
      movieSlug: "tar",
    },
    {
      movie: "Top Gun: Maverick",
      movieSlug: "top-gun",
    },
    {
      movie: "Triangle of Sadness",
      movieSlug: "triangle-of-sadness",
    },
    {
      movie: "Women Talking",
      movieSlug: "women-talking",
    },
  ],
  directing: [
    {
      movie: "The Banshees of Inisherin",
      movieSlug: "the-banshees",
      name: "Martin McDonagh",
      nameSlug: "martin-mcdonag",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
      name: "Daniel Kwan and Daniel Scheinert",
      nameSlug: "daniel-kwan-daniel-scheinert",
    },
    {
      movie: "The Fabelmans",
      movieSlug: "the-fabelmans",
      name: "Steven Spielberg",
      nameSlug: "steven-spielberg",
    },
    {
      movie: "Tár",
      movieSlug: "tar",
      name: "Todd Field",
      nameSlug: "todd-field",
    },
    {
      movie: "Triangle of Sadness",
      movieSlug: "triangle-of-sadness",
      name: "Ruben Östlund",
      nameSlug: "ruben-ostlund",
    },
  ],
  leadingActor: [
    {
      movie: "Elvis Presley",
      movieSlug: "elvis",
      name: "Austin Butler",
      nameSlug: "austin-butler",
    },
    {
      movie: "The Banshees of Inisherin",
      movieSlug: "the-banshees",
      name: "Colin Farrell",
      nameSlug: "colin-farrell",
    },
    {
      movie: "The Whale",
      movieSlug: "the-whale",
      name: "Brendan Fraser",
      nameSlug: "brendan-fraser",
    },
    {
      movie: "Aftersun",
      movieSlug: "aftersun",
      name: "Paul Mescal",
      nameSlug: "paul-mescal",
    },
    {
      movie: "Living",
      movieSlug: "living",
      name: "Bill Nighy",
      nameSlug: "bill-nighy",
    },
  ],
  leadingActress: [
    {
      movie: "Tár",
      movieSlug: "tar",
      name: "Cate Blanchett",
      nameSlug: "cate-blanchett",
    },
    {
      movie: "Blonde",
      movieSlug: "blonde",
      name: "Ana de Armas",
      nameSlug: "ana-de-armas",
    },
    {
      movie: "To Leslie",
      movieSlug: "to-leslie",
      name: "Andrea Riseborough",
      nameSlug: "andrea-riseborough",
    },
    {
      movie: "The Fabelmans",
      movieSlug: "the-fabelmans",
      name: "Michelle Williams",
      nameSlug: "michelle-williams",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
      name: "Michelle Yeoh",
      nameSlug: "michelle-yeoh",
    },
  ],
  supportingActor: [
    {
      movie: "The Banshees of Inisherin",
      movieSlug: "the-banshees",
      name: "Brendan Gleeson",
      nameSlug: "brendan-gleeson",
    },
    {
      movie: "Causeway",
      movieSlug: "causeway",
      name: "Brian Tyree Henry",
      nameSlug: "brian-tyree-henry",
    },
    {
      movie: "The Fabelmans",
      movieSlug: "the-fabelmans",
      name: "Judd Hirsch",
      nameSlug: "judd-hirsch",
    },
    {
      movie: "The Banshees of Inisherin",
      movieSlug: "the-banshees",
      name: "Barry Keoghan",
      nameSlug: "barry-keoghan",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
      name: "Ke Huy Quan",
      nameSlug: "ke-huy-quan",
    },
  ],
  supportingActress: [
    {
      movie: "Black Panther: Wakanda Forever",
      movieSlug: "black-panther",
      name: "Angela Bassett",
      nameSlug: "angela-bassett",
    },
    {
      movie: "The Whale",
      movieSlug: "the-whale",
      name: "Hong Chau",
      nameSlug: "hong-chau",
    },
    {
      movie: "The Banshees of Inisherin",
      movieSlug: "the-banshees",
      name: "Kerry Condon",
      nameSlug: "kerry-condon",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
      name: "Jamie Lee Curtis",
      nameSlug: "jamie-lee-curtis",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
      name: "Stephanie Hsu",
      nameSlug: "stephanie-hsu",
    },
  ],
  animatedFeature: [
    {
      movie: "Guillermo del Toro's Pinocchio",
      movieSlug: "guillermo-del-toros-pinocchio",
    },
    {
      movie: "Marcel the Shell with Shoes On",
      movieSlug: "marcel",
    },
    {
      movie: "Puss in Boots: The Last Wish",
      movieSlug: "puss-in-boots",
    },
    {
      movie: "The Sea Beast",
      movieSlug: "the-sea-beast",
    },
    {
      movie: "Turning Red",
      movieSlug: "turning-red",
    },
  ],
  originalScreenplay: [
    {
      movie: "The Banshees of Inisherin",
      movieSlug: "the-banshees",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
    },
    {
      movie: "The Fabelmans",
      movieSlug: "the-fabelmans",
    },
    {
      movie: "Tár",
      movieSlug: "tar",
    },
    {
      movie: "Triangle of Sadness",
      movieSlug: "triangle-of-sadness",
    },
  ],
  adaptedScreenplay: [
    {
      movie: "All Quiet on the Western Front",
      movieSlug: "all-quiet",
    },
    {
      movie: "Glass Onion: A Knives Out Mystery",
      movieSlug: "glass-onion",
    },
    {
      movie: "Living",
      movieSlug: "living",
    },
    {
      movie: "Top Gun: Maverick",
      movieSlug: "top-gun",
    },
    {
      movie: "Women Talking",
      movieSlug: "women-talking",
    },
  ],
  internationalFeature: [
    {
      movie: "All Quiet on the Western Front",
      movieSlug: "all-quiet",
    },
    {
      movie: "Argentina, 1985",
      movieSlug: "argentina-1985",
    },
    {
      movie: "Close",
      movieSlug: "close",
    },
    {
      movie: "EO",
      movieSlug: "eo",
    },
    {
      movie: "The Quiet Girl",
      movieSlug: "the-quiet-girl",
    },
  ],
  documentaryFeature: [
    {
      movie: "All That Breathes",
      movieSlug: "all-that-breathes",
    },
    {
      movie: "All the Beauty and the Bloodshed",
      movieSlug: "all-the-beauty",
    },
    {
      movie: "Fire of Love",
      movieSlug: "fire-of-love",
    },
    {
      movie: "A House Made of Splinters",
      movieSlug: "a-house-made-of-splinters",
    },
    {
      movie: "Navalny",
      movieSlug: "navalny",
    },
  ],
  documentaryShort: [
    {
      movie: "The Elephant Whisperers",
      movieSlug: "the-elephant-whisperers",
    },
    {
      movie: "Haulout",
      movieSlug: "haulout",
    },
    {
      movie: "How Do You Measure a Year?",
      movieSlug: "how-do-you-measure-a-year",
    },
    {
      movie: "The Martha Mitchell Effect",
      movieSlug: "the-martha-mitchell-effect",
    },
    {
      movie: "Stranger at the Gate",
      movieSlug: "stranger-at-the-gate",
    },
  ],
  liveActionShort: [
    {
      movie: "An Irish Goodbye",
      movieSlug: "an-irish-goodbye",
    },
    {
      movie: "Ivalu",
      movieSlug: "ivalu",
    },
    {
      movie: "Le Pupille",
      movieSlug: "le-pupille",
    },
    {
      movie: "Night Ride",
      movieSlug: "night-ride",
    },
    {
      movie: "The Red Suitcase",
      movieSlug: "the-red-suitcase",
    },
  ],
  animatedShort: [
    {
      movie: "The Boy, the Mole, the Fox and the Horse",
      movieSlug: "the-boy-the-mole-the-fox-and-the-horse",
    },
    {
      movie: "The Flying Sailor",
      movieSlug: "the-flying-sailor",
    },
    {
      movie: "Ice Merchants",
      movieSlug: "ice-merchants",
    },
    {
      movie: "My Year of Dicks",
      movieSlug: "my-year-of-dicks",
    },
    {
      movie: "An Ostrich Told Me the World Is Fake and I Think I Believe It",
      movieSlug: "an-ostrich-told-me",
    },
  ],
  originalScore: [
    {
      movie: "All Quiet on the Western Front",
      movieSlug: "all-quiet",
    },
    {
      movie: "Babylon",
      movieSlug: "babylon",
    },
    {
      movie: "The Banshees of Inisherin",
      movieSlug: "the-banshees",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
    },
    {
      movie: "The Fabelmans",
      movieSlug: "the-fabelmans",
    },
  ],
  originalSong: [
    {
      movie: "Tell It Like a Woman ",
      movieSlug: "tell-it-like-a-woman",
    },
    {
      movie: "Top Gun: Maverick",
      movieSlug: "top-gun",
    },
    {
      movie: "Black Panther: Wakanda Forever",
      movieSlug: "black-panther",
    },
    {
      movie: "RRR",
      movieSlug: "rrr",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
    },
  ],
  sound: [
    {
      movie: "All Quiet on the Western Front",
      movieSlug: "all-quiet",
    },
    {
      movie: "Avatar: The Way of Water",
      movieSlug: "avatar",
    },
    {
      movie: "The Batman",
      movieSlug: "the-batman",
    },
    {
      movie: "Elvis",
      movieSlug: "elvis",
    },
    {
      movie: "Top Gun: Maverick",
      movieSlug: "top-gun",
    },
  ],
  productionDesign: [
    {
      movie: "All Quiet on the Western Front",
      movieSlug: "all-quiet",
    },
    {
      movie: "Avatar: The Way of Water",
      movieSlug: "avatar",
    },
    {
      movie: "Babylon",
      movieSlug: "babylon",
    },
    {
      movie: "Elvis",
      movieSlug: "elvis",
    },
    {
      movie: "The Fabelmans",
      movieSlug: "the-fabelmans",
    },
  ],
  cinematography: [
    {
      movie: "All Quiet on the Western Front",
      movieSlug: "all-quiet",
    },
    {
      movie: "Bardo, False Chronicle of a Handful of Truths",
      movieSlug: "bardo",
    },
    {
      movie: "Elvis",
      movieSlug: "elvis",
    },
    {
      movie: "Empire of Light",
      movieSlug: "empire-of-light",
    },
    {
      movie: "Tár",
      movieSlug: "tar",
    },
  ],
  makeup: [
    {
      movie: "All Quiet on the Western Front",
      movieSlug: "all-quiet",
    },
    {
      movie: "The Batman",
      movieSlug: "the-batman",
    },
    {
      movie: "Black Panther: Wakanda Forever",
      movieSlug: "black-panther",
    },
    {
      movie: "Elvis",
      movieSlug: "elvis",
    },
    {
      movie: "The Whale",
      movieSlug: "the-whale",
    },
  ],
  costumeDesign: [
    {
      movie: "Babylon",
      movieSlug: "babylon",
    },
    {
      movie: "Black Panther: Wakanda Forever",
      movieSlug: "black-panther",
    },
    {
      movie: "Elvis",
      movieSlug: "elvis",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
    },
    {
      movie: "Mrs. Harris Goes to Paris",
      movieSlug: "mrs-harris",
    },
  ],
  filmEditing: [
    {
      movie: "The Banshees of Inisherin",
      movieSlug: "the-banshees",
    },
    {
      movie: "Elvis",
      movieSlug: "elvis",
    },
    {
      movie: "Everything Everywhere All at Once",
      movieSlug: "everything-everywhere",
    },
    {
      movie: "Tár",
      movieSlug: "tar",
    },
    {
      movie: "Top Gun: Maverick",
      movieSlug: "top-gun",
    },
  ],
  visualEffects: [
    {
      movie: "All Quiet on the Western Front",
      movieSlug: "all-quiet",
    },
    {
      movie: "Avatar: The Way of Water",
      movieSlug: "avatar",
    },
    {
      movie: "The Batman",
      movieSlug: "the-batman",
    },
    {
      movie: "Black Panther: Wakanda Forever",
      movieSlug: "black-panther",
    },
    {
      movie: "Top Gun: Maverick",
      movieSlug: "top-gun",
    },
  ],
};

export default nominees;
