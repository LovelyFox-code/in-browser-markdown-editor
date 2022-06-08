import React from "react";
import { MonoP } from "../Common/Typography";
import styled from "styled-components";
import { COLORS } from "../Common/Colors";

export default function MarkdownSide() {
  const style = {
    display: "flex",
    width: "688px",
    padding: "0 16px"
  };
  const SubNav = styled.div`
    background-color: ${COLORS.dirtyWhite};
    display: flex;
    height: 42px;
    padding: 0 16px;
  `;
  return (
    <div>
      <SubNav>
        <p>MARKDOWN</p>
      </SubNav>
      <div style={style}>
        <MonoP># Welcome to Markdown</MonoP>
      </div>
    </div>
  );
}
