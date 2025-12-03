import React, { useState } from "react";
import { useLocation } from "react-router-dom";


function ExerciseWrite() {

  const {state} = useLocation();
  const [selectedDate,setSelectedDate] = useState(state.selectedDate);

  return (
    <div>
      {selectedDate.year}.{selectedDate.month}.{selectedDate.date}
      <button>운동 및 루틴 기록</button>
      <div>운동기록
        <div>런닝</div>
        <div>등산</div>
        <div>헬스</div>
      </div>
    </div>
  );

}

export default ExerciseWrite;