import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_ITINERARY } from "../utils/mutations";

import Delete from "../images/delete.png"

const DeleteItinerary = ({ 
    itineraryId,
    tripId,
    isLoggedInUser= false }) => {
// console.log(itineraryId)
// console.log(tripId)
// console.log(isLoggedInUser)
const [removeItinerary] = useMutation(REMOVE_ITINERARY);

const removeItineraryHandler = async ( itineraryId, tripId ) => {
    try{
        const { data } = await removeItinerary({
            variables: { itineraryId, tripId },
        });
        console.log(data)
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
};


    return (
        <div>
            {isLoggedInUser && (
                <button
                onClick={() => removeItineraryHandler( itineraryId, tripId)}>
                <img 
                src={Delete} 
                alt="delete-btn" 
                width="20px"/>
                </button>


            )}
        </div>
    )
}

export default DeleteItinerary;
