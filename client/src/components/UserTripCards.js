import React from "react";
import { Link } from "react-router-dom";

const UserTripCards = ({ trips }) => {
console.log(trips)
    return(
        <div>
            {trips.map((trips) => (
                <div key={trips._id}>
                    <Link to={`/trips/${trips._id}`}>
                    <h1> {trips.tripName}</h1>
                    </Link>
                    <div>{trips.description}</div>
                    </div>
            ))}
       
        </div>
    )
}

export default UserTripCards;