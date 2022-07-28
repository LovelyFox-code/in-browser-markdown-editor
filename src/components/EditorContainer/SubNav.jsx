import React from "react";
import styled from "styled-components";

export default function SubNav(props) {
  const SubNav = styled.div`
    background-color: ${props.color ? "#F5F5F5" : "#1D1F22"};
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
    color: ${props.color ? "#7C8187" : "#C1C4CB"};
    text-transform: uppercase;
    width: 100%;
  `;

  return (


    <SubNav>{props.title}</SubNav>

  );
}
