import React from "react";
import "./ProductCard.css"
import Product from "./Product";
function ProductCard({
    key,
    title,
    image,
    price,
    priceOld
}){
    return(
        <div className="item-container">
            <img src={image}/>
        
        <div className="item-info">
            <div className="item-title">
                {title}
            </div>
            
            <div className="item-footer">
            <div class="star_rating"> 
                <span className="star">&#9734;</span>
                <span className="star">&#9734;</span>
                <span className="star">&#9734;</span>
                <span className="star">&#9734;</span>
                <span className="star">&#9734;</span>
            </div>
            
            <div className="old-price">
                    {priceOld}
                </div>
                <div className="item-price">
                    {price}
                </div>
               
                

            </div>
            
          <div className="button-dd">
                <button className="add-to-cart">Add To Cart</button>
                </div>



        </div>
        </div>

      

       
    )
}
export default ProductCard;