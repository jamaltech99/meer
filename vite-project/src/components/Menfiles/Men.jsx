import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Men.css';
import { men } from './MenData';


function Men() {
  // Declare and set initial state for an array of card data
  const [cardsData, setCardsData] = useState(men);

  return (
      <div className="cards-container d-flex flex-wrap gap-4 justify-content-center">
      <div className="men-banner">
        <img src='/src/assets/men-assets/men-banner.jpg'/>
      </div>
        {cardsData.map((card, index) => (
          <div key={index} className="card-custom">
            <img src={card.image} alt="Card Image" />
    
            {/* Content hidden initially */}
            <div className="textcontent">
              <h2>{card.title}</h2>
              <h5>{card.description}</h5>
              <h6 style={{color:'green'}}>{card.price}</h6>
              <Link to={{ pathname: `/Men/${index+1}`, state: { cardData: card } }}> <button>Buy Now</button></Link>
            </div>
    
          </div>
        ))}
      </div>
    );
    

}

export default Men;













