import React, {useState} from "react";
import TripForm from "./TripForm";
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"> Edit trip </button>

    <Modal
        id="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit trip">

    <button 
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right" 
        type="submit"
        onClick={closeModal}> Close </button>

    <h1 className="mt-10 mb-3 px-10 py-6 text-3xl font-bold tracking-tight"> Edit Trip </h1>


    <TripForm 
        tripId={tripId}
        tripName={tripName}
        description={description}
        location={location}
        startDate={startDate}
        endDate={endDate}/>

  </Modal>

    </div>
  
)

}

export default UpdateTrip;