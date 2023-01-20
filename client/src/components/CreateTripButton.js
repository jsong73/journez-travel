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
<div>
        <button 
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading- 
            snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
            focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg 
            transition duration-150 ease-in-out w-full" 
            onClick={tripFormHandler}> Create trip </button>
</div> 
    )
}

export default CreateTripButton;