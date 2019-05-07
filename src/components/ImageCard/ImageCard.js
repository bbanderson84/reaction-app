import React from "react";
import "./style.css";

const ImageCard = props => (
    <div className="card">
      <div className="img-container">
        <img className ="img" 
        alt={props.id} 
        src={props.image} 
        onClick={() => props.isClicked(props.id)}
      />
      </div>
    </div>
  )


export default ImageCard;