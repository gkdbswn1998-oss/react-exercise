import React from "react";

function UnitSelect({ onChangeKey, unit }) {

  return (
    <select value={unit} onChange={onChangeKey}>
      <option value="kg">kg</option>
      <option value="%">%</option>
      <option value="cm">cm</option>
    </select>
  );
}

export default UnitSelect;