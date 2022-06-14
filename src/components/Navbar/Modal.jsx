import React from "react";
import styled from "styled-components";
import { H4 } from "../Common/Typography";

export default function Modal(props) {
  const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border-radius: 4px;
    width: 300px;
    padding: 24px;
  `;
  const Button = styled.button`
      background: #E46643;
      border-radius: 4px;
      width: 100%;
      height: 40px;
      padding: 10px 63px;
      color: white;
      border: none;
  `
    const modal = {
        display: "block"
    }
    const hide = {
      display: "none"
  }
  const Overlay = styled.div`
      position: absolute;
      background-color: #15161981;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      display: ${hide};
  `

  const { show, closeModal } = props;
  console.log(props);
  return (
    <Overlay>
    <Modal>
      <H4>Delete this document?</H4>
      <p>Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.</p>
      <Button onClick={closeModal}>Confirm & Delete</Button>
    </Modal>
    </Overlay>
  )
}
