import React from "react";
import { Link } from "react-router-dom";

function Mypage(){
  return(
    <Link to ="/mypageExercise">
    <button>운동 리스트 보기</button>
    </Link>

  );
}

export default Mypage;