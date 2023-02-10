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
      imgSrc: "https://picsum.photos/200",
    },
    {
      movie: "Avatar: The Way of Water",
      imgSrc: "https://picsum.photos/200",
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
