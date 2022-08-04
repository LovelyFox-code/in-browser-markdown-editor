import React, { useContext } from "react";
import { H4, P } from "../Common/Typography";
import { Button, Overlay, Box } from "../Style/Styled";
import { documentsContext } from "../Context/DataProvider";

export default function Modal(props) {
  const { deleteDocument } = useContext(documentsContext);

  return (
    <>
      <Overlay onClick={() => props.modalToggle()} />
      <Box>
        <H4>Delete this document?</H4>
        <P>
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents?
        </P>
        <P>This action cannot be reversed.</P>
        <Button
          onClick={() => {
            deleteDocument();
            props.modalToggle();
          }}
        >
          Confirm & Delete
        </Button>
      </Box>
    </>
  );
}
