import React, { useContext } from "react";
import styled from "styled-components";
import SubNav from "./SubNav";
import { documentsContext } from "../Context/DataProvider";
import { Wrapper } from "../Style/Styled";

const TextArea = styled.textarea`
width: 100%;
height: 100vh;
border: none;
line-height: 24px;
font-style: normal;
font-weight: 400;
font-size: 14px;
outline: none;
resize: none;
background-color: ${(props) => props.textColor ? "white" : "black"};
color: ${(props) => props.textColor ? "black" : "#C1C4CB"};
`;

export default function MarkdownSide(props) {
  const style = {
    display: "flex",
    width: "688px",
    padding: "0 16px",
    backgroundColor: props.color ? "white" : "black",
  };
  const { eventHandler } = useContext(documentsContext);
  const { currentDocument } = useContext(documentsContext);

  return (
    <Wrapper>
      <SubNav title="Markdown" color={props.color} />
      <div style={style}>
        <TextArea textColor={props.color} value={currentDocument.content} onChange={eventHandler} />
      </div>
    </Wrapper>
  );
}
