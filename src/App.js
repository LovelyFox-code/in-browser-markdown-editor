import "./App.css";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";

function App() {
  const style = {
    width: "1440px",
    overflow: "hidden",
  };
  const flex = {
    display: "flex",
  };

  return (
    <div style={flex}>
      <Sidebar files={[]} />
      <div style={style}>
        <Navbar></Navbar>
        <EditorContainer markdownText={[]} />
      </div>
    </div>
  );
}

export default App;
