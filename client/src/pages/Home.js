import React from "react";
import Auth from "../utils/auth"
import TripForm from "../components/TripForm";


const Home = () => {

    return(
        <div>
        <h1 className="mt-10 text-gray-700 text-center text-3xl font-bold tracking-tight"> Welcome {Auth.getProfile().data.username}, </h1>
              <h1 className="mb-5 mt-5 text-gray-700 text-center text-3xl font-bold tracking-tight"> Create a trip </h1>
           <TripForm />

        </div>
    )
}

export default Home;