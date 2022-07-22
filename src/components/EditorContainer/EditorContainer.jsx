import React, { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'
import MarkdownSide from './MarkdownSide'
import ResultSide from './ResultSide'
import { Container, EditorSection } from '../Style/Styled'
import styled from 'styled-components'

export default function EditorContainer() {
  const Container = styled.section`
  width: 1440px;
  overflow: hidden;
  `
  const [currentDocument, setCurrentDocument] = useState({})

  //useEffect
  useEffect(() => {
    //fetch data from API

    async function getDocument() {
      const response = await fetch("http://localhost:4000/documents/2");
      const document = await response.json()
      setCurrentDocument(document)
    }

    getDocument();
    return () => {

    }

  }, [])
  const eventHandler = debounce(

    (e) => {
      e.preventDefault();
      // setCurrentDocument({
      //   content: e.target.value,
      //   id: currentDocument.id,
      //   name: currentDocument.name,
      //   createdAt: currentDocument.createdAt
      // })

      setCurrentDocument({
        ...currentDocument,
        content: e.target.value,

      })

    }, 500
  )

  return (

    <Container>
      <EditorSection>
        <MarkdownSide content={currentDocument.content} eventHandler={eventHandler} />
        <ResultSide content={currentDocument.content} />
      </EditorSection>
    </Container>
  )
}
