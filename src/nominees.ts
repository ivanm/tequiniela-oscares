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
      movie: "The Fabelmans",
      name: "Steven Spielberg",
      imgSrc: "",
    }
  ]
};

export default nominees;
