import React from "react";
import { Link } from "react-router-dom";
import DeleteTrip from "./DeleteTrip";
import UpdateTrip from "./UpdateTrip"
import Auth from "../utils/auth";


const UserTripCards = ({ trips }) => {
// console.log(trips)

if(!trips.length){
    return<div> No trips as of yet! </div>
}

    return(
        <div>
            {trips.map((trip) => (
                <div key={trip._id}>
                    <Link to={`/trips/${trip._id}`}>
                    <h1 className="italic underline text-3xl font-bold tracking-tight"> {trip.tripName}</h1>
                    </Link>
                    
                    <div> 
                    <DeleteTrip 
                    tripId ={trip._id} 
                    isLoggedInUser= {Auth.loggedIn() === true }/> 
                    </div>

                    <div className="text-gray-700 text-sm font-bold"> Description: {trip.description}</div>
                    <div className="text-gray-700 text-sm font-bold"> Location: {trip.location}</div>
                    <div className="text-gray-700 text-sm font-bold"> Start date: {trip.startDate}</div>
                    <div className="text-gray-700 text-sm font-bold"> End date: {trip.endDate}</div>
                    
                    
                    <UpdateTrip 
                    tripId={trip._id}
                    tripName={trip.tripName}
                    description={trip.description}
                    location={trip.location}
                    startDate={trip.startDate}
                    endDate={trip.endDate}
                    />
                   


                    </div>
            ))}
       
        </div>
    )
}

export default UserTripCards;