import React from "react";

export default function ActivityHeader({name}) {
    let title = name.toLowerCase().replace(" ","-");
  return (
    <div className="bgHeader">
      <img className="icon" src={"./images/icon-"+title+".svg"} alt="icon-briefcase" />
    </div>
  );
}
