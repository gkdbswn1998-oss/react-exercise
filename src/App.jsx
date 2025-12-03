import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Join from "./Pages/Join";
import CalendarWrite from "./Pages/CalendarWrite";
import MemoCreate from "./Pages/MemoCreate";
import ExerciseWrite from "./Pages/ExerciseWrite";
import Mypage from "./Pages/Mypages/Mypage";
import MypageExercise from "./Pages/Mypages/MypageExercise";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/calendarWrite" element={<CalendarWrite />} />
          <Route path="/exerciseWrite" element={<ExerciseWrite />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypageExercise" element={<MypageExercise />} />
          <Route path="/memocreate" element={<MemoCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
