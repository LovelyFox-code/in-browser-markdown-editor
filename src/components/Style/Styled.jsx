import styled from "styled-components";
import { COLORS } from "../Common/Colors";

export const Document = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;
  margin-top: 24px;
`;
export const Form = styled.form`
  width: 100px;
  cursor: pointer;
`;
export const Label = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #7c8187;
`;
export const InputSideBar = styled.input`
  background: ${COLORS.black};
  border: none;
  width: 100%;
  outline: none;
  cursor: pointer;
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
  cursor: pointer;
`;

//EDITOR CONTAINER
export const Container = styled.section`
  width: 1440px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 768px;
    overflow: hidden;
  }
`;
export const EditorSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 100vh;
  border: none;
  line-height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  resize: none;
  outline: none;
`;
//SUBNAV
export const SubNavbar = styled.div`
  background-color: ${(props) => props.theme.subNav};
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
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
`;
//DIVIDER
export const Divider = styled.div`
  width: 1px;
  height: 108vh;
  /* background-color: ${COLORS.lighterGray}; */
  background-color: ${(props) => props.theme.divider};
  position: absolute;
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.editorBody};
`;
export const Side = styled.div`
  display: flex;
  width: 100%;
  padding: 0 16px;
  background-color: ${(props) => props.theme.editorBody};
`;
export const PreviewSide = styled.div`
  padding: 0 16px;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: ${(props) => props.theme.editorBody};
`;
//MODALS
export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.editorBody};
  border-radius: 4px;
  width: 300px;
  padding: 24px;
  & Button {
    width: 100%;
  }
`;
export const Button = styled.button`
  background: #e46643;
  border-radius: 4px;
  height: 40px;
  padding: 10px 30px;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 375px) {
    padding: 12px;
  }
  & p {
    @media only screen and (max-width: 375px) {
      display: none;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.overlay};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: 2; */
  opacity: 0.5;
`;

//NAVBAR
export const Nav = styled.nav`
  background-color: ${COLORS.lightBlack};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  max-width: 1410px;
  margin: auto;
  padding: 16px 1%;
  @media only screen and (max-width: 768px) {
    width: 753px;
  }
  @media only screen and (max-width: 375px) {
    width: 375px;
    justify-content: space-around;
  }
`;
export const Logo = styled.div`
  padding: 0 24px;
  @media only screen and (max-width: 375px) {
    display: none;
  }
`;
export const IconDelete = styled.div`
  margin-right: 24px;
  cursor: pointer;
`;
export const DocumentName = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 24px;
`;
export const FormNav = styled.form`
  width: 100px;
`;
export const LabelNav = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #7c8187;
`;
export const InputNav = styled.input`
  background: #2b2d31;
  border: none;
  &::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
export const Burger = styled.div`
  cursor: pointer;
`;
export const SVG = styled.svg`
  stroke: red;
`;
//toggle button
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
export const LabelToggle = styled.label.attrs({ htmlFor: "input" })`
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
  padding: 40px;
  z-index: 2;
  cursor: pointer;
  &:checked + ${LabelToggle} {
    transform: translateX(20px);
  }
  &:checked {
    transform: translateX(20px);
  }
`;
