import React from "react";
import { COLORS } from "../Common/Colors";

export default function Border() {
  const style = {
    width: "1px",
    height: "40px",
    backgroundColor: COLORS.darkGray,
  };
  return <div style={style}></div>;
}
