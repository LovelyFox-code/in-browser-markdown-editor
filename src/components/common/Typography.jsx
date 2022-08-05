import styled from "styled-components";
import { COLORS } from "./Colors";

export const H1 = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: ${(props) => props.theme.header};
  margin-top: 20px;
`;
export const H2 = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap");
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 37px;
  color: ${(props) => props.theme.header};
  margin-top: 20px;
`;

export const H3 = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.header};
  margin-top: 20px;
`;
export const Title = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
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
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  margin-top: 0;
  color: ${(props) => props.theme.header};
  margin-top: 20px;
`;
export const H5 = styled.h5`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => props.theme.header};
  margin-top: 20px;
`;
export const H6 = styled.h6`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: ${COLORS.orange};
  margin-top: 20px;
`;
export const P = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.text};
  margin-top: 20px;
`;
export const BoldP = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${COLORS.gray};
  margin-top: 20px;
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
  margin-left: 5%;
  margin-top: 20px;
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
  margin-left: 5%;
  margin-top: 20px;
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

export const Blockquote = styled.blockquote`
  background-color: ${(props) => props.theme.highlight};
  border-radius: 4px;
  border-left: 4px solid #e46643;
  padding: 24px;
  margin: 0;
  color: ${(props) => props.theme.header};
  margin-top: 20px;
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
  margin-top: 20px;
`;
