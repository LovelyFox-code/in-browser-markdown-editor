import React from "react";
import { SubNavbar } from "../Style/Styled";

export default function SubNav(props) {
  return (
    <SubNavbar subNavColor={props.color}>
      {props.title} {props.icon}
    </SubNavbar>
  );
}
