export interface Nomination {
  movie: string;
  name?: string;
  imgSrc?: string;
}

export interface Nominees {
  bestPicture: Nomination[];
  directing: Nomination[];
  // costumeDesign: Nomination[];
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
      name: "Guillermo del Toro, Mark Gustafson, Gary Ungar, and Alex Bulkley",
      imgSrc: "/moviePosters/guillermo-del-toros-pinocchio.jpg",
    },
    {
      movie: "Marcel the Shell with Shoes On",
      name: "Dean Fleischer Camp, E. Holm, A. Goldman, C. Kaplan, and P. Mezey",
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
      name: "Martin McDonagh",
    },
    {
      movie: "Everything Everywhere All at Once",
      name: "Daniel Kwan and Daniel Scheinert",
    },
    {
      movie: "The Fabelmans",
      name: "Steven Spielberg and Tony Kushner",
    },
    {
      movie: "Tár",
      name: "Todd Field",
    },
    {
      movie: "Triangle of Sadness",
      name: "Ruben Östlund",
    },
  ],
  adaptedScreenplay: [
    {
      movie: "All Quiet on the Western Front",
      name: "Edward Berger, Lesley Paterson, and Ian Stokell",
    },
    {
      movie: "Glass Onion: A Knives Out Mystery",
      name: "Rian Johnson",
    },
    {
      movie: "Living",
      name: " Kazuo Ishiguro",
    },
    {
      movie: "Top Gun: Maverick",
      name: " Ehren Kruger, Eric Warren Singer, and Christopher McQuarrie",
    },
    {
      movie: "Women Talking",
      name: " Sarah Polley",
    },
  ],
  internationalFeature: [
    {
      movie: "All Quiet on the Western Front",
      name: "Edward Berger",
    },
    {
      movie: "Argentina, 1985",
      name: "Santiago Mitre",
    },
    {
      movie: "Close",
      name: "Lukas Dhont",
    },
    {
      movie: "EO",
      name: "Jerzy Skolimowski",
    },
    {
      movie: "The Quiet Girl",
      name: "Colm Bairéad",
    },
  ],
  documentaryFeature: [
    {
      movie: "All That Breathes",
      name: "Shaunak Sen, Aman Mann, and Teddy Leifer",
    },
    {
      movie: "All the Beauty and the Bloodshed",
      name: "Laura Poitras, Howard Gertler, John Lyons, Nan Goldin, and Yoni Golijov",
    },
    {
      movie: "Fire of Love",
      name: "Sara Dosa, Shane Boris, and Ina Fichman",
    },
    {
      movie: "A House Made of Splinters",
      name: "Simon Lereng Wilmont and Monica Hellström",
    },
    {
      movie: "Navalny",
      name: "Daniel Roher, Odessa Rae, Diane Becker, Melanie Miller, and Shane Boris",
    },
  ],
  documentaryShort: [
    {
      movie: "The Elephant Whisperers",
      name: "Kartiki Gonsalves and Guneet Monga",
    },
    {
      movie: "Haulout",
      name: "Evgenia Arbugaeva and Maxim Arbugaev",
    },
    {
      movie: "How Do You Measure a Year?",
      name: "Jay Rosenblatt",
    },
    {
      movie: "The Martha Mitchell Effect",
      name: "Anne Alvergue and Beth Levison",
    },
    {
      movie: "Stranger at the Gate",
      name: "Joshua Seftel and Conall Jones",
    },
  ],
  liveActionShort: [
    {
      movie: "An Irish Goodbye",
      name: "Tom Berkely and Ross White",
    },
    {
      movie: "Ivalu",
      name: "Anders Walter and Rebecca Pruzan",
    },
    {
      movie: "Le Pupille",
      name: "Alice Rohrwacher and Alfonso Cuarón", 
    },
    {
      movie: "Night Ride",
      name: "Eirik Tveiten and Gaute Lid Larssen",
    },
    {
      movie: "The Red Suitcase",
      name: "Cyrus Neshvad",
    },
  ],
  animatedShort: [
    {
      movie: "The Boy, the Mole, the Fox and the Horse",
      name: "Charlie Mackesy and Matthew Freud",
    },
    {
      movie: "The Flying Sailor",
      name: "Wendy Tilby and Amanda Forbis",
    },
    {
      movie: "Ice Merchants",
      name: "João Gonzalez and Bruno Caetano", 
    },
    {
      movie: "My Year of Dicks",
      name: "Sara Gunnarsdóttir and Pamela Ribon",
    },
    {
      movie: "An Ostrich Told Me the World Is Fake and I Think I Believe It",
      name: "Lachlan Pendragon",
    },
  ],
  originalScore: [
    {
      movie: "All Quiet on the Western Front",
      name: "Volker Bertelmann",
    },
    {
      movie: "Babylon",
      name: "Justin Hurwitz",
    },
    {
      movie: "The Banshees of Inisherin",
      name: "Carter Burwell", 
    },
    {
      movie: "Everything Everywhere All at Once",
      name: "Son Lux",
    },
    {
      movie: "The Fabelmans",
      name: "John Williams",
    },
  ],
};

export default nominees;
