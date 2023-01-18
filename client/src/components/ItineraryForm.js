import React, {useState} from "react";
import Auth from "../utils/auth";
import CreateItineraryButton from "../components/CreateItineraryButton";
import UpdateItineraryButton from "../components/UpdateItineraryButton";

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
    button = <CreateItineraryButton formState={formState} />
} else {
    button = <UpdateItineraryButton formState={formState} itineraryId={itineraryId} />
}

    return(
        <div className="flex justify-center items-center">
            <form>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2"> Name of {category} </label> 
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="categoryName"
                            type="text"
                            placeholder="Name"
                            value={formState.categoryName}
                            onChange={handleChange}/>
                 </div>        
                <label className="block text-gray-700 text-sm font-bold mb-2"> Location </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="location"
                        type="text"
                        placeholder="Address or location"
                        value={formState.location}
                        onChange={handleChange}/>
             
                <div className="mb-2 mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"> Start date </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        name="startDate"
                        value={formState.startDate}
                        onChange={handleChange}/>
                </div>
                <div className="mb-2 mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"> End date </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        name="endDate"
                        value={formState.endDate}
                        onChange={handleChange}/>
                </div>
                <div className="mb-2 mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"> Price </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="price"
                        type="text"
                        placeholder="How much did this cost?"
                        value={formState.price}
                        onChange={handleChange}/>
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2"> Notes </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="notes"
                        placeholder="Any additional information?"
                        value={formState.notes}
                        onChange={handleChange}>
                    </textarea>     
         
        <div> {button} </div>
        </form>
        </div>
    )

    }

export default ItineraryForm;