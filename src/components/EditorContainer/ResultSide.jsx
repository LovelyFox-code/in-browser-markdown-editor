import React, { useContext } from "react";
import { COLORS } from "../Common/Colors";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import style from "./ResultSide.module.css"
import SubNav from "./SubNav";
import { DataContext } from "../Context/DataProvider";
import { TextArea } from "./MarkdownSide";

export default function ResultSide(props) {

  const Divider = styled.div`
    width: 1px;
    height: 108vh;
    background-color: ${COLORS.lighterGray};
    position: absolute;
  `;

  // const [data, setData] = useContext(DataContext);
  // console.log(data);
  return (
    <div>
      <Divider />
      <SubNav title="Preview" />
      <ReactMarkdown>
        {props.content}
      </ReactMarkdown>
    </div>
  );
}
