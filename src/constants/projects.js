import crm from "../assets/projects/crm_ilus.jpg";
import wordPlay from "../assets/projects/word-play-ilus.jpg";
import reflix from "../assets/projects/reflix-ilus.jpg";
import braveryMedia from "../assets/projects/bravery_media_ilus.jpg";
import myFreedom from "../assets/projects/my_freedom_ilus.jpg";
import BHProject from "../assets/projects/bh_project_ilus.jpg";
import hangmanGame from "../assets/projects/hangman_game_ilus.jpg";

export const PROJECTS = {
  personal: [
    {
      id: 1,
      name: "CRM",
      img: crm,
      livePath: "https://crm-system-app.herokuapp.com/",
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
      img: hangmanGame,
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
      name: "She Codes - Beit Hatfutsot",
      img: BHProject,
      livePath: "",
      githubPath: "https://github.com/Sigalsha/She-codes-BH-Project/tree/client"
    }
  ]
};
