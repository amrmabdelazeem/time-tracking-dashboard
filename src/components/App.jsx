import React from "react";
import Heading from "./Heading";
import Activity from "./Activity";
import data from "../data.json";

 data = [data];
 
export default function App() {
  return (
    <div className="container">
      <Heading />
      {data.map((item, index)=>{
        return <Activity key={index} title={item[index].title}/>
      })}
    </div>
  );
}