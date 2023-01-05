import React from "react";

const ItineraryCard = ({
    tripId,
    itineraries,
}) => {
    // console.log(tripId)
    console.log(itineraries)


    return(
        <div>
            {itineraries.map((itinerary) => (
                <div key={itinerary._id}> 
                <h1>{itinerary.category}</h1>
                <div> Name: {itinerary.categoryName}</div>
                <div> Location: {itinerary.location}</div>
                <div> Start Date: {itinerary.startDate}</div>
                <div> End Date: {itinerary.endDate}</div>
                <div> Notes: {itinerary.notes}</div>
                <div> Price: {itinerary.price}</div>
                {/* <div>{itinerary.paid}</div> */}
                
                </div>
            ))}
                
            
        </div>
    )
}

export default ItineraryCard;