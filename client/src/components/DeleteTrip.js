import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_TRIP } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import Delete from "../images/delete.png";

const DeleteTrip = ({ 
    tripId,
    isLoggedInUser= false }) => {

    // console.log(tripId)
    // console.log(isLoggedInUser)

    const [ removeTrip ] = useMutation(REMOVE_TRIP, {
    update(cache, {data: { removeTrip }}) {
        try{
            cache.readQuery({
                query: QUERY_ME,
                data: { me: removeTrip },
            });
        } catch (error){
            console.log(error)
        }
    },
});

const removeTripHandler = async ( tripId ) => {
    try{
        const { data } = await removeTrip({
            variables: { tripId },
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
                className="float-right"
                onClick={() => removeTripHandler(tripId)}>
                <img 
                src={Delete} 
                alt="delete-btn" 
                width="20px"/>
                </button>


            )}
        </div>
    )
}

export default DeleteTrip;
