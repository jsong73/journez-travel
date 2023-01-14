import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";


const Navbar = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();

}
    return(
  
        <nav className="p-4 border-gray-200  bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="text-3xl font-bold tracking-tight whitespace-nowrap dark:text-white"> journEZ </div>
                {Auth.loggedIn() ? (
                <>
                <ul className= "flex mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <button className="mr-2 text-lg font-bold tracking-tight text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <Link to="/home"> Home </Link> </button>
                    </li>
                    <li >
                        <button className="mr-2 text-lg font-bold tracking-tight text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to={`/users/${Auth.getProfile().data.username}`}> {Auth.getProfile().data.username}'s' Trips </Link> </button>  
                    </li>
                    <li>
                        <button className="mr-2 text-lg font-bold tracking-tight text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={logout}> Log out </button>
                    </li>
                </ul>
                </>
                ) : (
                 <>
                    <ul className= "flex mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
    
                        <li>
                            <button className="mr-2 text-lg font-bold tracking-tight text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <Link to="/"> Log in </Link> </button>
                        </li>      
                       <li>
                          <button 
                                className="mr-2 text-lg font-bold tracking-tight text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <Link to="/signup"> Sign up </Link> </button>

                        </li>
                    </ul>
                </>
        )}   
            </div>
        </nav>

        
    )
}

export default Navbar;