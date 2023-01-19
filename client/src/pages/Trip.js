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
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-700 text-center"> Your itinerary for {trip.tripName} </h1>  
        
          <div className="grid md:mb-12 md:grid-cols-5 flex-col items-center justify-center p-12 
           text-center">

            <div className="block max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg 
            shadow-md hover:bg-gray-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg- 
            white-700">                       
            <h1 className="text-xl font-bold tracking-tight text-gray-700">Restaurant</h1>
            <AddPlan category="restaurant"/>
            <ItineraryCard
            category="restaurant"
            tripId={tripId}
            itineraries={restaurant}
            /> </div>

            <div className="block max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg 
            shadow-md hover:bg-gray-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-     
            white-700">
            <h1 className="text-xl font-bold tracking-tight text-gray-700">Hotel</h1>
            <AddPlan category="hotel"/>
            <ItineraryCard
            category="hotel"
            tripId={tripId}
            itineraries={hotel}
            /> </div>
            
            <div className="block max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg 
            shadow-md hover:bg-gray-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg- 
            white-700"> 
            <h1 className="text-xl font-bold tracking-tight text-gray-700">Transportation</h1> 
            <AddPlan category="transportation"/>
            <ItineraryCard
            category="transportation"
            tripId={tripId}
            itineraries={transportation}
            /> </div>

            <div className="block max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg  
            shadow-md hover:bg-gray-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg- 
            white-700"> 
            <h1 className="text-xl font-bold tracking-tight text-gray-700">Flight</h1>
            <AddPlan category="flight"/>
            <ItineraryCard
            category="flight"
            tripId={tripId}
            itineraries={flight}
            /> </div>

            <div className="block max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700"> 
            <h1 className="text-xl font-bold tracking-tight text-gray-700">Activity</h1>
            <AddPlan category="activity"/>
            <ItineraryCard
            category="activity"
            tripId={tripId}
            itineraries={activity}
            /> </div>
  
       </div>
    </div>
    )
}

export default Trip;