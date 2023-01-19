import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
import UserTripCards from "../components/UserTripCards";

const UserTrips = () => {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || [];
    const userTrips = user.trips;
    // console.log(user)
    // console.log(userTrips)

    if (loading) {
        return <div> loading... </div>;
    }
    return(

            <div>
                <h1 className="text-3xl text-gray-700 font-bold tracking-tight justify-center text-center"> Your trips </h1>
                    <UserTripCards trips={userTrips}/>
            </div>  

        
    )
}

export default UserTrips;