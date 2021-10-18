import React, { useState } from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './products';

function App() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    
    const _onOpen = elem => {
        console.log('asdasdsd')
    }

    /***** REFACTOR THIS INTO AN OWN MODULE *****/


    // add item to cart
    const onAdd = product => {
      const exist = cartItems.find(x => x.id === product.id);
          if (exist) {
            setCartItems(
                cartItems.map((x) =>
                  x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
           );
          }
          else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      };

    // remove item from cart
    const onRemove = product => {
      const exist = cartItems.find(x => x.id === product.id);
          if (exist.qty === 1) {
              setCartItems(cartItems.filter(x => x.id !== product.id));
          }
          else {
              setCartItems(
                cartItems.map((x) =>
                  x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
                );
          }
    };

    /***** REFACTOR ENDS HERE *****/

    return (

        <div className="App">
            <Header cartItems={cartItems}/>
            <Featured products={products}/>
            <Main onAdd={onAdd} products={products}/>
            <Cart onClick={e => _onOpen(document.getElementsByClassName('cart_button')[0]) } onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
        </div>


    )
}



export default App;