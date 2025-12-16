import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function ExerciseWrite() {

  const { state } = useLocation();
  const [selectedDate, setSelectedDate] = useState(state.selectedDate);
  const [exercisePreset, setExercisePreset] = useState([]);

  const getExercisePresetList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/record/exercise_preset_list", {
        params: {
          email: localStorage.getItem("emailKey")
        }
      });
      setExercisePreset(response.data);
    } catch (error) {
    }
  } 

  useEffect(() => {
    getExercisePresetList();
  }, []);

  return (
    <div>
      {selectedDate.year}.{selectedDate.month}.{selectedDate.date}
      <button>운동 및 루틴 기록</button>
      <div>운동기록</div>
        {exercisePreset.map((list) => (
          <div key={list.id}>
            <button>{list.masterName || list.customName}</button>
          </div>
        ))}
    </div>
  );

}

export default ExerciseWrite;