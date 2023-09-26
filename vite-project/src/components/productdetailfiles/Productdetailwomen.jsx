// ProductDetail.js
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { women } from '../womenfiles/WomenData';
import Counter from '../Counterfiles/Counter';


function ProductDetailwomen() {
  const [cardData,setCardData]=useState({})
  const params=useParams();
useEffect(()=>{
  const data=women.filter((item)=>item.id==params.id) 
  setCardData(data[0])
},[])


  if (!cardData) {
    // Handle the case when cardData is null or undefined
    return <div style={{fontSize:'30px',textAlign:'center',margin:'100px',fontWeight:'700'}}>Data Not Found</div>;
  }


  return (
    // container
    <div className="container d-flex justify-content-center" style={{paddingTop:'50px',backgroundColor:'#f5f5f5',minWidth:'100%',paddingBottom:'50px'}}>
    <div className="product-detail d-flex flex-wrap align-items-center justify-content-center" style={{gap:'80px'}}>
    {/* image */}
      <div className="product-detail-image">
      <img src={cardData.image} alt="No Image Available" style={{borderRadius:'10px',width:'320px',height:'500px',boxShadow:'5px 5px 5px #808080'}} />

      </div>
      {/* title-description */}
      <div className="title-description" style={{marginBottom:'50px'}}>

        {/* title */}
      <h3 style={{color:'#404040'}}><i>{cardData.title}</i></h3>

      {/* description */}
      <h5 style={{color:'#808080'}}><i>{cardData.description}</i></h5>

      {/* price */}
      <h6 className='mt-4'>{cardData.price}</h6>

      {/* Stock */}
      <p className='mb-4 mt-4'>Avilability:<span className='text-success'style={{fontWeight:'600'}}>In Stock</span></p>

      {/* counter */}
      <Counter/>
      
      {/* button */}
      <button className='btn btn-dark' style={{width:'200px',height:'40px',marginTop:'30px'}}>Add to cart</button>
      </div>
    </div>
    </div>
  );
}

export default ProductDetailwomen;




