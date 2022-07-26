import React from "react";
import styled from "styled-components";
import { H4 } from "../Common/Typography";
import { Button, Overlay, Box } from "../Style/Styled";

export default function Modal(props) {

  return (
    <Overlay>
      <Box>
        <H4>Delete this document?</H4>
        <p>Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.</p>
        <Button >Confirm & Delete</Button>
      </Box>
    </Overlay>
  )
}
