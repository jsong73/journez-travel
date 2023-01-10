import React from "react";
import ItineraryForm from "./ItineraryForm";

const UpdateItinerary = ({
    itineraryId,
    category,
    categoryName,
    location,
    startDate,
    endDate,
    notes,
    price,
    paid }) => {

return(
    <div>
    <h3> Edit Itinerary </h3>
    
    <ItineraryForm 
    itineraryId={itineraryId}
    category={category}
    categoryName={categoryName}
    location={location}
    startDate={startDate}
    endDate={endDate}
    notes={notes}
    price={price}
    paid={paid}
    />

    </div>
)

}

export default UpdateItinerary;