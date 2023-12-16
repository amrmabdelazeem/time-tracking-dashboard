import React from "react";
import avatar from "../images/image-jeremy.png";

export default function Heading({onHandle}) {

  return (
    <div className="header">
      <div className="employee">
        <img src={avatar} alt="employee-avatar" />
        <div className="title">
        <span>Report for</span>
        <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="timeline">
        <button title="daily" onClick={(e)=> onHandle(e.target.title)}>Daily</button>
        <button title="weekly" onClick={(e)=> onHandle(e.target.title)}>Weekly</button>
        <button title="monthly" onClick={(e)=> onHandle(e.target.title)}
        >Monthly</button>
      </div>
    </div>
  );
}
