import React, { useContext } from "react";
import { COLORS } from "../Common/Colors";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import style from "./ResultSide.module.css"
import SubNav from "./SubNav";
import { DataContext } from "../Context/DataProvider";
import { TextArea } from "./MarkdownSide";
import { Divider, Wrapper } from "../Style/Styled";

export default function ResultSide(props) {
  const container = {
    padding: "0 16px",
    width: "100%"
  }

  // const [data, setData] = useContext(DataContext);

  return (
    <Wrapper>
      <Divider />
      <SubNav title="Preview" />
      <div style={container}>
        <ReactMarkdown>
          {props.content}
        </ReactMarkdown>
      </div>
    </Wrapper>
  );
}
