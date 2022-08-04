import styled from "styled-components";
import { COLORS } from "./Colors";
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
export const H1 = styled.h1`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: ${(props) => props.theme.header};
  margin-top: 0;
`;
export const H2 = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap");
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 37px;
  color: ${(props) => props.theme.header};
`;

export const H3 = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.header};
`;
export const Title = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  margin: 0;
  padding: 24px;
  text-transform: uppercase;
  color: ${COLORS.gray};
`;
export const H4 = styled.h4`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  margin-top: 0;
  color: ${(props) => props.theme.header};
`;
export const H5 = styled.h5`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => props.theme.header};
`;
export const H6 = styled.h6`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: ${COLORS.orange};
`;
export const P = styled.p`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.text};
`;
export const BoldP = styled.p`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${COLORS.gray};
`;
export const MonoP = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${COLORS.gray};
`;
export const Li = styled.li`
  ${(props) => props.theme.text};
`;
export const Ol = styled.ol`
  & Li {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) => props.theme.text};
  }
`;
export const Ul = styled.ul`
  & Li {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) => props.theme.text};
  }
  & Li::marker {
    color: #e46643;
  }
`;
// export const ul > li {

// }
// export const ul > li::marker {
//   color: #e46643;
// }
export const Blockquote = styled.blockquote`
  background-color: ${(props) => props.theme.highlight};
  border-radius: 4px;
  border-left: 4px solid #e46643;
  padding: 24px;
  margin: 0;
  color: ${(props) => props.theme.header};
  & p {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
    color: ${(props) => props.theme.header};
  }
  & a {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    text-decoration-line: underline;
    color: ${(props) => props.theme.header};
  }
`;
export const Pre = styled.pre`
  background-color: ${(props) => props.theme.highlight};
  border-radius: 4px;
  padding: 24px;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.header};
`;
