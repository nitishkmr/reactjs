import React from "react";
import Detail from "./Detail";


function Card(props) {
    return (
      <div>
        <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <img
              className="circle-img"
              src={props.imgURL}
              alt="avatar_img"
            />
          </div>
          <div className="bottom">
            <Detail detailInfo={props.phone}/>
            <Detail detailInfo={props.email}/>
          </div>
        </div>
      </div>
    );
  }

  export default Card;