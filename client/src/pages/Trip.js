import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TRIP } from "../utils/queries";
import ItineraryCard from "../components/ItineraryCard";

const Trip = () => {
    const { tripId } = useParams();
    const { loading, data } = useQuery(QUERY_TRIP, {
        variables: { tripId: tripId },
    });

    const itineraries = data?.trip.itineraries || [];
    // console.log(itineraries)
    if (loading) {
        return <div> loading... </div>;
    }

    return(
        <div>
            Trip
            <ItineraryCard
            category= {itineraries.category}
            categoryName= {itineraries.categoryName}
            location= {itineraries.location}
            startDate= {itineraries.startDate}
            endDate= {itineraries.endDate}
            price= {itineraries.price}
            notes= {itineraries.notes}
            paid= {true}
            >

            </ItineraryCard>
        </div>
    )
}

export default Trip;