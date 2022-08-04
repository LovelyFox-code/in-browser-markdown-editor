import React from "react";
import styled from "styled-components";
import { SubNavbar } from "../Style/Styled";

// const SubNavbar = styled.div`
//   background-color: ${(props) => (props.subNavColor ? "#F5F5F5" : "#1D1F22")};
//   display: flex;
//   height: 42px;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 16px;
//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 16px;
//   letter-spacing: 2px;
//   color: ${(props) => (props.subNavColor ? "#7C8187" : "#C1C4CB")};
//   text-transform: uppercase;
//   width: 100%;
// `;

export default function SubNav(props) {
  return (
    <SubNavbar subNavColor={props.color}>
      {props.title} {props.icon}
    </SubNavbar>
  );
}
