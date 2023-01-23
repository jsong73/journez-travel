import React, {useState} from "react";
import {useParams} from "react-router-dom";
import CreateItineraryButton from "../components/CreateItineraryButton";
import UpdateItineraryButton from "../components/UpdateItineraryButton";

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
    
    const { tripId } = useParams();

    const [formState, setFormState] = useState({
        tripId: tripId,
        category: category ? category : "",
        categoryName: categoryName ? categoryName : "",
        location: location ? location : "",
        startDate: startDate ? startDate : "",
        endDate: endDate ? endDate : "",
        price: price ? price : "",
        notes: notes ? notes : "",
        paid: paid ? paid : false,
    });

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
        return{
        ...prevState,
        [name]: value,
    }
  })

};

let button;
if(itineraryId){
    // console.log("at itineraryForm is boolean", typeof formState.paid)
    button = <UpdateItineraryButton formState={formState} itineraryId={itineraryId} />
} else {
    button = <CreateItineraryButton formState={formState} />
}


    return(
        <div className="flex justify-center items-center">
        
            <form>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2"> Name of {category} </label> 
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 
                            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="categoryName"
                            type="text"
                            placeholder="Name"
                            value={formState.categoryName}
                            onChange={handleChange}/>
                 </div>        
                <label className="block text-gray-700 text-sm font-bold mb-2"> Location </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-4 px-3 text- 
                        gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="location"
                        type="text"
                        placeholder="Address"
                        value={formState.location}
                        onChange={handleChange}/>
             
                <div className="mb-2 mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"> Start date </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text- 
                        gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        name="startDate"
                        value={formState.startDate}
                        onChange={handleChange}/>
                </div>
                <div className="mb-2 mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"> End date </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text- 
                        gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        name="endDate"
                        value={formState.endDate}
                        onChange={handleChange}/>
                </div>
                <div className="mb-2 mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"> Price </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="price"
                        type="text"
                        placeholder="$"
                        value={formState.price}
                        onChange={handleChange}/>
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2"> Notes </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="notes"
                        placeholder="Any additional information?"
                        value={formState.notes}
                        onChange={handleChange}>
                    </textarea>     

                <label className="block text-gray-700 text-sm font-bold mb-2"> Has this been paid? 
                </label>   
                    <input 
                        type="checkbox" 
                        value={formState.paid} 
                        defaultChecked={formState.paid}
                        name="paid"
                        onChange={handleChange}
                        className="w-4 h-4 mb-4 text-blue-600 bg-gray-100 border-gray-300 rounded 
                        focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                        focus:ring-2 dark:border-gray-600"
                    />

         
        <div> {button} </div>
        </form>
        </div>
    )

    }

export default ItineraryForm;