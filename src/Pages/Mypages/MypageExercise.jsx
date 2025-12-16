import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalExercise from "../../Components/Modal/ModalExercise";
import ModalRoutine from "../../Components/Modal/ModalRoutine";

function MypageExercise() {

  //운동
  const [exerciseList, setExerciseList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [rotMoOpen, setRotMoOpen] = useState(false);
  const [exerciseCustomList, setExerciseCustomList] = useState([]);
  const [selectedMasterIds, setSelectedMasterIds] = useState([]);
  const [selectedCustomIds, setSelectedCustomIds] = useState([]);
  //루틴
  const [routineValue, setRoutineValue] = useState([]);
  const [routineList, setRoutineList] = useState([]);
  const [routineName, setRoutineName] = useState([]);
  const [selectedRoutinePreset, setSelectedRoutinePreset] = useState([]);



  const getexerciseList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mypage/mypageExercise");
      setExerciseList(response.data);
    } catch (error) {

    }
  };

  const getExerciseCustomList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mypage/mypageExerciseCustom", {
        params: {
          email: localStorage.getItem("emailKey")
        }
      }
      );
      setExerciseCustomList(response.data);
    } catch (error) {

    }
  };



  useEffect(() => {
    getexerciseList();
    getExerciseCustomList();
    getPresetList();
    getRoutineList();
  }, []);

  const handleExerciseAdd = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const masterSave = async (e, item) => {
    const aa = e.target.checked;

    if (aa) {
      const response = await axios.post("http://localhost:8080/mypage/mypagesave", {
        email: localStorage.getItem("emailKey"),
        sourceType: "MASTER",
        exerciseId: item.id
      });
    } else {
      const response = await axios.delete("http://localhost:8080/mypage/checkedDelete", {
        params: {
          email: localStorage.getItem("emailKey"),
          exerciseId: item.id
        }
      });
    }
    getPresetList();
  }

  const customSave = async (e, list) => {
    const checked = e.target.checked;

    if (checked) {
      const res = await axios.post("http://localhost:8080/mypage/mypagesave", {
        email: localStorage.getItem("emailKey"),
        sourceType: "CUSTOM",
        customId: list.id
      });
    } else {
      const res = await axios.delete("http://localhost:8080/mypage/checkedCustomDelete", {
        params: {
          email: localStorage.getItem("emailKey"),
          customId: list.id
        }
      });
    }
    getPresetList();
  }

  const getPresetList = async () => {
    const response = await axios.get("http://localhost:8080/mypage/getPreset", {
      params: {
        email: localStorage.getItem("emailKey")
      }
    });

    const result = response.data;
    setSelectedMasterIds(
      result.filter(item => item.sourceType === "MASTER").map(item => item.exerciseId)
    )

    setSelectedCustomIds(
      result.filter(list => list.sourceType === "CUSTOM").map(list => list.customId)
    )
  }

  const getRoutineAdd = (e) => {
    setRoutineValue(e.target.value);
  }

  /////////////////////////////루틴///////////////////////////////

  const routineSave = async () => {
    const response = await axios.post("http://localhost:8080/mypage/routineSave", {
      email: localStorage.getItem("emailKey"),
      routineName: routineValue
    }
    );
    getRoutineList();
  };

  const getRoutineList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mypage/routineList");
      setRoutineList(response.data);
    } catch (error) {
    }
  };

  const routineModalOpen = () => {
    setRotMoOpen(true);
  }

  const routineModalClose = () => {
    setRotMoOpen(false);
  }

  const getPresetRoutine = async () => {
    const response = await axios.get("http://localhost:8080/mypage/getPresetRoutine", {
      params: {
        email: localStorage.getItem("emailKey")
      }
    });

    const result = response.data;
    setSelectedRoutinePreset(
      result.map(list => list.customId);
    )
  }

  return (
    <div>
      <p>-------------운동-------------</p>
      {exerciseList.map((item) => (
        <div key={item.id}>
          <p>운동 종류 : {item.exerciseName}<input type="checkbox"
            checked={selectedMasterIds.includes(item.id)}
            onChange={(e) => masterSave(e, item)} /></p>
        </div>
      ))}
      {exerciseCustomList.map((list) => (
        <div key={list.id}>
          <p>운동 종류 : {list.exerciseName}<input type="checkbox"
            checked={selectedCustomIds.includes(list.id)}
            onChange={(e) => customSave(e, list)} />
          </p>
        </div>
      ))}
      <button onClick={handleExerciseAdd}>+추가하기</button>

      <p>-------------루틴-------------</p>

      {routineList.map((list) => (
        <div key={list.id}>
          <p>루틴 종류 : {list.routineName}<input type="checkbox"
            checked={selectedRoutinePreset.includes(list.id)}
            onChange={(e) => routineSave(e, list)} />
          </p>
        </div>
      ))}

      <button onClick={routineModalOpen}>+추가하기</button>
      <ModalExercise isOpen1={isOpen}
        close={handleClose}
        onSave={getExerciseCustomList}>
      </ModalExercise>
      <ModalRoutine rotMoOpen={rotMoOpen} getRoutineAdd={getRoutineAdd}
        routineSave={routineSave}
        getRoutineList={getRoutineList}
        routineModalClose={routineModalClose}>
      </ModalRoutine>
    </div>
  );
}

export default MypageExercise;