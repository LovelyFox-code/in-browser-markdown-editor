import React, { useEffect, useState } from 'react'
import MarkdownSide from './MarkdownSide'
import ResultSide from './ResultSide'
import styled from 'styled-components'

export default function EditorContainer() {
  const Container = styled.section`
        width: 1440px;
        overflow: hidden;
    `
  const EditorSection = styled.div`
        display: flex;
    `
  const [currentDocument, setCurrentDocument] = useState([])
  const ID = currentDocument.map(el => el.id);
  const content = currentDocument.map(el => el.content);
  console.log(ID);
  //useEffect
  useEffect(() => {
    //fetch data from API
    async function getDocument() {
      const response = await fetch("http://localhost:4000/documents");
      const document = await response.json()

      setCurrentDocument(document)
    }

    getDocument();
    return () => {

    }
  }, [])



  return (

    <Container>
      <EditorSection>
        <MarkdownSide id={ID} content={content} />
        <ResultSide />
      </EditorSection>
    </Container>
  )
}
