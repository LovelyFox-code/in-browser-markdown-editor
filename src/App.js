import "./App.css";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState} from "react";


function App() {
  const style = {
    width: "100%"
  }
  const flex = {
    display: "flex"
  }

  return (
    <div style={flex}>
       <Sidebar/>
        <div style={style}>
        <Navbar>
        </Navbar>
        <EditorContainer/>
        </div>

    </div>
  );
}

export default App;
