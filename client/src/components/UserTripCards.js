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