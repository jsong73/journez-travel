import React, {useState} from "react";
import TripForm from "../components/TripForm";
import Modal from "react-modal";

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

const UpdateTrip = ({
    tripId,
    tripName,
    description,
    location,
    startDate,
    endDate,
}) => {

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
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"> Edit trip </button>

    <Modal
        id="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit trip">

    <button 
        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right text-sm leading-snug uppercase" 
        type="submit"
        onClick={closeModal}> Close </button>

    <h1 className="mt-8 px-12 py-5 text-3xl font-bold tracking-tight"> Edit Trip </h1>

        
    <TripForm 
        tripId={tripId}
        tripName={tripName}
        description={description}
        location={location}
        startDate={startDate}
        endDate={endDate} />

  </Modal>

  

    </div>
  
)

}

export default UpdateTrip;