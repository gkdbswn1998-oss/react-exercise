import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: email,
        password: password,
      });

      const token = response.data.token;

      // 토큰 저장 (로컬스토리지)
      localStorage.setItem("accessToken", token);

      alert("로그인 성공!");
      // 이동하고 싶으면 아래 활성화:
      // window.location.href = "/mypage";

    } catch (error) {
      alert("로그인 실패");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 300, margin: "0 auto" }}>
      <h2>로그인</h2>

      <input
        type="text"
        placeholder="이메일 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
      />

      <input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
      />

      <button
        onClick={onLogin}
        style={{ width: "100%", padding: 10, background: "black", color: "white" }}
      >
        로그인
      </button>
    </div>
  );
}

export default Login;
