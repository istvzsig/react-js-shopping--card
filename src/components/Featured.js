export default function Featured(props) {
    const { products } = props;

    // get all featured product and filter by the most cheapest and expensive 
    let featuredProduct = products
        .filter(product=> product.featured)  // get only the featured products
        // .sort(cheapestProduct => -cheapestProduct.price) // cheapest  = sort it negaitvely
        .sort(mostExpensive => mostExpensive.price)[0]; // most expensive = normal sort // get the first


    let discountPrice = (featuredProduct.price * 0.65).toFixed(2); // -35%;

    return (
        <div className="featured">
            <div className="featured_product">
             
               <h3>{featuredProduct.name}</h3>
               <img src={featuredProduct.image.src} alt={featuredProduct.image.alt}/>
               
                
               <h2 className="product_original_price">

                    {featuredProduct.price}
               
               </h2>
               {/*
               <h2 className="product_discount_price">
               
                    {discountPrice}
               
                </h2>
                */}

            </div>
        
        </div>
    )
}