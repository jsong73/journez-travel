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

    const trip = data?.trip || [];
    const itineraries = data?.trip.itineraries || [];
   
    // console.log(itineraries)

    if (loading) {
        return <div> loading... </div>;
    }
    if(!itineraries.length){
        return <div> No itineraries to display as of yet! </div>
    }

    const restaurant = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "restaurant");
    const hotel = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "hotel");
    const transportation = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "transportation");
    const flight = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "flight");
    const activity = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "activity");

    return(
        <div>
          <h1> Your itinerary for {trip.tripName} </h1>  

            <ItineraryCard
            tripId={tripId}
            itineraries={restaurant}
            />

            <ItineraryCard
            tripId={tripId}
            itineraries={hotel}
            />

            <ItineraryCard
            tripId={tripId}
            itineraries={transportation}
            />
            
            <ItineraryCard
            tripId={tripId}
            itineraries={flight}
            />

            <ItineraryCard
            tripId={tripId}
            itineraries={activity}
            />
  

        </div>
    )
}

export default Trip;