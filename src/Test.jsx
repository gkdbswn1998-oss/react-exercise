import React from "react";
import { useState } from "react";

function Test() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = () => {
    if (!title || !content) return;

    const newPost = {
      id: posts.length + 1,
      title: title,
      content: content,
    }

    setPosts([...posts, newPost]);

    setTitle("");
    setContent("");
  };

  const handleDelete = (id) => {
    setPosts(
      posts.filter((post) => post.id !== id)
    );
  };

  const handleEdit = () => {
    
  }

  return (
    <div>
      제목<input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      내용<input type='text' value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSubmit}>추가</button>
      {posts.map((post) => (
        <div key={post.id}>
          <p>[{post.id}]제목 :{post.title}</p>
          <p>내용 :{post.content}</p>
          <button onClick={() => handleDelete(post.id)}>삭제</button>
          <button onClick={handleEdit}>수정</button>
        </div>
      ))}
    </div>
  );
}

export default Test;