import "./App.css";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState, useEffect } from "react";

function App() {
  const style = {
    width: "1440px",
    overflow: "hidden",
  };
  const flex = {
    display: "flex",
  };
  const [id, setId] = useState("2");
  return (
    <div style={flex}>
      <Sidebar setId={setId} />
      <div style={style}>
        <Navbar></Navbar>
        <EditorContainer id={id} />
      </div>
    </div>
  );
}

export default App;
