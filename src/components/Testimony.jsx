import React from "react";
import '../styles/Testimony.css'

function Testimony(props) {
    return (
      <div className='testimony-container'>
          <img className='img-testimony'
               src={require(`../images/${props.image}.png`)}
               alt={`${props.name} photography`}/>
          <div className='testimony-texts-container'>
              <p className='testimony-name'><strong>{props.name}</strong> in {props.country}</p>
              <p className='testimony-position'>{props.position} at <strong>{props.company}</strong></p>
              <p className='testimony-text'>"{props.testimony}"</p>
          </div>
      </div>
    );
}

export default Testimony;