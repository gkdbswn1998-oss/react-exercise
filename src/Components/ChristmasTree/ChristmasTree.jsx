import React from "react";
import "./ChristmasTree.css";

const ChristmasTree = () => {
  return (
    <div className="tree-small">
      <div className="star">⭐</div>

      <div className="light" style={{ "--y": 5, "--rotate": 0, "--depth": 20, "--color": "white" }}></div>
      <div className="light" style={{ "--y": 8, "--rotate": 20, "--depth": 30, "--color": "red" }}></div>
      <div className="light" style={{ "--y": 11, "--rotate": 40, "--depth": 15, "--color": "white" }}></div>

      <div className="light" style={{ "--y": 20, "--rotate": 70, "--depth": 35, "--color": "red" }}></div>
      <div className="light" style={{ "--y": 25, "--rotate": 100, "--depth": 25, "--color": "white" }}></div>
      <div className="light" style={{ "--y": 30, "--rotate": 130, "--depth": 40, "--color": "red" }}></div>

      <div className="light" style={{ "--y": 40, "--rotate": 200, "--depth": 45, "--color": "red" }}></div>
      <div className="light" style={{ "--y": 45, "--rotate": 250, "--depth": 30, "--color": "white" }}></div>
      <div className="light" style={{ "--y": 50, "--rotate": 300, "--depth": 40, "--color": "red" }}></div>
    </div>
  );
};

export default ChristmasTree;
