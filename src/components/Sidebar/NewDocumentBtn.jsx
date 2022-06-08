import React from 'react'
import { COLORS } from '../Common/Colors'

export default function NewDocumentBtn() {
  const style = {
    width: "70%",
    backgroundColor: COLORS.orange,
    color: COLORS.white,
    margin: "auto",
    padding: "10px 24px",
    
  }
  return (
    <div style={style}>+ New Document</div>
  )
}
