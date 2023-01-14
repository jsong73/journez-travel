import React from "react";

import TripForm from "../components/TripForm";


const Home = () => {

    return(
        <div>
  
              <h1 className="mb-5 mt-10 text-gray-700 text-center text-3xl font-bold tracking-tight"> Create a trip </h1>
           <TripForm />

        </div>
    )
}

export default Home;