import React, {useState} from "react";
import ItineraryForm from "./ItineraryForm";
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
    

return(
    <div>
        <button 
            onClick={openModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"> Edit trip </button>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Edit itinerary">
        
        <button 
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right" 
            type="submit"
            onClick={closeModal}> Close </button>
    
            <h1 className="mt-10 mb-3 px-10 py-6 text-3xl font-bold tracking-tight"> Edit Itinerary </h1>
    
        <ItineraryForm 
            itineraryId={itineraryId}
            category={category}
            categoryName={categoryName}
            location={location}
            startDate={startDate}
            endDate={endDate}
            notes={notes}
            price={price}
            paid={paid}/>

    </Modal>

    </div>
)

}

export default UpdateItinerary;