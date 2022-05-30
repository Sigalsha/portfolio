import crm from "../assets/projects/crm.png";
import wordPlay from "../assets/projects/word_play.png";
import reflix from "../assets/projects/reflix.png";
import braveryMedia from "../assets/projects/bravery_media.png";
import myFreedom from "../assets/projects/my_freedom.png";

export const PROJECTS = {
  personal: [
    {
      id: 1,
      name: "CRM",
      img: crm,
      livePath: "https://crm-system-app.herokuapp.com/login",
      githubPath: "https://github.com/Sigalsha/CRM-system"
    },
    {
      id: 2,
      name: "Word Play",
      img: wordPlay,
      livePath: "https://sigalsha.github.io/word-play/",
      githubPath: "https://github.com/Sigalsha/word-play"
    },
    {
      id: 3,
      name: "Reflix",
      img: reflix,
      livePath: "",
      githubPath: "https://github.com/Sigalsha/reflix-react"
    },
    {
      id: 4,
      name: "Hangman Game",
      img: "",
      livePath: "",
      githubPath: "https://github.com/Sigalsha/hangman-game"
    }
  ],
  volunteer: [
    {
      id: 5,
      name: "Bravery Media",
      img: braveryMedia,
      livePath: "https://sigalsha.github.io/Bravery-Media/#/",
      githubPath: "https://github.com/Sigalsha/Bravery-Media/tree/client/client"
    },
    {
      id: 6,
      name: "My Freedom",
      img: myFreedom,
      livePath: "https://sigalsha.github.io/my-freedom/",
      githubPath: "https://github.com/Sigalsha/my-freedom"
    },
    {
      id: 7,
      name: "She codes- BH project",
      img: "",
      livePath: "",
      githubPath: "https://github.com/Sigalsha/She-codes-BH-Project/tree/client"
    }
  ]
};
