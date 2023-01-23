import { useMutation } from "@apollo/client";
import React from "react";
import { UPDATE_ITINERARY } from "../utils/mutations";

let myBool; 
const booleanTestFunc = (formState) => {
    if(typeof formState.paid === "string") {
        if(formState.paid === "false") {
             myBool = (formState.paid === 'false');
        } else {
            myBool = (!formState.paid === 'true');
        }
     }
}

const UpdateItineraryButton = ({ formState, itineraryId }) =>{
//    console.log(formState.category)
//    console.log(formState.categoryName)
//    console.log(formState.location)
//    console.log(formState.startDate)
//    console.log(formState.endDate)
//    console.log(formState.price)
//    console.log(formState.notes)
//    console.log(formState.paid)
//    console.log(itineraryId)

    const [updateItinerary] = useMutation(UPDATE_ITINERARY);

    const updateItineraryHandler = async (event) => {
        event.preventDefault();
        booleanTestFunc(formState);
        try{
            // console.log("test for type", typeof formState.paid);
            const { data } = await updateItinerary({
                variables: {
                    itineraryId: itineraryId,
                    category: formState.category,
                    categoryName: formState.categoryName,
                    location: formState.location,
                    startDate: formState.startDate,
                    endDate: formState.endDate,
                    notes: formState.notes,
                    price: formState.price,
                    paid: myBool,
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
        onClick={updateItineraryHandler}> Update {formState.category} </button>

    )
}

export default UpdateItineraryButton;