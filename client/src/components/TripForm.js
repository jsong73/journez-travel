import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import { ADD_TRIP } from "../utils/mutations";
import Auth from "../utils/auth";
import { QUERY_TRIP } from "../utils/queries"

const TripForm = () => {

    const [formState, setFormState] = useState({
        tripName: "",
        description: "",
        location: "",
        startDate: "",
        endDate: "",
    });
    console.log(formState)

    const [addTrip] = useMutation(ADD_TRIP, {
        update(cache, {data: { addTrip }}){
            try{
                const { tripName, description, location, startDate, endDate } = cache.readQuery({ query: QUERY_TRIP });
                cache.writeQuery({
                    query: QUERY_TRIP,
                    data: {trip: [addTrip, tripName, description, location, startDate, endDate ]},
                });
            } catch (error){
                console.log(error);
            }
        }
    });
   
    const TripFormHandler = async (event) => {
      event.preventDefault();
        try{
            const { data } = await addTrip({
                variables: {
                ...formState,
                _id: Auth.getProfile().data.username
                }
            });
            console.log(data)
        } catch (error) {
            console.log(error)
        };
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
    setFormState((prevState) => {
    return{
        ...prevState,
        [name]: value
    }
  })
};
    return(
        <div>
            <h1>Create a trip</h1>
            <form>
        <ul>
            <li>
                <label> Trip name: </label> 
                    <input
                        name="tripName"
                        type="text"
                        value={formState.tripName}
                        onChange={handleChange}/>
            </li>
            <li>
                <label> Description: </label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formState.description}
                        onChange={handleChange}>
                    </textarea>     
            </li>
                <label> Location: </label>
                    <input
                        name="location"
                        type="text"
                        placeholder="Where are you going?"
                        value={formState.location}
                        onChange={handleChange}/>
            <li>
                
                <label> Start date: </label>
                    <input
                        type="date"
                        name="startDate"
                        value={formState.startDate}
                        onChange={handleChange}/>
            </li>
            <li>
                <label> End date: </label>
                    <input
                        type="date"
                        name="endDate"
                        value={formState.endDate}
                        onChange={handleChange}/>
            </li>
        </ul>
        <button onClick={TripFormHandler}> Create trip </button>
            </form>
        </div>
    )

}

export default TripForm;