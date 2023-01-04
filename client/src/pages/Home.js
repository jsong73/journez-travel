import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Background from "../images/travelhome.jpg"

const Home = () => {
    const styles = {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: "100vh"
    }
    return(
        <div>
            <img src={Background} alt="background" style= {styles}></img>
            {Auth.loggedIn() ? (
            <>
           <Link to="/home"> Create a trip </Link>    

            </>
            ) : (
            <>
            <Link to="/home"> Get started </Link>    
  
        </>
        )}
        </div>
    )
}

export default Home;