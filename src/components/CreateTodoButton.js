import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButtom = ({openModal, setOpenModal}) => {

   const onClickButton = () => {
      // setOpenModal(prevState => !prevState);
      setOpenModal(!openModal);
   }

   return (
      <button 
         className="CreateTodoButton"
         onClick={onClickButton}
      >
         +
      </button>
   );
};

export default CreateTodoButtom;
