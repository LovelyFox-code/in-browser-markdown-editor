import { COLORS } from "../Common/Colors";
import NewDocumentBtn from "./NewDocumentBtn";
import Document from "./Document";
import Toggle from "../Navbar/Toggle";
import { Title } from "../Common/Typography";

export default function Sidebar() {
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
      <Document></Document>
      <Document></Document>
      <Toggle/>
    </div>
  );
}
