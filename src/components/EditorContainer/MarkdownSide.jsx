import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { COLORS } from "../Common/Colors";
import SubNav from "./SubNav";

export default function MarkdownSide(props) {
  const style = {
    display: "flex",
    width: "688px",
    padding: "0 16px",
  };

  const TextArea = styled.textarea`
    width: 100%;
    height: 100vh;
    border: none;
    line-height: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  `;
  const markdown = props.markdownText[1].content;

  return (
    <div>
      <SubNav title = "Markdown"/>
      <div style={style}>
        <TextArea>{markdown}</TextArea>
      </div>
    </div>
  );
}
