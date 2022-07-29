import React, { useContext } from "react";
import styled from "styled-components";
import SubNav from "./SubNav";
import { DataContext } from "../Context/DataProvider";
import { Wrapper } from "../Style/Styled";

export default function MarkdownSide(props) {
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
    background-color: ${props.color ? "white" : "black"};
    color: ${props.color ? "black" : "#C1C4CB"};
  `;
  const style = {
    display: "flex",
    width: "688px",
    padding: "0 16px",
    backgroundColor: props.color ? "white" : "black",
  };
  return (
    <Wrapper>
      <SubNav title="Markdown" color={props.color} />
      <div style={style}>
        {/* defaultValue={props.content} can't type when set value or default value, 
      without get an Error*/}
        <TextArea onChange={props.eventHandler}>{props.content}</TextArea>
      </div>
    </Wrapper>
  );
}
