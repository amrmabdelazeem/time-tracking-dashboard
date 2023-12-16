import React from "react";


export default function Activity({title, current, previous}) {
  return (
    <div className="activity">
      <img
        className="icon"
        src="./images/icon-work.svg"
        alt="icon-briefcase"
      />
      <div className="work">
        <div className="title">
          <h2>{title}</h2>
          <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis" />
        </div>
        <div className="content">
          <h3>{current}</h3>
          <p>Last Week - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
}
