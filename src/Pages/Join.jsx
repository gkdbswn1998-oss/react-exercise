import axios from "axios";
import React, { useState } from "react";

function Join() {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleOnchange = (e) => {
    setId(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/user/join", {
        email: id,
        password: password
      });
      alert("서버 응답:", response.data);
    } catch (error) {
      alert("에러발생");
    }

  }

  return (
    <div>
      <h2>회원가입</h2>
      아이디<input type="text" onChange={handleOnchange}></input>
      비밀번호<input type="password" onChange={handlePassword}></input>
      비밀번호 확인<input type="password"></input>
      <button type="submit" onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default Join;