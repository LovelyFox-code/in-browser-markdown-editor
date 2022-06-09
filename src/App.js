import "./App.css";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import data from '../src/data/data.json'


function App() {
  const style = {
    width: "1440px",
    overflow: "hidden"

  }
  const flex = {
    display: "flex"
  }
 
  return (
    <div style={flex}>
       <Sidebar files = {data}/>
        <div style={style}>
        <Navbar>
        </Navbar>
        <EditorContainer markdownText = {data}/>
        </div>

    </div>
  );
}

export default App;
