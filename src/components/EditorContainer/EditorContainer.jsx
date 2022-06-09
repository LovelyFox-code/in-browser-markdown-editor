import React from 'react'
import MarkdownSide from './MarkdownSide'
import ResultSide from './ResultSide'
import styled from 'styled-components'

export default function EditorContainer(props) {
    const Container = styled.section`
        width: 100%;
    `
    const EditorSection = styled.div`
        display: flex;
    `
    

  return (

    <Container>
        <EditorSection>
        <MarkdownSide markdownText = {props.markdownText}/>
        <ResultSide markdownText = {props.markdownText}/>
        </EditorSection>
    </Container>
  )
}
