import axios from "axios";
import React, { useEffect, useState } from "react";

function MypageExercise() {

  const [exerciseList, setExerciseList] = useState([]);
  const [routineList, setRoutineList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getexerciseList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mypage/mypageExercise");
      setExerciseList(response.data);
    } catch (error) {

    }
  };

  const getroutineList = async () => {
    try {
      const routineresponse = await axios.get("http://localhost:8080/mypage/mypageExercise");
      setRoutineList(routineresponse.data);
    } catch (error) {

    }
  };

  useEffect(() => {
    getexerciseList();
    getroutineList();
  }, []);

  const handleExerciseAdd = () => {
      setIsOpen(true);
  }

  return (
    <div>
      {exerciseList.map((item) => (
        <div key={item.id}>
          <p>운동 종류 : {item.exerciseName}</p>
        </div>
      ))}
      <button onClick={handleExerciseAdd}>+추가하기</button>
      {routineList.map((value) => (
        <div key={value.id}>
          <p>루틴 종류 : {value.routineName}</p>
        </div>
      ))}
    </div>
  );
}

export default MypageExercise;