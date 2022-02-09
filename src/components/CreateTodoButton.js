import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButtom = () => {

   const onClickButton = (msg) => {
      alert( msg );
   }

   return (
      <button 
         className="CreateTodoButton"
         onClick={(msg) => onClickButton('Aqui se dbee abrir el modal')}
      >
         +
      </button>
   );
};

export default CreateTodoButtom;
