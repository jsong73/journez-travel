import React from "react";
import { Link } from "react-router-dom";
import DeleteTrip from "./DeleteTrip";
import Auth from "../utils/auth";

const UserTripCards = ({ trips }) => {
// console.log(trips)
    return(
        <div>
            {trips.map((trip) => (
                <div key={trip._id}>
                    <Link to={`/trips/${trip._id}`}>
                    <h1> {trip.tripName}</h1>
                    </Link>
                    
                    <div> 
                    <DeleteTrip 
                    tripId ={trip._id} 
                    isLoggedInUser= {Auth.loggedIn() === true }/> 
                    </div>
                   
                    <div> Description: {trip.description}</div>
                    <div> Location: {trip.location}</div>
                    <div> Start date: {trip.startDate}</div>
                    <div> End date: {trip.endDate}</div>

                    </div>
            ))}
       
        </div>
    )
}

export default UserTripCards;