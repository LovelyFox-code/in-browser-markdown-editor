import React from "react";
import { COLORS } from "../Common/Colors";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import style from "./ResultSide.module.css"
import SubNav from "./SubNav";

export default function ResultSide(props) {
  // const style = {
  //   width: "100%",
  // };

  const Divider = styled.div`
    width: 1px;
    height: 108vh;
    background-color: ${COLORS.lighterGray};
    position: absolute;
  `;
  const textSide = {
    padding: "0 22px",
  }
  return (
    <div style={style}>
      <Divider />
      <SubNav title = "Preview"/>
      <div style={textSide}>
        <ReactMarkdown>
          {props.markdownText[1].content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
