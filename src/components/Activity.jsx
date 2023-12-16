import React from "react";
import workIcon from "../images/icon-work.svg";
import playIcon from "../images/icon-play.svg";
import studyIcon from "../images/icon-study.svg";
import exerciseIcon from "../images/icon-exercise.svg";
import socialIcon from "../images/icon-social.svg";
import selfCareIcon from "../images/icon-self-care.svg";

const icons = [
  workIcon,
  playIcon,
  studyIcon,
  exerciseIcon,
  socialIcon,
  selfCareIcon,
];

export default function Activity({ title, current, previous, id }) {
  return (
    <div className="activity">
      <img className="icon" src={icons[id]} alt="activity" />
      <div className="work">
        <div className="title">
          <h2>{title}</h2>
          <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis" />
        </div>
        <div className="content">
          <h3>{current}hrs</h3>
          <p>Last Week - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
}
