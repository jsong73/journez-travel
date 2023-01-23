import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_ITINERARY } from "../utils/mutations";

let myBool; 
const booleanTestFunc = (formState) => {
    if(typeof formState.paid === "string") {
        if(formState.paid === "false") {
             myBool = (formState.paid === 'false');
        } else {
            myBool = (!formState.paid === 'true');
        }
        console.log(formState.paid)
     }
}

const CreateItineraryButton = ({ formState }) => {
    const [addItinerary] = useMutation(ADD_ITINERARY);
   
    const itineraryFormHandler = async (event) => {
      event.preventDefault();
       booleanTestFunc(formState);
        try{
            // console.log("test for type", typeof formState.paid);
            const { data } = await addItinerary({
                variables: {
                    ...formState,
                    paid: myBool,
                }
            });
            console.log(data)
        // window.location.reload();
        } catch (error) {
            console.log(error)
        };
    };

    return (
        <button  
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" 
            onClick={itineraryFormHandler}> Create plan </button>
    )
}

export default CreateItineraryButton;