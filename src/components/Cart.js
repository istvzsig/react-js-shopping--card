import React from 'react';
import { toggleCart } from './functions';


// props are coming from the parent component
export default function Cart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce( (a, c) => a + c.price*c.qty, 0)
    const taxPrice = itemsPrice * .14;
    const shippingPrice = itemsPrice > 2000 ? 0.00 : 50.00;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;


    return (
        <div className="your_cart hide">

            <div onClick={toggleCart} className='close_button'>x</div>
            <h3>Your Cart</h3>
            
            <div>
                {cartItems.length === 0 && <div>Cart is Empty.</div>}
            </div>
        
            {cartItems.map(item => (

               <div className="cart_item" key={item.id}>
            
                    <div className="cart_item_name">{item.name.substring(0,8)}</div>

                   <div className="cart_product_qty">| {item.qty} x ${item.price.toFixed(2)}</div> 

                    <div className="cart_item_buttons">
                        <button className="quantity_button increase_quantity"
                            onClick={() => onAdd(item)}> + </button>
                
                        <button className="quantity_button decriese_quantity"
                            onClick={() => onRemove(item)}> - </button>
                    </div>

               </div>
            ))}

            {cartItems.length !== 0 && (
                
                <>
                    <hr></hr>

                    <div className="summarize">
                        <div className="summarize_label">ITEMS PRICE</div>
                        <div className="price_tag">${itemsPrice.toFixed(2)}</div>
                    </div>

                    <div className="summarize">
                        <div className="summarize_label">TAX PRICE</div>
                        <div className="price_tag">${taxPrice.toFixed(2)}</div>
                    </div>

                    <div className="summarize">
                        <div className="summarize_label">SHIPPING PRICE</div>
                        <div className="price_tag">${shippingPrice.toFixed(2)}</div>
                    </div>

                    <div className="summarize summarize_total">
                        <div className="summarize_label">TOTAL PRICE</div>
                        <div className="price_tag_total">${totalPrice.toFixed(2)}</div>
                    </div>

                    <button className="check_out_button">CHECK OUT</button>

                </>

            )}
        </div>
    )
}