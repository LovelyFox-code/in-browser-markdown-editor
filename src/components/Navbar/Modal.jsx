import React from "react";
import { H4 } from "../Common/Typography";
import { Button, Overlay, Box } from "../Style/Styled";

export default function Modal(props) {

  return (
    <Overlay onClick={() => props.closeModal()}>
      <Box>
        <H4>Delete this document?</H4>
        <p>Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.</p>
        <Button onClick={() => props.deleteDocument()}>Confirm & Delete</Button>
      </Box>
    </Overlay>
  )
}
