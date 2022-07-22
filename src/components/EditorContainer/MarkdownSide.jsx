import React, { useContext } from "react";
import styled from "styled-components";
import SubNav from "./SubNav";
import { DataContext } from "../Context/DataProvider";

export const TextArea = styled.textarea`
width: 100%;
height: 100vh;
border: none;
line-height: 24px;
font-style: normal;
font-weight: 400;
font-size: 14px;

`;
export default function MarkdownSide(props) {
  const style = {
    display: "flex",
    width: "688px",
    padding: "0 16px",
  };

  // const [data, setData] = useContext(DataContext)
  // console.log(data);
  // const currentContext = props.content.map(el => <TextArea>{el}</TextArea>)

  return (
    <div>
      <SubNav title="Markdown" />
      <div style={style}>
        <TextArea onChange={props.eventHandler}>{props.content}</TextArea>
      </div>
    </div>
  );
}
