import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import { ADD_ITINERARY } from "../utils/mutations";
import Auth from "../utils/auth";

const userId = Auth.getProfile()?.data?._id;

const ItineraryForm = ({ 
    itineraryId,
    category,
    categoryName, 
    location, 
    startDate, 
    endDate, 
    price,
    notes,
    paid }) => {


    const [formState, setFormState] = useState({
        category: category ? category : "",
        categoryName: categoryName ? category : "",
        location: location ? location : "",
        startDate: startDate ? startDate : "",
        endDate: endDate ? endDate : "",
        price: price ? price : "",
        notes: notes ? notes : "",
        paid: paid ? paid : "",
        userId: userId,
    });

    const [addItinerary] = useMutation(ADD_ITINERARY);
   
    const tripFormHandler = async (event) => {
      event.preventDefault();
        try{
            const { data } = await addItinerary({
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
            <h1>Create an itinerary</h1>
            <form>
        <ul>
            <li>
                <label> Trip name:
                    <input
                        name="tripName"
                        type="text"
                        placeholder="Trip name"
                        value={formState.tripName}
                        onChange={handleChange}/>
                 </label> 
            </li>
            <li>
                <label> Description: 
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formState.description}
                        onChange={handleChange}>
                    </textarea>     
                </label>
            </li>
                <label> Location: 
                    <input
                        name="location"
                        type="text"
                        placeholder="Where are you going?"
                        value={formState.location}
                        onChange={handleChange}/>
                </label>
            <li>
                
                <label> Start date: 
                    <input
                        type="date"
                        name="startDate"
                        value={formState.startDate}
                        onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label> End date:
                    <input
                        type="date"
                        name="endDate"
                        value={formState.endDate}
                        onChange={handleChange}/>
                 </label>
            </li>
        </ul>
        <button onClick={tripFormHandler}> Create trip </button>
            </form>
        </div>
    )

}

export default ItineraryForm;