import React from "react";
import TripForm from "./TripForm";

const UpdateTrip = ({
    tripId,
    tripName,
    description,
    location,
    startDate,
    endDate,
}) => {

return(
    <div>
    <h1> Edit Trip </h1>
    <TripForm 
    tripId={tripId}
    tripName={tripName}
    description={description}
    location={location}
    startDate={startDate}
    endDate={endDate}
    />

    </div>
)

}

export default UpdateTrip;