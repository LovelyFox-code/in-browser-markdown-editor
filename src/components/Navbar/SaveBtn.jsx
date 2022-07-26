import React from "react";
import styled from "styled-components";
import { COLORS } from '../Common/Colors'
export default function SaveBtn(props) {
  const Button = styled.button`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
    width: 152px;
    height: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: white;
    border-radius: 4px;
    border: none;
    background-color: ${COLORS.orange};
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Icon = styled.svg`
      padding-right: 8px;
  `

  //onClick={() => props.handleClick(file.id)}
  return <Button onClick={() => props.isSaved()}>
    <Icon width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M15.91 5.931 10.575.598A.889.889 0 0 0 10.29.41.969.969 0 0 0 9.945.34H2.834A2.667 2.667 0 0 0 .167 3.007v10.666a2.667 2.667 0 0 0 2.667 2.667H13.5a2.667 2.667 0 0 0 2.667-2.667v-7.11a.889.889 0 0 0-.258-.632ZM5.5 2.118h3.556v1.778H5.5V2.118Zm5.334 12.444H5.5v-2.666c0-.491.398-.89.89-.89h3.555c.49 0 .889.399.889.89v2.666Zm3.555-.889c0 .491-.398.89-.889.89h-.889v-2.667a2.667 2.667 0 0 0-2.666-2.667H6.389a2.667 2.667 0 0 0-2.666 2.667v2.666h-.89a.889.889 0 0 1-.888-.889V3.007c0-.491.398-.89.889-.89h.889v2.667c0 .491.398.89.888.89h5.334c.49 0 .889-.399.889-.89V3.371l3.555 3.556v6.746Z" fill="#FFF" /></Icon>
    Save Changes
  </Button>;
}
