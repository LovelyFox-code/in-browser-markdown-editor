import React from 'react'
import MarkdownSide from './MarkdownSide'
import ResultSide from './ResultSide'
import styled from 'styled-components'

export default function EditorContainer() {
    const Container = styled.section`
        width: 100%;
    `
    const EditorSection = styled.div`
        display: flex;
    `

  return (

    <Container>
        <EditorSection>
        <MarkdownSide/>
        <ResultSide/>
        </EditorSection>
    </Container>
  )
}
