export interface Nomination {
  movie: string;
  name?: string;
  imgSrc?: string;
}

export interface Nominees {
  bestPicture: Nomination[];
  directing: Nomination[];
  leadingActor: Nomination[];
  leadingActress: Nomination[];
  supportingActor: Nomination[];
  supportingActress: Nomination[];
  animatedFeature: Nomination[];
  originalScreenplay: Nomination[];
  adaptedScreenplay: Nomination[];
  internationalFeature: Nomination[];
  documentaryFeature: Nomination[];
  documentaryShort: Nomination[];
  liveActionShort: Nomination[];
  animatedShort: Nomination[];
  originalScore: Nomination[];
  originalSong: Nomination[];
  sound: Nomination[];
  productionDesign: Nomination[];
  cinematography: Nomination[];
  makeup: Nomination[];
  costumeDesign: Nomination[];
  filmEditing: Nomination[];
  visualEffects: Nomination[];
}

const nominees: Nominees = {
  bestPicture: [
    {
      movie: "All Quiet on the Western Front",
      imgSrc: "/moviePosters/all-quiet.jpg",
    },
    {
      movie: "Avatar: The Way of Water",
      imgSrc: "/moviePosters/avatar.jpg",
    },
    {
      movie: "The Banshees of Inisherin",
      imgSrc: "/moviePosters/the-banshees.jpg",
    },
    {
      movie: "Elvis",
      imgSrc: "/moviePosters/elvis.jpg",
    },
    {
      movie: "Everything Everywhere All at Once",
      imgSrc: "/moviePosters/everything-everywhere.jpg",
    },
    {
      movie: "The Fabelmans",
      imgSrc: "/moviePosters/the-fabelmans.jpg",
    },
    {
      movie: "Tár",
      imgSrc: "/moviePosters/tar.jpg",
    },
    {
      movie: "Top Gun: Maverick",
      imgSrc: "/moviePosters/top-gun.jpg",
    },
    {
      movie: "Triangle of Sadness",
      imgSrc: "/moviePosters/triangle-of-sadness.jpg",
    },
    {
      movie: "Women Talking",
      imgSrc: "/moviePosters/women-talking.jpg",
    },
  ],
  directing: [
    {
      movie: "The Banshees of Inisherin",
      name: "Martin McDonagh",
      imgSrc: "/portraits/martin-mcdonag.jpg",
    },
    {
      movie: "Everything Everywhere All at Once",
      name: "Daniel Kwan and Daniel Scheinert",
      imgSrc: "/portraits/daniel-kwan-daniel-scheinert.jpg",
    },
    {
      movie: "The Fabelmans",
      name: "Steven Spielberg",
      imgSrc: "/portraits/steven-spielberg.jpg",
    },
    {
      movie: "Tár",
      name: "Todd Field",
      imgSrc: "/portraits/todd-field.jpg",
    },
    {
      movie: "Triangle of Sadness",
      name: "Ruben Östlund",
      imgSrc: "/portraits/ruben-ostlund.jpg",
    },
  ],
  leadingActor: [
    {
      movie: "Elvis Presley",
      name: "Austin Butler",
      imgSrc: "/portraits/austin-butler.jpg",
    },
    {
      movie: "The Banshees of Inisherin",
      name: "Colin Farrell",
      imgSrc: "/portraits/colin-farrell.jpg",
    },
    {
      movie: "The Whale",
      name: "Brendan Fraser",
      imgSrc: "/portraits/brendan-fraser.jpg",
    },
    {
      movie: "Aftersun",
      name: "Paul Mescal",
      imgSrc: "/portraits/paul-mescal.jpg",
    },
    {
      movie: "Living",
      name: "Bill Nighy",
      imgSrc: "/portraits/bill-nighy.jpg",
    },
  ],
  leadingActress: [
    {
      movie: "Tár",
      name: "Cate Blanchett",
      imgSrc: "/portraits/cate-blanchett.jpg",
    },
    {
      movie: "Blonde",
      name: "Ana de Armas",
      imgSrc: "/portraits/ana-de-armas.jpg",
    },
    {
      movie: "To Leslie",
      name: "Andrea Riseborough",
      imgSrc: "/portraits/andrea-riseborough.jpg",
    },
    {
      movie: "The Fabelmans",
      name: "Michelle Williams",
      imgSrc: "/portraits/michelle-williams.jpg",
    },
    {
      movie: "Everything Everywhere All at Once",
      name: "Michelle Yeoh",
      imgSrc: "/portraits/michelle-yeoh.jpg",
    },
  ],
  supportingActor: [
    {
      movie: "The Banshees of Inisherin",
      name: "Brendan Gleeson",
      imgSrc: "/portraits/brendan-gleeson.jpg",
    },
    {
      movie: "Causeway",
      name: "Brian Tyree Henry",
      imgSrc: "/portraits/brian-tyree-henry.jpg",
    },
    {
      movie: "The Fabelmans",
      name: "Judd Hirsch",
      imgSrc: "/portraits/judd-hirsch.jpg",
    },
    {
      movie: "The Banshees of Inisherin",
      name: "Barry Keoghan",
      imgSrc: "/portraits/barry-keoghan.jpg",
    },
    {
      movie: "Everything Everywhere All at Once",
      name: "Ke Huy Quan",
      imgSrc: "/portraits/ke-huy-quan.jpg",
    },
  ],
  supportingActress: [
    {
      movie: "Black Panther: Wakanda Forever",
      name: "Angela Bassett",
      imgSrc: "/portraits/angela-bassett.jpg",
    },
    {
      movie: "The Whale",
      name: "Hong Chau",
      imgSrc: "/portraits/hong-chau.jpg",
    },
    {
      movie: "The Banshees of Inisherin",
      name: "Kerry Condon",
      imgSrc: "/portraits/kerry-condon.jpg",
    },
    {
      movie: "Everything Everywhere All at Once",
      name: "Jamie Lee Curtis",
      imgSrc: "/portraits/jamie-lee-curtis.jpg",
    },
    {
      movie: "Everything Everywhere All at Once",
      name: "Stephanie Hsu",
      imgSrc: "/portraits/stephanie-hsu.jpg",
    },
  ],
  animatedFeature: [
    {
      movie: "Guillermo del Toro's Pinocchio",
      name: "G. del Toro, M. Gustafson, G. Ungar, and A. Bulkley",
      imgSrc: "/moviePosters/guillermo-del-toros-pinocchio.jpg",
    },
    {
      movie: "Marcel the Shell with Shoes On",
      name: "D. F. Camp, E. Holm, A. Goldman, C. Kaplan, and P. Mezey",
      imgSrc: "/moviePosters/marcel.jpg",
    },
    {
      movie: "Puss in Boots: The Last Wish",
      name: "Joel Crawford and Mark Swift",
      imgSrc: "/moviePosters/puss-in-boots.jpg",
    },
    {
      movie: "The Sea Beast",
      name: "Chris Williams and Jed Schlanger",
      imgSrc: "/moviePosters/the-sea-beast.jpg",
    },
    {
      movie: "Turning Red",
      name: "Domee Shi and Lindsey Collins",
      imgSrc: "/moviePosters/turning-red.jpg",
    },
  ],
  originalScreenplay: [
    {
      movie: "The Banshees of Inisherin",
    },
    {
      movie: "Everything Everywhere All at Once",
    },
    {
      movie: "The Fabelmans",
    },
    {
      movie: "Tár",
    },
    {
      movie: "Triangle of Sadness",
    },
  ],
  adaptedScreenplay: [
    {
      movie: "All Quiet on the Western Front",
    },
    {
      movie: "Glass Onion: A Knives Out Mystery",
    },
    {
      movie: "Living",
    },
    {
      movie: "Top Gun: Maverick",
    },
    {
      movie: "Women Talking",
    },
  ],
  internationalFeature: [
    {
      movie: "All Quiet on the Western Front",
    },
    {
      movie: "Argentina, 1985",
    },
    {
      movie: "Close",
    },
    {
      movie: "EO",
    },
    {
      movie: "The Quiet Girl",
    },
  ],
  documentaryFeature: [
    {
      movie: "All That Breathes",
    },
    {
      movie: "All the Beauty and the Bloodshed",
    },
    {
      movie: "Fire of Love",
    },
    {
      movie: "A House Made of Splinters",
    },
    {
      movie: "Navalny",
    },
  ],
  documentaryShort: [
    {
      movie: "The Elephant Whisperers",
    },
    {
      movie: "Haulout",
    },
    {
      movie: "How Do You Measure a Year?",
    },
    {
      movie: "The Martha Mitchell Effect",
    },
    {
      movie: "Stranger at the Gate",
    },
  ],
  liveActionShort: [
    {
      movie: "An Irish Goodbye",
    },
    {
      movie: "Ivalu",
    },
    {
      movie: "Le Pupille",
    },
    {
      movie: "Night Ride",
    },
    {
      movie: "The Red Suitcase",
    },
  ],
  animatedShort: [
    {
      movie: "The Boy, the Mole, the Fox and the Horse",
    },
    {
      movie: "The Flying Sailor",
    },
    {
      movie: "Ice Merchants",
    },
    {
      movie: "My Year of Dicks",
    },
    {
      movie: "An Ostrich Told Me the World Is Fake and I Think I Believe It",
    },
  ],
  originalScore: [
    {
      movie: "All Quiet on the Western Front",
    },
    {
      movie: "Babylon",
    },
    {
      movie: "The Banshees of Inisherin",
    },
    {
      movie: "Everything Everywhere All at Once",
    },
    {
      movie: "The Fabelmans",
    },
  ],
  originalSong: [
    {
      movie: "Tell It Like a Woman ",
    },
    {
      movie: "Top Gun: Maverick",
    },
    {
      movie: "Black Panther: Wakanda Forever",
    },
    {
      movie: "RRR",
    },
    {
      movie: "Everything Everywhere All at Once",
    },
  ],
  sound: [
    {
      movie: "All Quiet on the Western Front",
    },
    {
      movie: "Avatar: The Way of Water",
    },
    {
      movie: "The Batman",
    },
    {
      movie: "Elvis",
    },
    {
      movie: "Top Gun: Maverick",
    },
  ],
  productionDesign: [
    {
      movie: "All Quiet on the Western Front",
    },
    {
      movie: "Avatar: The Way of Water",
    },
    {
      movie: "Babylon",
    },
    {
      movie: "Elvis",
    },
    {
      movie: "The Fabelmans",
    },
  ],
  cinematography: [
    {
      movie: "All Quiet on the Western Front",
    },
    {
      movie: "Bardo, False Chronicle of a Handful of Truths",
    },
    {
      movie: "Elvis",
    },
    {
      movie: "Empire of Light",
    },
    {
      movie: "Tár",
    },
  ],
  makeup: [
    {
      movie: "All Quiet on the Western Front",
    },
    {
      movie: "The Batman",
    },
    {
      movie: "Black Panther: Wakanda Forever",
    },
    {
      movie: "Elvis",
    },
    {
      movie: "The Whale",
    },
  ],
  costumeDesign: [
    {
      movie: "Babylon",
    },
    {
      movie: "Black Panther: Wakanda Forever",
    },
    {
      movie: "Elvis",
    },
    {
      movie: "Everything Everywhere All at Once",
    },
    {
      movie: "Mrs. Harris Goes to Paris",
    },
  ],
  filmEditing: [
    {
      movie: "The Banshees of Inisherin",
    },
    {
      movie: "Elvis",
    },
    {
      movie: "Everything Everywhere All at Once",
    },
    {
      movie: "Tár",
    },
    {
      movie: "Top Gun: Maverick",
    },
  ],
  visualEffects: [
    {
      movie: "All Quiet on the Western Front",
    },
    {
      movie: "Avatar: The Way of Water",
    },
    {
      movie: "The Batman",
    },
    {
      movie: "Black Panther: Wakanda Forever",
    },
    {
      movie: "Top Gun: Maverick",
    },
  ],
};

export default nominees;
