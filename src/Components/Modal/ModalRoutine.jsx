import React from "react";
import './Modal.css';

function ModalRoutine({rotMoOpen,getRoutineAdd, routineSave,getRoutineList,setRoutineList,routineModalClose}) {

  if (rotMoOpen == false) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <input type="text"
        onChange={getRoutineAdd}></input>
      <button onClick={routineSave}> 저장</button>
      <button onClick={routineModalClose}>닫기</button>
    </div >
  );

}

export default ModalRoutine;