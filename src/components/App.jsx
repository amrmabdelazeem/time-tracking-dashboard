import React from "react";
import Heading from "./Heading";
import Activity from "./Activity";
import data from "../data.json";

//  console.log(newData);
export default function App() {
  return (
    <div className="container">
      <Heading />
      {data.map((item, index) => {
        return (
          <Activity
            key={index}
            id={index}
            title={item.title}
            current={item.timeframes.weekly.current}
            previous={item.timeframes.weekly.previous}
          />
        );
      })}
    </div>
  );
}
