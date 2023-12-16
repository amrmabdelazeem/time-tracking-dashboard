import React from "react";
import ActivityHeader from "./ActivityHeader";


export default function Activity({title, current, previous}) {
  return (
    <div className="activity">
    <ActivityHeader name={title}/>
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
