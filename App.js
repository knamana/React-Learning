import React from "react";
import ReactDOM from "react-dom/client";
import icon from "./icon.jpeg";
import userIcon from "./user-icon.png";
import { FaSearch } from "react-icons/fa";

// Header Component - logo, search, list items, profile icon
const HeaderComponent = () => {
    return (
        <div className="header">
            {/*Logo*/}
            <div className="left">
                <img src={icon} alt="icon" />
            </div>
            {/*Search Bar*/}
            <div className="center">
                <input className="input" type="text" placeholder="Search" />
                <button type="submit">
                    <FaSearch />
                </button>
            </div>
            {/*Navigation items*/}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {/*Profile Icon*/}
            <div className="right">
                <img src={userIcon} alt="profile-icon" />
            </div>
        </div>
    );
};
const RestaurantCard = ({resName, cuisine, ratings, eta}) => {
    return (
        <div className="res-card">
            <img src="https://www.freep.com/gcdn/presto/2020/01/02/PDTF/4bdb10da-dd68-4f5d-9289-be1373405915-_Medium_Pepperoni_5x7.jpg?crop=2099,1181,x1,y319&width=2099&height=1181&format=pjpg&auto=webp" />
            <h1>{resName}</h1>
            <h3>{cuisine}</h3>
            <h3>{ratings}</h3>
            <h3>{eta}</h3>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="res-container">
                <RestaurantCard
                    resName = "Dominos"
                    cuisine = "Pizzas, Pastas, Chicken"
                    ratings = "4.9 stars"
                    eta = "40 mins"
                />
                <RestaurantCard 
                    resName = "KFC"
                    cuisine = "Burger, Chicken, Fries"
                    ratings = "4.9 stars"
                    eta = "39 mins"
                />  
            </div>
        </div>
    );
};

const AppLayout = () => {
    return(
        <div className="app">
            <HeaderComponent />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the component
root.render(<AppLayout/>);