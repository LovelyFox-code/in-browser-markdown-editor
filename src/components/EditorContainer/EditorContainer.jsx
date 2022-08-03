import React, { useState } from "react";
import MarkdownSide from "./MarkdownSide";
import ResultSide from "./ResultSide";
import { Container, Divider, EditorSection } from "../Style/Styled";

export default function EditorContainer(props) {
  const [showPreview, setShowPreview] = useState(false);
  const previewHandler = () => {
    setShowPreview((prev) => !prev);
  };
  return (
    <Container>
      <EditorSection>
        {showPreview === false ? (
          <>
            <MarkdownSide color={props.color} /> <Divider />{" "}
          </>
        ) : null}

        <ResultSide
          color={props.color}
          previewHandler={previewHandler}
          showPreview={showPreview}
        />
      </EditorSection>
    </Container>
  );
}
