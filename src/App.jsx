import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Join from "./Pages/Join";
import Write from "./Pages/Write";
import Test from "./Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
      <Write />
    </div>
  );
}

export default App;
