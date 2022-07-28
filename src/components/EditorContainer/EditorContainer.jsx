import React from 'react'
import MarkdownSide from './MarkdownSide'
import ResultSide from './ResultSide'
import { Container, EditorSection } from '../Style/Styled'
export default function EditorContainer(props) {

  return (

    <Container>
      <EditorSection>
        <MarkdownSide content={props.currentDocument.content}
          eventHandler={props.eventHandler}
          setUpdatedDocument={props.setUpdatedDocument}
          saveDocument={props.saveDocument}
          color={props.color}
        />
        <ResultSide content={props.currentDocument.content}
          color={props.color} />
      </EditorSection>
    </Container>
  )
}
