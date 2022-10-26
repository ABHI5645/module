import React from "react";
import "./Product.css"
import ProductCard from "./ProductCard";

const list1=[
    {
        "id": "1",
        "newPrice": "47999",
        "oldPrice": "65999",
        "productImage": "https://m.media-amazon.com/images/I/417PwBC+iEL._SX342_SY445_.jpg",
        "productName": "Apple iPhone 12 (64GB) - (Product) RED"
        },
        {
        "id": "2",
        "newPrice": "109900",
        "oldPrice": "129900",
        "productImage": "https://m.media-amazon.com/images/I/617FFRO3vcL._SX679_.jpg",
        "productName": "Apple iPhone 13 Pro (256GB) - Silver"
        },
        {
            "id": "3",
            "newPrice": "2990",
            "oldPrice": "3190",
            "productImage": "https://m.media-amazon.com/images/I/71L5lSfJIPS._SX679_.jpg",
            "productName": "New Apple AirTag"
        },
        {
            "id": "4",
            "newPrice": "10900",
              "oldPrice": "10900",
            "productImage": "https://m.media-amazon.com/images/I/41tbRWAJfES._SX679_.jpg",
           "productName": "Apple MagSafe Battery Pack "
        },
        {
        "id": "5",
"newPrice": "16900",
"oldPrice": "26900",
"productImage": "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg",
"productName": "Apple AirPods Pro (2nd Generation) ​​​​​​​"
        },
        {
            "id": "6",
            "newPrice": "1649",
            "oldPrice": "1900",
            "productImage": "https://m.media-amazon.com/images/I/41YDDVjblsL._SX679_.jpg",
            "productName": "Apple EarPods with 3.5mm Headphone Plug​​​​​​​​​​​​​​"
            },
          




]
 function Product(){
    
   
    return(
        
        
        
        <div className="product-container">
            <div className="product-header">
                Products
            </div>
            <div className="product-list">
                {
                    list1.map((items)=>
                        <ProductCard 

                        key={items.id}
                        title={items.productName}
                        price={items.newPrice}
                        priceOld={items.oldPrice}
                        image={items.productImage}/>
 )
                }
            </div>
        </div>
    )
}
export default Product;