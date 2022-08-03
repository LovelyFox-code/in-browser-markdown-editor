import React from "react";
import MarkdownSide from "./MarkdownSide";
import ResultSide from "./ResultSide";
import { Container, EditorSection } from "../Style/Styled";

export default function EditorContainer(props) {
  return (
    <Container>
      <EditorSection>
        <MarkdownSide color={props.color} />
        <ResultSide color={props.color} />
      </EditorSection>
    </Container>
  );
}
