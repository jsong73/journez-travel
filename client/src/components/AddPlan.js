import React, {useState} from "react";
import Modal from "react-modal";
import ItineraryForm from "./ItineraryForm";
import AddButton from "../images/addplan.png"

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

    const AddPlan = ({ category }) => {
    
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

//   console.log(category)

  return(
    <div>
    <button 
    className="mb-4 mt-2"
        onClick={openModal}
        type="submit">  <img src= {AddButton} alt="addplan-btn" width="19px"/></button>

    <Modal
        id="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add plan">
    
    <button 
        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none         
        focus:shadow-outline text-sm leading-snug uppercase float-right" 
        type="submit"
        onClick={closeModal}> Close </button>
        
    <h1 className="mt-8 px-12 py-5 text-3xl font-bold tracking-tight"> Add a plan </h1>

    <ItineraryForm category={category} />

    </Modal>
    
    </div>
  );
};
export default AddPlan;