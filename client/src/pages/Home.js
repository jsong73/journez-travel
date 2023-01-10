import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import TripForm from "../components/TripForm";


const Home = () => {

    return(
        <div>
        
            {Auth.loggedIn() ? (
            <>
              <h1>Create a trip</h1>
           <TripForm />

            </>
            ) : (
            <>
            <Link to="/signup"> Get started today </Link>    
  
        </>
        )}
        </div>
    )
}

export default Home;