import axios from "axios";
import React from "react";
import { useState } from "react";

function MemoCreate() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {

    const response = await axios.post("http://localhost:8080/memocreate", {
      title: title,
      content: content
    });

    alert("저장되었습니다")
  };


  return (
    <div>
      제목<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      내용<input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSave}>저장</button>
    </div>
  );
}

export default MemoCreate;