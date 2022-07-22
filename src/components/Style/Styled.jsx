import styled from 'styled-components';
import { COLORS } from '../Common/Colors'

export const ModeBtn = styled.button`
width: 48px;
height: 24px;
background: ${COLORS};
border-radius: 12px;
border: none;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
`;
export const Label = styled.label.attrs({ for: "input" })`
width: 18px;
height: 18px;
background-color: #252b42;
position: relative;
border-radius: 50%;
transition: transform 0.2s linear;
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
opacity: 0;
position: absolute;
padding: 3%;
z-index: 2;
&:checked + ${Label} {
  transform: translateX(20px);
}
&:checked {
  transform: translateX(20px);
}
`;

export const Document = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 0 24px;
margin-top: 24px;
`;
export const Form = styled.form`
width: 100px;
`;
// export const DateLabel = styled.label`
// font-family: "Roboto";
// font-style: normal;
// font-weight: 300;
// font-size: 13px;
// line-height: 15px;
// color: #7c8187;
// `;
export const InputSideBar = styled.input`
background: ${COLORS.black};
border: none;
width: 100%;
&::placeholder {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
}
`;
export const Icon = styled.svg`
padding-right: 16px;
`;

//EDITOR CONTAINER
export const Container = styled.section`
width: 1440px;
overflow: hidden;
`
export const EditorSection = styled.div`
display: flex;
`

//SUBNAV
export const SubNavbar = styled.div`
background-color: ${(props) => props.theme.main};
display: flex;
height: 42px;
align-items: center;
justify-content: space-between;
padding: 0 16px;
font-family: "Roboto";
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
letter-spacing: 2px;
color: ${(props) => props.theme.color};
text-transform: uppercase;
`;