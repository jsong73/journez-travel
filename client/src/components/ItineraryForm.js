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

   
    const itineraryFormHandler = async (event) => {
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
            <form>
        <ul>
            <li>
                <label> Itinerary name: 
                    <input
                        name="categoryName"
                        type="text"
                        placeholder="fd"
                        value={formState.categoryName}
                        onChange={handleChange}/>
                 </label> 
            </li>
            <li>
                <label> Location: 
                    <input
                        name="location"
                        type="text"
                        placeholder="Address or location"
                        value={formState.location}
                        onChange={handleChange}/>
                </label>
            </li>
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
            <li>
                <label> Price: 
                    <input
                        name="price"
                        type="text"
                        placeholder="How much did this cost?"
                        value={formState.price}
                        onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label> Notes: 
                    <textarea
                        name="notes"
                        placeholder="Any additional information?"
                        value={formState.notes}
                        onChange={handleChange}>
                    </textarea>     
                </label>
            </li>
        </ul>
        <button onClick={itineraryFormHandler}> Submit </button>
            </form>
        </div>
    )

    }

export default ItineraryForm;