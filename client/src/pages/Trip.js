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
    const itineraries = trip.itineraries || [];
   
    // console.log(itineraries)

    if (loading) {
        return <div> loading... </div>;
    }
    if(!itineraries.length){
        return <div className="mt-4 text-md tracking-tight font-medium text-red-700" role="alert"> No itineraries to display as of yet! </div>
    }

    const restaurant = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "restaurant");
    const hotel = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "hotel");
    const transportation = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "transportation");
    const flight = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "flight");
    const activity = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "activity");

    return(
        <div>
          <h1 className="text-3xl font-bold tracking-tight"> Your itinerary for {trip.tripName} </h1>  
            <h2> Restaurant </h2>
            <ItineraryCard
            category="restaurant"
            tripId={tripId}
            itineraries={restaurant}
            />
            <h2> Hotel </h2>
            <ItineraryCard
            category="hotel"
            tripId={tripId}
            itineraries={hotel}
            />
            <h2> Transportation </h2>
            <ItineraryCard
            category="transportation"
            tripId={tripId}
            itineraries={transportation}
            />
            <h2> Flight </h2>
            <ItineraryCard
            category="flight"
            tripId={tripId}
            itineraries={flight}
            />
            <h2> Activity </h2>
            <ItineraryCard
            category="activity"
            tripId={tripId}
            itineraries={activity}
            />
  

        </div>
    )
}

export default Trip;