import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className = "home">
            <img className = "home__image" 
            src = "https://images-na.ssl-images-amazon.com/images/G/01/img20/events/OTC/00-Hero_gw-desktop_01_2x._CB430741134_.jpg"/>
        
            {/* product: id, title, price, rating, image */}
            <div className = "home__row">
            <Product 
                id="123123123" 
                title = "Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World" 
                price = {12.99} 
                image = "https://prod-cat-files.macmillan.cloud/MediaResources/Jackets/258W/9781319109752.jpg"
                rating = {5}    
            />
            <Product 
                id="123123124" 
                title = "Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World" 
 
                price = {12.99} 
                image = "https://prod-cat-files.macmillan.cloud/MediaResources/Jackets/258W/9781319109752.jpg"
                rating = {5}    
            />
            </div>
            <div className = "home__row">
                <Product 
                    id="123123125" 
                    title = "Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World"  
                    price = {12.99} 
                    image = "https://prod-cat-files.macmillan.cloud/MediaResources/Jackets/258W/9781319109752.jpg"
                    rating = {5}    
                />
                <Product 
                    id="123123126" 
                    title = "Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World" 
                    price = {12.99} 
                    image = "https://prod-cat-files.macmillan.cloud/MediaResources/Jackets/258W/9781319109752.jpg"
                    rating = {5}    
                />
                <Product 
                    id="123123127" 
                    title = "Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World" 
                    price = {12.99} 
                    image = "https://prod-cat-files.macmillan.cloud/MediaResources/Jackets/258W/9781319109752.jpg"
                    rating = {5}    
                />
            </div>
            <div className = "home__row">
            <Product 
                    id="123123128" 
                    title = "Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World Ways of the World"  
                    price = {12.99} 
                    image = "https://prod-cat-files.macmillan.cloud/MediaResources/Jackets/258W/9781319109752.jpg"
                    rating = {5}    
                />
            </div>
            {/* Product */}
        </div>
    )
}

export default Home
