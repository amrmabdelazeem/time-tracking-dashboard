import React from "react";

export default function Heading() {
  return (
    <div className="header">
      <div className="employee">
        <img src="./images/image-jeremy.png" alt="employee-avatar" width={40} />
        <span>Report for</span>
        <h1>Jeremy Robson</h1>
      </div>
      <div className="timeline">
        <h2>Daily</h2>
        <h2>Weekly</h2>
        <h2>Monthly</h2>
      </div>
    </div>
  );
}
