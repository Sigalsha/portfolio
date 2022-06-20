import heart from "../assets/about/heart.svg";
import fire from "../assets/about/flames.svg";
import responsive from "../assets/about/cross-platform.svg";
import creative from "../assets/about/creative.svg";
import code from "../assets/about/code.svg";
import logo from "../assets/about/about_my_logo.svg";

export const ABOUT_TXT = [
  {
    id: 1,
    text: `I’m a full stack developer located in Israel`,
    img: logo,
    class: "about-logo"
  },
  {
    id: 2,
    text: `I have great passion for building end-to-end apps`,
    img: fire,
    class: "fire"
  },
  {
    id: 3,
    text: `I'm creative, autodidact, a great team-player \n and always strive to learn by doing`,
    img: creative,
    class: "creative"
  },
  {
    id: 4,
    text: `Writing high-quality, clean, scalable \n and maintainable code`,
    img: code,
    class: "code"
  },
  {
    id: 5,
    text: `Developing responsive, dynamic \n and user-friendly layouts`,
    img: responsive,
    class: "responsive"
  },
  { id: 6, text: `Love to code, love to create.`, img: heart, class: "heart" }
];
