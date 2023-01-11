import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Navbar = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
}


    return(
  
        <nav className="text-md font-normal leading-snug relative w-full flex flex-wrap items-center justify-between py-5 bg-gray-100 text-gray-800 hover:text-gray-900 focus:text-gray-900 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-10">
                {Auth.loggedIn() ? (
                <>
                    <Link to="/home"> Home </Link>

                    <Link to={`/users/${Auth.getProfile().data.username}`}> {Auth.getProfile().data.username}'s' Trips </Link>   

                    <button onClick={logout}> Log out </button>
                </>
                ) : (
                 <>
        
                    <ul className= "navbar-nav flex pl-0 list-style-none mr-auto">
                        <li className=" nav-item p-2"> 
                            <div> <Link to="/home"> Home </Link> </div> 
                        </li>  
                        <li className="nav-item p-2">
                            <div> <Link to="/"> Log in </Link> </div>
                        </li>      
                       <li className="nav-item p-2">
                          <div> <Link to="/signup"> Sign up </Link> </div>
                        </li>
                    </ul>

                </>
        )}
            </div>
        </nav>

        
    )
}

export default Navbar;