import React, { useContext } from "react";
import { COLORS } from "../Common/Colors";
import { documentsContext } from "../Context/DataProvider";
export default function NewDocumentBtn() {
  const style = {
    width: "70%",
    backgroundColor: COLORS.orange,
    color: COLORS.white,
    margin: "auto",
    padding: "10px 24px",
  };
  const { createDocument } = useContext(documentsContext);
  return (
    <div style={style} onClick={createDocument}>
      + New Document
    </div>
  );
}
