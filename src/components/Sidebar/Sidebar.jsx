import React from "react";
import { COLORS } from "../Common/Colors";
import styled from "styled-components";
import NewDocumentBtn from "./NewDocumentBtn";
import Document from "./Document";
export default function Sidebar() {
  const style = {
    width: "250px",
    backgroundColor: COLORS.black,
    color: COLORS.white,
    height: "100vh",
    
  };
  const Title = styled.h3`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 2px;
    margin: 0;
    padding: 24px;
    text-transform: uppercase;
    color: ${COLORS.gray};
  `;
  return (
    <div style={style}>
      <Title>MY DOCUMENTS</Title>
      <NewDocumentBtn></NewDocumentBtn>
      <Document></Document>
      <Document></Document>
    </div>
  );
}
