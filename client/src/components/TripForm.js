import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import { ADD_TRIP } from "../utils/mutations";
import Auth from "../utils/auth";

const userId = Auth.getProfile()?.data?._id;

const TripForm = ({ 
    tripName, 
    description, 
    location, 
    startDate, 
    endDate }) => {

    const [formState, setFormState] = useState({
        tripName: tripName ? tripName : "",
        description: description ? description : "",
        location: location ? location : "",
        startDate: startDate ? startDate : "",
        endDate: endDate ? endDate : "",
        userId: userId,
    });

    const [addTrip] = useMutation(ADD_TRIP);
   
    const tripFormHandler = async (event) => {
      event.preventDefault();
        try{
            const { data } = await addTrip({
                variables: {
                ...formState,
                }
            });
        window.location.reload();
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
        [name]: value,
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
                        placeholder="Trip name"
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
        <button onClick={tripFormHandler}> Create trip </button>
            </form>
        </div>
    )

}

export default TripForm;