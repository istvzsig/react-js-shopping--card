import React from 'react';
import { hoverCard } from './functions';

export default function Product(props) {
    const {product, onAdd, onRemove} = props;
    // const featured = product.featured;
    // const randomImageSizes = [1200, 700, 1080, 960, 666, 1920];
    
    // just generate random image for products
    // this must be replaced with the proper image sizes of custom products
    // product.image.src = product.image.src.replace('1200',
    //     randomImageSizes[Math.random()
    //     // | 0  == Math.floor()
    //     *(randomImageSizes.length - 1) | 0].toString()
    // )

    return (

        <div onMouseOver={hoverCard} className="product_card">
            
            <img className="product_image"
                src={product.image.src}
                alt={product.image.alt}>
            </img>

            <h4 className="product_title">{product.name.substring(0,15)}</h4>
            <h5 className="product_category">{product.category}</h5>
            <h3 className="product_price">${product.price}<sup className="currency">USD</sup></h3>
            <button onClick={()=> onAdd(product)} className="add_to_cart_button hidden">ADD TO CART</button>
        
        </div>
    )
}
