import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_TRIP } from "../utils/mutations";

const CreateTripButton = ({ formState }) => {
    const [addTrip] = useMutation(ADD_TRIP);
   
    const tripFormHandler = async (event) => {
      event.preventDefault();
        try{
            const { data } = await addTrip({
                variables: {
                ...formState,
                }
            });
            console.log(data)
            window.location.reload();
        } catch (error) {
            console.log(error)
        };
    };

    return (
        <button onClick={tripFormHandler}> Create trip </button>
    )
}

export default CreateTripButton;