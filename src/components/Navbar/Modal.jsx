import React, { useContext } from "react";
import { H4 } from "../Common/Typography";
import { Button, Overlay, Box } from "../Style/Styled";
import { documentsContext } from "../Context/DataProvider";

export default function Modal(props) {
  const { deleteDocument } = useContext(documentsContext);

  return (
    <Overlay onClick={() => props.closeModal()}>
      <Box>
        <H4>Delete this document?</H4>
        <p>
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents? This action cannot be reversed.
        </p>
        <Button onClick={() => deleteDocument()}>Confirm & Delete</Button>
      </Box>
    </Overlay>
  );
}
