import React from "react";
import styled from "styled-components";
import { COLORS } from "../Common/Colors";

export default function Documents(props) {
  const Document = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 24px;
    margin-top: 24px;
  `;
  const Form = styled.form`
    width: 100px;
  `;
  const Label = styled.label`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    color: #7c8187;
  `;
  const Input = styled.input`
    background: ${COLORS.black};
    border: none;
    width: 100%;
    &::placeholder {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #ffffff;
    }
  `;
  const Icon = styled.svg`
    padding-right: 16px;
  `;

  return (
    <>
      <Document>
        <Icon width="14" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
            fill="#FFF"
          />
        </Icon>
        <Form>
          <Label>{props.files[0].createdAt}</Label>
          <Input placeholder={props.files[0].name} />
        </Form>
      </Document>
      <Document>
        <Icon width="14" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
            fill="#FFF"
          />
        </Icon>
        <Form>
          <Label>{props.files[1].createdAt}</Label>
          <Input placeholder={props.files[1].name} />
        </Form>
      </Document>
    </>
  );
}
