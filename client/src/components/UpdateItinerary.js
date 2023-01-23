import React, {useState} from "react";
import ItineraryForm from "../components/ItineraryForm";
import Modal from "react-modal"

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  
  Modal.setAppElement("#root");

const UpdateItinerary = ({
    itineraryId,
    category,
    categoryName,
    location,
    startDate,
    endDate,
    notes,
    price,
    paid }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
      
    function openModal() {
          setIsOpen(true);
    }
      
    function closeModal() {
        setIsOpen(false);
    }
    // console.log(itineraryId)

return(
    <div>
        <button 
            onClick={openModal}
            className="inline-block px-7 py-3 mt-3 mb-4 bg-blue-600 text-white font-medium text-sm 
            leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg 
            blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
            active:shadow-lg transition duration-150 ease-in-out"
            type="submit"> Edit itinerary </button>
        

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Edit itinerary">
        
        <button 
            className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
            focus:outline-none focus:shadow-outline float-right text-sm leading-snug uppercase" 
            type="submit"
            onClick={closeModal}> Close </button>
    
            <h1 className="mt-8 px-12 py-5  text-3xl font-bold tracking-tight"> Edit Itinerary </h1>
    
        <ItineraryForm 
            itineraryId={itineraryId}
            category={category}
            categoryName={categoryName}
            location={location}
            startDate={startDate}
            endDate={endDate}
            notes={notes}
            price={price}
            paid={paid}
        />

    </Modal>

    </div>
)

}

export default UpdateItinerary;