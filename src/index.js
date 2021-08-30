import React from "react";
import ReactDOM from "react-dom";
import CvCreator from "./components/CvCreator";
import "normalize.css";
import "./styles/index.css";

const DEFAULT_CV = {
  general: {
    name: {
      first: "John",
      last: "Doe",
    },
    contact: {
      email: "johndoe@gmail.com",
      phone: "+48111111111",
    },
  },
  education: [
    {
      where: "Example School",
      title: "Engineer",
      date: {
        from: "2015",
        to: "2018",
      },
    },
    {
      where: "Example School",
      title: "Masters in UX/UI",
      date: {
        from: "2018",
        to: "2020",
      },
    },
  ],
  experience: [
    {
      where: "Spotify",
      title: "Play button magician",
      date: {
        from: "2021",
        to: "2026",
      },
    },
    {
      where: "Twitter",
      title: "Bird feeder",
      date: {
        from: "2026",
        to: "2032",
      },
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <CvCreator defaultCv={DEFAULT_CV} />
  </React.StrictMode>,
  document.getElementById("root")
);
