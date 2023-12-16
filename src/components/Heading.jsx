import React from "react";

export default function Heading({onHandle}) {

  return (
    <div className="header">
      <div className="employee">
        <img src="./images/image-jeremy.png" alt="employee-avatar" />
        <div className="title">
        <span>Report for</span>
        <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="timeline">
        <h2 title="daily" onClick={(e)=> onHandle(e.target.title)}>Daily</h2>
        <h2 title="weekly" onClick={(e)=> onHandle(e.target.title)}>Weekly</h2>
        <h2 title="monthly" onClick={(e)=> onHandle(e.target.title)}
        >Monthly</h2>
      </div>
    </div>
  );
}
