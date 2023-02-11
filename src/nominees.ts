export interface Nomination {
  movie: string;
  name?: string;
  imgSrc?: string;
}

export interface Nominees {
  bestPicture: Nomination[];
  directing: Nomination[];
  costumeDesign: Nomination[];
  leadingActor: Nomination[];
  leadingActress: Nomination[];
  supportingActor: Nomination[];
  supportingActress: Nomination[];
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
    }
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
    }
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
    }
  ]
};

export default nominees;
