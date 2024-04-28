import React from "react";
import ReactDOM from "react-dom/client";
import icon from "./icon.svg";
import userIcon from "./user-icon.png";
import { FaSearch } from "react-icons/fa";

// Logo
const Logo = () => {
    return (
        <div className="left">
            <img src={icon} alt="icon" />
        </div>
    );
};

const SearchBar = () => {
    return (
        <div className="center">
            <input className="input" type="text" placeholder="Search" />
            <button type="submit">
                <FaSearch />
            </button>
        </div>
    );
};

const Profile = () => {
    return (
        <div className="right">
            <img src={userIcon} alt="profile-icon" />
        </div>
    );
};

const HeaderComponent = () => {
    return(
        <header className="header">
            <Logo />
            <SearchBar />
            <Profile />
        </header>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the component
root.render(<HeaderComponent/>);