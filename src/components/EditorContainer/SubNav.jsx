import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { COLORS } from "../Common/Colors";

export default function SubNav(props) {
  const SubNav = styled.div`
    background-color: ${(props) => props.theme.main};
    display: flex;
    height: 42px;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 2px;
    color: ${(props) => props.theme.color};
    text-transform: uppercase;
  `;
  SubNav.defaultProps = {
    theme: {
      main: COLORS.white,
      color: COLORS.gray,
    },
  };
  const theme = {
    main: COLORS.black,
    color: COLORS.lightGray,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <SubNav>{props.title}</SubNav>
      </ThemeProvider>
      <SubNav>{props.title}</SubNav>
    </>
  );
}
