import React, { useState, useEffect } from "react";
import { COLORS } from "../Common/Colors";
import NewDocumentBtn from "./NewDocumentBtn";
import Documents from "./Documents";
import Toggle from "./Toggle";
import { Title } from "../Common/Typography";

export default function Sidebar(props) {
  const style = {
    width: "250px",
    backgroundColor: COLORS.black,
    color: COLORS.white,
    height: "115vh",
  };
  //useState
  const [files, setFiles] = useState([]);


  //useEffect
  useEffect(() => {
    //fetch data from API
    async function getFile() {
      const response = await fetch("http://localhost:4000/documents");
      const files = await response.json();
      setFiles(files);
    }

    getFile();
    return () => { };
  }, []);
  // props.setId("TFZ_7iX")
  const handleClick = (id) => {
    props.setId(id)
    console.log("ID", id);
    console.log(files);
  }

  return (
    <div style={style}>
      <Title>MY DOCUMENTS</Title>
      <NewDocumentBtn></NewDocumentBtn>
      <Documents files={files} handleClick={handleClick}></Documents>
      <Toggle />
    </div>
  );
}
