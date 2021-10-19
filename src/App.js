import React, { useState } from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './products';

// scroll window
function windowYScroll() {
  window.addEventListener(('wheel' || 'scroll'), e => {
    e.deltaY < 0 ? 
      console.log('down')
    : console.log('up')
  })
}


function positioning() {
    const featuredDiv = document.getElementsByClassName('featured')[0];
    let topNavHeight = document.getElementsByClassName('top_menu')[0];
    topNavHeight = topNavHeight.getBoundingClientRect().height;

    return featuredDiv.style.top = `${topNavHeight}px`;
}

function animateCounterIcon() {
  const counter = document.getElementsByClassName('item_counter')[0];

  counter.style.animationName = 'fluffy';

  counter.addEventListener('animationend', e => {
    counter.style.animationName = '';
  })
  
}


function App() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    
    

    const _onOpen = elem => {
        // later
    }

    /***** REFACTOR THIS INTO AN OWN MODULE *****/

    // add item to cart
    const onAdd = product => {

      animateCounterIcon();

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
    // windowYScroll();
    // positioning();
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