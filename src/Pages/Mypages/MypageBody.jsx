import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalBody from "../../Components/Modal/ModalBody";

function MypageBody() {

  const [bodyNameList, setBodyNameList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [unit, setUnit] = useState("kg");
  const [bodyNameInput, setBodyNameInput] = useState("");
  const [bodyCustomList, setBodyCustomList] = useState([]);

  const getBodyNameList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mypage/getBodyName");
      setBodyNameList(response.data);
    } catch (error) {
    }
  }

  const postBodyNameCustom = async () => {
    try {
      const response = await axios.post("http://localhost:8080/mypage/postBodyNameCustom", {
        email: localStorage.getItem("emailKey"),
        bodyName: bodyNameInput,
        unit: unit
      })
      getBodyCustomList();
    } catch (error) {
    };
  }

  const getBodyCustomList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/mypage/getBodyCustomList", {
        params: {
          email: localStorage.getItem("emailKey")
        }
      })
      setBodyCustomList(response.data);
    } catch (error) {
    }
  }

  const openFalse = () => {
    setIsOpen(false);
  }

  const handleBodyAdd = () => {
    setIsOpen(true);
  }

  const inputBodyName = (e) => {
    setBodyNameInput(e.target.value);
  }

  useEffect(() => {
    getBodyCustomList();
    getBodyNameList();
  }, []);

  const handleUnitSave = (e) => {
    setUnit(e.target.value);
  };

  const handleInputCheck = async (e, bodyName) => {
    try {
      if (e.target.checked) {
        const response = await axios.post("http://localhost:8080/mypage/postBodyNamePreset", {
          email: localStorage.getItem("emailKey"),
          sourceType: "MASTER",
          bodyId: bodyName.id,
        })
      } else {
        const response = await axios.delete("http://localhost:8080/mypage/deleteBodyNamePreset", {
          masterId: bodyNameList.id
        })
      }
    } catch (error) {

    }

  };


  return (
    <div>
      {bodyNameList.map((bodyName) => (
        <div key={bodyName.id}>
          <p>{bodyName.bodyName}{bodyName.unit}<input type="checkbox"
            onChange={(e) => handleInputCheck(e, bodyName)} /></p>
        </div>
      ))
      }
      {bodyCustomList.map((bodyCustom) => (
        <div key={bodyCustom.id}>
          <p>{bodyCustom.bodyName}{bodyCustom.unit}<input type="checkbox" /></p>
        </div>
      ))}
      <button onClick={handleBodyAdd}>+추가하기</button>
      <ModalBody open={isOpen} unit={unit} setUnit={setUnit}
        openFalse={openFalse} inputBodyName={inputBodyName} postBodyNameCustom={postBodyNameCustom}
        handleUnitSave={handleUnitSave}>
      </ModalBody>
    </div>
  );
}

export default MypageBody;