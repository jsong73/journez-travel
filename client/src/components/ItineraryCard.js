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

    return(
        <div>
            {itineraries.map((itinerary) => (
                <div key={itinerary._id}> 

                <DeleteItinerary 
                tripId={tripId}
                itineraryId={itinerary._id}
                isLoggedInUser= {Auth.loggedIn() === true} />

              
                <div className="text-md tracking-tight text-gray-700"> Name: 
                {itinerary.categoryName}</div>
                <div className="text-md tracking-tight text-gray-700"> Location: 
                {itinerary.location}</div>
                <div className="text-md tracking-tight text-gray-700"> Start Date: 
                {itinerary.startDate}</div>
                <div className="text-md tracking-tight text-gray-700"> End Date: 
                {itinerary.endDate}</div>
                <div className="text-md tracking-tight text-gray-700"> Notes: {itinerary.notes} 
                </div>
                <div className="text-md tracking-tight text-gray-700"> Price: ${itinerary.price} 
                </div>
                <div className="text-md tracking-tight text-gray-700"> Paid: {`${itinerary.paid ? 
                true : false }`}</div>

                <UpdateItinerary
                itineraryId={itinerary._id}
                category={itinerary.category}
                categoryName={itinerary.categoryName} 
                location={itinerary.location}
                startDate={itinerary.startDate}
                endDate={itinerary.endDate}
                notes={itinerary.notes}
                price={itinerary.price}
                paid={itinerary.paid} />


                </div>
              
            ))}
                
            
        </div>
    )
}

export default ItineraryCard;