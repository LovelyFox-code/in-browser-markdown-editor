import React from 'react'
import { COLORS } from '../Common/Colors'

export default function NewDocumentBtn(props) {
  const style = {
    width: "70%",
    backgroundColor: COLORS.orange,
    color: COLORS.white,
    margin: "auto",
    padding: "10px 24px",

  }
  return (
    <div style={style} onClick={props.createDocument}>+ New Document</div>
  )
}
