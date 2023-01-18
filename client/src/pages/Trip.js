import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TRIP } from "../utils/queries";
import ItineraryCard from "../components/ItineraryCard";
import AddPlan from "../components/AddPlan";

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
  

    const restaurant = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "restaurant");
    const hotel = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "hotel");
    const transportation = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "transportation");
    const flight = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "flight");
    const activity = itineraries.filter((itinerary) => itinerary.category.toLowerCase() === "activity");

    return(
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-700"> Your itinerary for {trip.tripName} </h1>  
            <h2 className="text-xl font-bold tracking-tight text-gray-700"> Restaurant </h2>
            <AddPlan category="restaurant"/>
            <ItineraryCard
            category="restaurant"
            tripId={tripId}
            itineraries={restaurant}
            />
            <h2 className="text-xl font-bold tracking-tight text-gray-700"> Hotel </h2>
            <AddPlan category="hotel"/>
            <ItineraryCard
            category="hotel"
            tripId={tripId}
            itineraries={hotel}
            />
            <h2 className="text-xl font-bold tracking-tight text-gray-700"> Transportation </h2>
            <AddPlan category="transportation"/>
            <ItineraryCard
            category="transportation"
            tripId={tripId}
            itineraries={transportation}
            />
            <h2 className="text-xl font-bold tracking-tight text-gray-700"> Flight </h2>
            <AddPlan category="flight"/>
            <ItineraryCard
            category="flight"
            tripId={tripId}
            itineraries={flight}
            />
            <h2 className="text-xl font-bold tracking-tight text-gray-700"> Activity </h2>
            <AddPlan category="activity"/>
            <ItineraryCard
            category="activity"
            tripId={tripId}
            itineraries={activity}
            />
  

        </div>
    )
}

export default Trip;