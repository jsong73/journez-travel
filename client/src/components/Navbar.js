import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Navbar = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
}
    return(
    <div>
        {Auth.loggedIn() ? (
        <>
            <Link to={`/users/${Auth.getProfile().data.username}`}> {Auth.getProfile().data.username}'s' Trips </Link>   
            <button onClick={logout}> Log out </button>
        </>
        ) : (
        <>
            <Link to="/home"> Home </Link>    
            <Link to="/"> Log in </Link>        
            <Link to="/signup"> Sign up </Link>     
        </>
        )}
        </div>
    )
}

export default Navbar;