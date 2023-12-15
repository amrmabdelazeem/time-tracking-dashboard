import React from "react";

export default function Activity({title}){
    return <div className="activity">
    <img className="icon" src="./images/icon-work.svg" alt="icon-briefcase" />
        <div className="work">
            <div className="title">
                <h2>{title}</h2>
                <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis" />
            </div>
            <div className="content">
                <h3>32hrs</h3>
                <p>Last Week - 36hrs</p>
            </div>
        </div>
    </div>
}