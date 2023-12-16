import React, {useState} from "react";
import Heading from "./Heading";
import Activity from "./Activity";
import data from "../data.json";

 
export default function App() {
  const [time, setTime] = useState("weekly");

  function handleTime(childTime){
    setTime(childTime);
  }
  return (
    <div className="container">
      <Heading onHandle={handleTime}/>
      {data.map((item, index)=> {
        if(time === "daily"){
          return (
          <Activity
            key={index}
            id={index}
            title={item.title}
            current={item.timeframes.daily.current}
            previous={item.timeframes.daily.previous}
          />
        );
        }else if(time=== "monthly"){
          return (
          <Activity
            key={index}
            id={index}
            title={item.title}
            current={item.timeframes.monthly.current}
            previous={item.timeframes.monthly.previous}
          />
        );
        }else if(time==="weekly"){
          return (
          <Activity
            key={index}
            id={index}
            title={item.title}
            current={item.timeframes.weekly.current}
            previous={item.timeframes.weekly.previous}
          />
        );
        }else{
          return null;
        }
      })}
    </div>
  );
}
