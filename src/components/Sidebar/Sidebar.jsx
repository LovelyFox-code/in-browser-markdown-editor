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
    height: "105vh",
  };

  return (
    <div style={style}>
      <Title>MY DOCUMENTS</Title>
      <NewDocumentBtn />
      <Documents />
      <Toggle color={props.color} toggleTheme={props.toggleTheme} />
    </div>
  );
}
