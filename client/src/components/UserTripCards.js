import React from "react";
import { Link } from "react-router-dom";
import DeleteTrip from "./DeleteTrip";
import UpdateTrip from "./UpdateTrip"
import Auth from "../utils/auth";

const UserTripCards = ({ trips }) => {
// console.log(trips)

if(!trips.length){
    return <div className="text-center mt-4 text-md tracking-tight font-medium text-red-700" role="alert"> No trips booked as of yet! </div>
}
    return(
         <div className="grid md:mb-12 md:grid-cols-4 flex-col items-center justify-center p-12 text-center">
            {trips.map((trip) => (
                <div key={trip._id}>
                    
                 <div className="block max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
                    <Link to={`/trips/${trip._id}`}>

                    <DeleteTrip 
                    tripId ={trip._id} 
                    isLoggedInUser= {Auth.loggedIn() === true }/> 
                

                    <h1 className="italic underline text-3xl font-bold tracking-tight text-gray-700"> {trip.tripName}</h1>
                    </Link>


                    <div className="text-md tracking-tight text-gray-700"> Description: {trip.description}</div>
                    <div className="text-md tracking-tight text-gray-700"> Location: {trip.location}</div>
                    <div className="text-md tracking-tight text-gray-700"> Start date: {trip.startDate}</div>
                    <div className="text-md tracking-tight text-gray-700"> End date: {trip.endDate}</div>
                    
                    
                    <UpdateTrip 
                    tripId={trip._id}
                    tripName={trip.tripName}
                    description={trip.description}
                    location={trip.location}
                    startDate={trip.startDate}
                    endDate={trip.endDate}
                    />

                    </div>
                </div>
            ))}
       
        </div>
    )
}

export default UserTripCards;