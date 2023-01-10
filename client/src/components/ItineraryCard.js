import React from "react";
import UpdateItinerary from "../components/UpdateItinerary"
import

const ItineraryCard = ({
    tripId,
    itineraries,

}) => {
    // console.log(tripId)
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
                <DeleteItinerary 
                tripId={tripId}
                itineraryId={itinerary._id}/>

                <UpdateItinerary
                itineraryId={itinerary._id}
                category={itinerary.category}
                categoryName={itinerary.categoryName} 
                location={itinerary.location}
                startDate={itinerary.startDate}
                endDate={itinerary.endDate}
                notes={itinerary.notes}
                price={itinerary.price}
                paid={itinerary.paid}
                />

                </div>
              
            ))}
                
            
        </div>
    )
}

export default ItineraryCard;