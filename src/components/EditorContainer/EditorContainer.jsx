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
  const [currentDocument, setCurrentDocument] = useState({})

  const currentID = props.id;

  //useEffect
  useEffect(() => {
    //fetch data from API
    async function getDocument() {
      console.log("currentID", currentID);
      const response = await fetch(`http://localhost:4000/documents/${currentID}`);
      const document = await response.json()
      setCurrentDocument(document);
    }

    getDocument();
    return () => {

    }
  }, [currentID])
  const eventHandler = debounce((e) => {
    e.preventDefault();
    // setCurrentDocument({
    //   content: e.target.value,
    //   id: currentDocument.id,
    //   name: currentDocument.name,
    //   createdAt: currentDocument.createdAt
    // })
    console.log(currentDocument);
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
