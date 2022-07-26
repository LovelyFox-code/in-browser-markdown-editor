import React, { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'
import MarkdownSide from './MarkdownSide'
import ResultSide from './ResultSide'
import { Container, EditorSection } from '../Style/Styled'
import styled from 'styled-components'

export default function EditorContainer(props) {
  const Container = styled.section`
  width: 1440px;
  overflow: hidden;
  `
  return (

    <Container>
      <EditorSection>
        <MarkdownSide content={props.currentDocument.content}
          eventHandler={props.eventHandler}
          setUpdatedDocument={props.setUpdatedDocument}
          saveDocument={props.saveDocument} />
        <ResultSide content={props.currentDocument.content} />
      </EditorSection>
    </Container>
  )
}
