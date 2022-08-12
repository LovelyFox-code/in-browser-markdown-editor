import "./App.css";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { COLORS } from "./components/Common/Colors";
import { DarkTheme, LightTheme } from "./components/Common/Theme";
import { Flex } from "./components/Style/Grid";

function App() {
  const style = {
    width: "1440px",
    overflow: "hidden",
  };
  //useStates
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(true);
  const [theme, setTheme] = useState("light");
  //theme switcher
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setColor(!color);
  };
  //open close Sidebar
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <Flex>
        {open ? <Sidebar color={color} toggleTheme={toggleTheme} /> : null}
        <div style={style}>
          <Navbar handleToggle={handleToggle} open={open}></Navbar>
          <EditorContainer color={color} />
        </div>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
