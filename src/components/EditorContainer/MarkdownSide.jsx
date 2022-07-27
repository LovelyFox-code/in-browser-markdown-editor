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
    background-color: ${props.color ? "white" : "black"};
    color: ${props.color ? "black" : "#C1C4CB"};
  `;
  const style = {
    display: "flex",
    width: "688px",
    padding: "0 16px",
    backgroundColor: props.color ? "white" : "black",
  };
  console.log(props.content);
  return (
    <Wrapper>
      <SubNav title="Markdown" color={props.color} />
      <div style={style}>
        <TextArea onChange={props.eventHandler}>{props.content}</TextArea>
      </div>
    </Wrapper>
  );
}
