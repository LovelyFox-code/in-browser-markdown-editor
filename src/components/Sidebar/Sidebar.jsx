import { COLORS } from "../Common/Colors";
import NewDocumentBtn from "./NewDocumentBtn";
import Documents from "./Documents";
import Toggle from "../Navbar/Toggle";
import { Title } from "../Common/Typography";

export default function Sidebar(props) {
  const style = {
    width: "250px",
    backgroundColor: COLORS.black,
    color: COLORS.white,
    height: "100vh",
  };
  return (
    <div style={style}>
      <Title>MY DOCUMENTS</Title>
      <NewDocumentBtn></NewDocumentBtn>
      <Documents files = {props.files}></Documents>
      <Toggle/>
    </div>
  );
}
