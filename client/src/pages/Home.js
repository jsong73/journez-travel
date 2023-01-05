import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import TripForm from "../components/TripForm"
// import Background from "../images/travelhome.jpg"

const Home = () => {
    // const styles = {
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     width: "100vh"
    // }
    return(
        <div>
            {/* <img src={Background} alt="background" style= {styles}></img> */}
            {Auth.loggedIn() ? (
            <>
           <button onClick={TripForm}> Create a Trip </button>

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