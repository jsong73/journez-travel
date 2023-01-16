import { useMutation } from "@apollo/client";
import React from "react";
import { UPDATE_TRIP } from "../utils/mutations";

const UpdateTripButton =({ formState, tripId }) =>{
    console.log(formState)
    console.log(tripId)
    const [updateTrip] = useMutation(UPDATE_TRIP);

    const updateTripHandler = async (event) => {
        event.preventDefault();
        try{
            const { data } = updateTrip({
                variables: {
                    tripName: formState.tripName,
                    description: formState.description,
                    location: formState.location,
                    startDate: formState.startDate,
                    endDate: formState.endDate,
                },
            });
            console.log(data)
            // window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <button onClick={updateTripHandler}> Update Trip </button>
    )
}

export default UpdateTripButton;