import TechnologiesCard  from './Card.modules.scss'
import React from "react";

const Card = (props) => {
    console.log(props.img);
    return (
        <div className={TechnologiesCard.card} >
            
            <img src={props.img} alt='' />
         </div>
    );
};

export default Card;