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
  //open content by id
  const handleClick = (id) => {
    props.setId(id)
  }

  return (
    <div style={style}>
      <Title>MY DOCUMENTS</Title>
      <NewDocumentBtn createDocument={props.createDocument} />
      <Documents files={props.files} handleClick={handleClick}></Documents>
      <Toggle handleColorChange={props.handleColorChange} setColor={props.setColor} activeColor={props.activeColor} color={props.color} />
    </div>
  );
}
