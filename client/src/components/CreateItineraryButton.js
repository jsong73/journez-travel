import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_ITINERARY } from "../utils/mutations";

const CreateItineraryButton = ({ formState }) => {
    const [addItinerary] = useMutation(ADD_ITINERARY);
   
    const itineraryFormHandler = async (event) => {
      event.preventDefault();
        try{
            const { data } = await addItinerary({
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
        <button onClick={itineraryFormHandler}> Create itinerary </button>
    )
}

export default CreateItineraryButton;