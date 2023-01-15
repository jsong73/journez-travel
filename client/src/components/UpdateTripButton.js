import { useMutation } from "@apollo/client";
import React from "react";
import { UPDATE_TRIP } from "../utils/mutations";

const UpdateTripButton =({ formState, tripId }) =>{
    const [updateTrip] = useMutation(UPDATE_TRIP);

    const updateTripHandler = async (event) => {
        try{
            const {data} = updateTrip({
                variables: {
                    tripId: tripId,
                    tripName: formState.tripName,
                    description: formState.description,
                    location: formState.location,
                    startDate: formState.startDate,
                    endDate: formState.endDate,
                },
            });
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <button onClick={updateTripHandler}> Update Trip </button>
    )
}

export default UpdateTripButton;