import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import {auth} from "./firebase";
function Header() {
    const [{basket, user}] = useStateValue();
    console.log(basket);
    const login =() =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        // nav == div but since we are making a navbar
        <nav className = "header">
            {/* Logo on the left */}
            <Link to = "/">
                <img className = "header_logo" 
                src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="Amazon_logo"/>
            </Link>
            {/* Search box */}
            <div className = "header__search">
                <input type ="text" className="header__searchInput"/>
                <SearchIcon className = "header__SearchIcon" />
            </div>
            {/* 3 links */}
            <div className="header__nav">
                {/* Link 1 */}
                <Link to = {!user && "/login"} className = "header__link">
                    <div onClick = {login} className = "header__option">
                        <span className ="header__optionLineOne">Hello {user?.email}</span>
                        <span className = "header__optionLineTwo">{user? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                {/*  Link 2  */}
                <Link to = "/" className = "header__link">
                    <div className = "header__option">
                        <span className ="header__optionLineOne">Returns</span>
                        <span className = "header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* Link 3 */}
                <Link to = "/" className = "header__link">
                    <div className = "header__option">
                        <span className ="header__optionLineOne">Your</span>
                        <span className = "header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* Link 4 */}
                <Link to = "/checkout" className = "header__link">
                    <div className = " header__optionBasket">
                        {/* shopping basket icon */}
                        <ShoppingBasketIcon/>
                        {/* # of items */}
                        <span className = "header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            {/* Basket Icon with number */}
        </nav>
    )
}

export default Header
