import "./App.css";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState } from "react";
function App() {
  const style = {
    width: "1440px",
    overflow: "hidden",
  };
  const flex = {
    display: "flex",
  };
  //useStates
  const [open, setOpen] = useState(true);
  const [color, setColor] = useState(true);

  //open close Sidebar
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  //TOGGLE COLOR-THEME
  const handleColorChange = () => {
    setColor(!color);
  };

  return (
    <div style={flex}>
      {open ? (
        <Sidebar handleColorChange={handleColorChange} color={color} />
      ) : null}
      <div style={style}>
        <Navbar handleToggle={handleToggle} open={open}></Navbar>
        <EditorContainer color={color} />
      </div>
    </div>
  );
}

export default App;
