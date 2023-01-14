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

    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = "#f00";
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
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit trip">

    <h1 className="mt-4 text-3xl font-bold tracking-tight"> Edit Trip </h1>

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