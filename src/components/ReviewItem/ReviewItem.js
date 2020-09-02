import React from 'react';


const ReviewItem = (props) => {
  //console.log(props);
  const {name,quantity,key,price}=props.product;
  const reviewItemStyle={
    borderBottom: '1px solid lightgrey',
     paddingBottom:'10px',
     marginBottom:'5px',
     marginLeft:'200px'

  }
  return (
    <div style={reviewItemStyle} className="review-item"> 
      <h4 className="product-name"> {name}</h4>
      <h6>Quantity: {quantity}</h6> <br/>
  <p><small>${price}</small></p>
      <button className="main-button"
      onClick={()=> props.removeProduct(key)}
      
      >Remove</button>
    </div>
  );
};

export default ReviewItem;