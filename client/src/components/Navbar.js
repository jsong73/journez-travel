import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";


const Navbar = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
}
    return(
  
        <nav>
            <div>
                {Auth.loggedIn() ? (
                <>
                    <Link to="/home"> Home </Link>

                    <Link to={`/users/${Auth.getProfile().data.username}`}> {Auth.getProfile().data.username}'s' Trips </Link>   

                    <button onClick={logout}> Log out </button>
                </>
                ) : (
                 <>
        
                    <ul className= "flex items-center justify-center h-full">
                        <li> 
                            <button> <Link to="/home"> Home </Link> </button> 
                        </li>  
                        <li>
                            <button> <Link to="/"> Log in </Link> </button>
                        </li>      
                       <li>
                          <button> <Link to="/signup"> Sign up </Link> </button>
                        </li>
  
                    </ul>

                </>
        )}
            </div>
        </nav>

        
    )
}

export default Navbar;