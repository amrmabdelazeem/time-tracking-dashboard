import React from "react";
import workIcon from "../images/icon-work.svg";
import playIcon from "../images/icon-play.svg";
import studyIcon from "../images/icon-study.svg";
import exerciseIcon from "../images/icon-exercise.svg";
import socialIcon from "../images/icon-social.svg";
import selfCareIcon from "../images/icon-self-care.svg";
import ellipsis from "../images/icon-ellipsis.svg";

const icons = [
  workIcon,
  playIcon,
  studyIcon,
  exerciseIcon,
  socialIcon,
  selfCareIcon,
];

const bgColors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

export default function Activity({ title, current, previous, id }) {
  return (
    <div className="activity" style= {{backgroundColor: bgColors[id]}}>
      <img className="icon" src={icons[id]} alt="activity" />
      <div className="work">
        <div className="title">
          <h2>{title}</h2>
          <img src={ellipsis} alt="icon-ellipsis" />
        </div>
        <div className="content">
          <h3>{current}hrs</h3>
          <p>Last Week - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
}
