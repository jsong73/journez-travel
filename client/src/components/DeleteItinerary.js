import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_ITINERARY } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

const DeleteItinerary = ({ 
    itineraryId,
    tripId,
    isLoggedInUser= false }) => {

    const [ removeItinerary ] = useMutation(REMOVE_ITINERARY, {
    update(cache, {data: { removeItinerary }}) {
        try{
            cache.readQuery({
                query: QUERY_ME,
                data: { me: removeItinerary },
            });
        } catch (error){
            console.log(error)
        }
    },
});

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
                X
                </button>


            )}
        </div>
    )
}

export default DeleteItinerary;
