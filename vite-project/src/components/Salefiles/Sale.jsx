import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Sale.css'
import { salemen } from './SaleDatamen';
import { salewomen } from './SaleDatawomen';

function Sale() {
 const [cardsData, setCardsData] = useState(salemen);
const [womenData, setWomenData] = useState(salewomen);

return (
  <div>
    <div className="cards-container d-flex flex-wrap gap-4 justify-content-center">
    <div className="sale-banner d-flex flex-column">
      <img src='/src/assets/home-assets/hero-banner-large-3.jpg'/>
    </div>
      <img className='small-banner' src='/src/assets/Sale-assets/sale-banner-small.jpg'/>
    <div className="sale-headings">
    <hr/><p>Men Sale</p><hr/>
    </div>
      {cardsData.map((card, index) => (
        <div key={index} className="card-custom">
          <img src={card.image} alt="Card Image" />
           <span>{card.discount}</span>

  
          {/* Content hidden initially */}
          <div className="textcontent">
            <h2>{card.title}</h2>
            <h5>{card.description}</h5>
            <h6 style={{color:'green'}}>{card.price}</h6>
            <Link to={{ pathname: `/Sale/salemen/${index+1}`, state: { cardData: card } }}> <button>Buy Now</button></Link>
          </div>
  
        </div>
      ))}
    </div>

  <div className="cards-container d-flex flex-wrap gap-4 justify-content-center">
  <div className="sale-headings">
    <hr/><p>Women Sale</p><hr/>
    </div>
    {womenData.map((women, index) => (
      <div key={index} className="card-custom">
        <img src={women.image} alt="Card Image" />
        <span>{women.discount}</span>

        {/* Content hidden initially */}
        <div className="textcontent">
          <h2>{women.title}</h2>
          <h5>{women.description}</h5>
          <h6 style={{color:'green'}}>{women.price}</h6>
          <Link to={{ pathname: `/Sale/salewomen/${index+1}`, state: { womenData: women } }}> <button>Buy Now</button></Link>
        </div>

      </div>
    ))}
  </div>
</div>
);
}
export default Sale