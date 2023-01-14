import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import { ADD_TRIP } from "../utils/mutations";
import Auth from "../utils/auth";

const userId = Auth.getProfile()?.data?._id;

const TripForm = ({ 
    tripId,
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
        <div className="flex justify-center items-center">
            <form>
                <div className="mb-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2"> What is the name of your trip? </label> 
                             <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="tripName"
                                type="text"
                                placeholder="Trip name"
                                value={formState.tripName}
                                onChange={handleChange}/>
                 </div>
                <div className="mb-2 mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2"> Trip details </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="description"
                            placeholder="Description"
                            value={formState.description}
                            onChange={handleChange}>
                    </textarea>     
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"> Where are you going? </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="location"
                        type="text"
                        placeholder="Destination"
                        value={formState.location}
                        onChange={handleChange}/>
                </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2"> Start date </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="select date"
                            type="date"
                            name="startDate"
                            value={formState.startDate}
                            onChange={handleChange}/>
        
                    <label className="block text-gray-700 text-sm font-bold mb-2"> End date </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="date"
                            name="endDate"
                            value={formState.endDate}
                            onChange={handleChange}/>
        
            
        </div>
        <div className="flex items-center justify-between">
            <button 
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={tripFormHandler}> Submit </button>
        </div>
            </form>
           
        </div>
        </div>
    
    )

}

export default TripForm;