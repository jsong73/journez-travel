import React from "react";

const ItineraryCard = ( tripId, itineraries ) => {
    return(
        <div>
            {itineraries.map((itinerary) => (
                <div key= {itinerary._id}> </div>
            ))}
        </div>
    )
}

export default ItineraryCard;