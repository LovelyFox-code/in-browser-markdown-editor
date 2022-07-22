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
  const [id, setId] = useState("");

  console.log(id);
  useEffect(() => {
    async function getID() {
      const response = await fetch("http://localhost:4000/documents");
      const files = await response.json();
      console.log(files[0].id);

      setId(files.map((el) => el.id));
    }
    getID();
    return () => {};
  }, []);

  return (
    <div style={flex}>
      <Sidebar files={[]} id={id} />
      <div style={style}>
        <Navbar></Navbar>
        <EditorContainer />
      </div>
    </div>
  );
}

export default App;
