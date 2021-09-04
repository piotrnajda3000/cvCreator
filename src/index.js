import React from "react";
import ReactDOM from "react-dom";
import CvCreator from "./components/CvCreator";
import "normalize.css";
import "./styles/index.css";
import uniqid from "uniqid";

const DEFAULT_CV = {
  general: {
    first: "John",
    last: "Doe",
    email: "johndoe@gmail.com",
    phone: "+48777777777",
  },
  education: [
    {
      where: "Example School",
      title: "Engineer",
      from: "2015",
      to: "2018",
      id: uniqid(),
    },
    {
      where: "Example School",
      title: "Masters in UX/UI",
      from: "2018",
      to: "2020",
      id: uniqid(),
    },
  ],
  experience: [
    {
      where: "Spotify",
      title: "Play button magician",
      from: "2021",
      to: "2026",
      id: uniqid(),
    },
    {
      where: "Twitter",
      title: "Bird feeder",
      from: "2026",
      to: "2032",
      id: uniqid(),
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <CvCreator defaultCv={DEFAULT_CV} />
  </React.StrictMode>,
  document.getElementById("root")
);
