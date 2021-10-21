import React from 'react';
import Product from './Product';

export default function Main(props) {
    const {products, onAdd, onRemove} = props;
    
    // const most_expensive = Math.max([...Object.values(v => v=='price')

    return (
        <>
        
        
        <main className="product_collection">
            
        <h2 className="products_tile_big">Products</h2>  

            <div className="products_list">

                {products.map(product => 
                    <Product key={product.id} product={product} onAdd={onAdd}/>
                )}

            </div>

        </main>
        </>
    )
}