import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TRIP } from "../utils/queries";

const Trip = () => {
    const { tripId } = useParams();
    const { loading, data } = useQuery(QUERY_TRIP, {
        variables: { tripId: tripId },
    });

    const itineraries = data?.trip.itineraries || [];

    if (loading) {
        return <div> loading... </div>;
    }

    return(
        <div>
            Trip
        </div>
    )
}

export default Trip;