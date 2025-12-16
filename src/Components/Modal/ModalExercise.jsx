import React, { useEffect, useState } from "react";
import "./Modal.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function ModalExercise({ isOpen1, close, onSave }) {

  const [exerciseName, setExerciseName] = useState("");
  const [email, setEmail] = useState();

  useEffect(() => {
    setEmail(localStorage.getItem("emailKey"));
  }, []);


  const exerciseSave = async () => {
    const response = await axios.post("http://localhost:8080/mypage/mypageExercise", {
      exerciseName: exerciseName,
      email:email
    })
    onSave();
  };

  if (isOpen1 == false) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <input type="text" onChange={(e) => setExerciseName(e.target.value)} value={exerciseName} />
      <button onClick={exerciseSave}>저장</button>
      <button onClick={close}>닫기</button>
    </div>
  );

}

export default ModalExercise;