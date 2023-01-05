import React from "react";

const ItineraryCard = ({
    tripId,
    itineraries
}) => {
    // console.log(tripId)
    console.log(itineraries)

    
    return(
        <div>
            {itineraries.map((itinerary) => (
                <div key={itinerary._id}> 
                <h1>{itinerary.category}</h1>
                <div>{itinerary.categoryName}</div>
                <div>{itinerary.location}</div>
                <div>{itinerary.startDate}</div>
                <div>{itinerary.endDate}</div>
                <div>{itinerary.notes}</div>
                <div>{itinerary.price}</div>
                <div>{itinerary.paid}</div>
                
                
                </div>
            ))}
                
            
        </div>
    )
}

export default ItineraryCard;