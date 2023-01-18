import { useMutation } from "@apollo/client";
import React from "react";
import { UPDATE_TRIP } from "../utils/mutations";

const UpdateTripButton = ({ formState, tripId }) =>{
    // console.log(formState.tripName)
    // console.log(formState.description)
    // console.log(formState.location)
    // console.log(formState.startDate)
    // console.log(formState.endDate)
    // console.log(tripId)

    const [updateTrip] = useMutation(UPDATE_TRIP);

    const updateTripHandler = async (event) => {
        event.preventDefault();
        try{
            const { data } = await updateTrip({
                variables: {
                    tripId: tripId,
                    tripName: formState.tripName,
                    description: formState.description,
                    location: formState.location,
                    startDate: formState.startDate,
                    endDate: formState.endDate,
                }
            });
            console.log(data)
            window.location.reload();
        } catch (error) {
            console.log(error)
        };
    };

    
    return(
        <button 
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        onClick={updateTripHandler}> Update {formState.tripName} </button>

    )
}

export default UpdateTripButton;