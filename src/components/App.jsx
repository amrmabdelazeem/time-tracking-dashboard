import React, {useState} from "react";
import Heading from "./Heading";
import Activity from "./Activity";
import data from "../data.json";

 
export default function App() {
  const [time, setTime] = useState("weekly");

  function handleTime(childTime){
    setTime(childTime);
  }

  const getTimeFrame = (item, timeframe) =>({
    key:timeframe,
    current: item.timeframes[timeframe].current,
    previous: item.timeframes[timeframe].previous
  })

  return (
    <div className="container">
      <Heading onHandle={handleTime}/>
      {data.map((item, index)=> {
        const timeframeData = getTimeFrame(item, time);
        return (
          <Activity
            key={index}
            id={index}
            title={item.title}
            current={timeframeData.current}
            previous={timeframeData.previous}
          />
        );
      })}
    </div>
  );
}
