import React, { useState } from "react";
import UnitSelect from "./UnitSelect";
import "./Modal.css";

function ModalBody({open, unit, setUnit,openFalse,inputBodyName,postBodyNameCustom,handleUnitSave}) {

  if (open == false) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <input type="text" onChange={inputBodyName} />
      <UnitSelect onChangeKey={handleUnitSave} unit={unit}/>
      <button onClick={postBodyNameCustom}>저장</button>
      <button onClick={openFalse}>닫기</button>
    </div>
  );

}

export default ModalBody;