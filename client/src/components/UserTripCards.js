import React from "react";
import { Link } from "react-router-dom";
import DeleteTrip from "./DeleteTrip";
import UpdateTrip from "./UpdateTrip"
import Auth from "../utils/auth";


const UserTripCards = ({ trips }) => {
// console.log(trips)

if(!trips.length){
    return <div className="mt-4 text-md tracking-tight font-medium text-red-700" role="alert"> No trips booked as of yet! </div>
}

    return(
        <div>
            {trips.map((trip) => (
                <div key={trip._id}>
                    <Link to={`/trips/${trip._id}`}>

                    <div> 
                    <DeleteTrip 
                    tripId ={trip._id} 
                    isLoggedInUser= {Auth.loggedIn() === true }/> 
                    </div>

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
            ))}
       
        </div>
    )
}

export default UserTripCards;