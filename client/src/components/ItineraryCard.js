import React from "react";
import UpdateItinerary from "../components/UpdateItinerary";
import DeleteItinerary from "../components/DeleteItinerary";
import Auth from "../utils/auth";

const ItineraryCard = ({
    tripId,
    itineraries,
    category
}) => {
    // console.log(itineraries)
    // console.log(tripId)
    if(!itineraries.length){
        return `No ${category} booked as of yet!` 
    }
console.log(itineraries.categoryName)
    return(
        <div>
            {itineraries.map((itinerary) => (
                <div key={itinerary._id}> 
                
                <DeleteItinerary 
                tripId={tripId}
                itineraryId={itinerary._id}
                isLoggedInUser= {Auth.loggedIn() === true} />

                {/* <h1>{itinerary.category}</h1> */}
                <div> Name: {itinerary.categoryName}</div>
                <div> Location: {itinerary.location}</div>
                <div> Start Date: {itinerary.startDate}</div>
                <div> End Date: {itinerary.endDate}</div>
                <div> Notes: {itinerary.notes}</div>
                <div> Price: {itinerary.price}</div>
                {/* <div>{itinerary.paid}</div> */}


                <UpdateItinerary
                itineraryId={itinerary._id}
                category={itinerary.category}
                categoryName={itinerary.categoryName} 
                location={itinerary.location}
                startDate={itinerary.startDate}
                endDate={itinerary.endDate}
                notes={itinerary.notes}
                price={itinerary.price}
                paid={true} />


                </div>
              
            ))}
                
            
        </div>
    )
}

export default ItineraryCard;