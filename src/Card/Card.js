import React from "react";
import './Card.scss';
const  Card= ({id ,title, image}) =>
{
    return (
        <div className='card'>
                <h2>{title}</h2>
               <img src={image} alt="" />
            </div>


    );
    
};
export default Card;