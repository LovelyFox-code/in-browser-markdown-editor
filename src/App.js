import "./App.css";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import SaveModal from "./components/Navbar/SaveModal";
function App() {
  const style = {
    width: "1440px",
    overflow: "hidden",
  };
  const flex = {
    display: "flex",
  };

  //open close Sidebar
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  //UPDATE
  const [id, setId] = useState("1");

  const [currentDocument, setCurrentDocument] = useState({});
  //useEffect
  useEffect(() => {
    //fetch data from API
    async function getDocument() {
      const response = await fetch(`http://localhost:4000/documents/${id}`);
      const document = await response.json();
      setCurrentDocument(document);
    }

    getDocument();
    return () => {};
  }, [id]);
  const eventHandler = debounce((e) => {
    e.preventDefault();
    // setCurrentDocument({
    //   content: e.target.value,
    //   id: currentDocument.id,
    //   name: currentDocument.name,
    //   createdAt: currentDocument.createdAt
    // })
    console.log(currentDocument);
    setCurrentDocument({
      ...currentDocument,
      content: e.target.value,
    });
  }, 500);

  const [isClicked, setIsClicked] = useState(false);
  const isSaved = () => {
    setIsClicked(true);
  };
  //SAVE DOCUMENT
  useEffect(() => {
    async function saveDocument() {
      console.log(currentDocument.content);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        // ...currentDocument,
        method: "PATCH",
        body: JSON.stringify(currentDocument),
        headers: myHeaders,
      };
      const response = await fetch(
        `http://localhost:4000/documents/${id}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      const document = await response.json();
      console.log(document);
    }
    if (isClicked) {
      saveDocument();
      setIsClicked(false);
    }
  }, [isClicked]);

  return (
    <div style={flex}>
      {open ? <Sidebar setId={setId} /> : null}
      <div style={style}>
        {/* <SaveModal /> */}
        <Navbar
          handleToggle={handleToggle}
          open={open}
          isSaved={isSaved}
        ></Navbar>
        <EditorContainer
          id={id}
          currentDocument={currentDocument}
          eventHandler={eventHandler}
        />
      </div>
    </div>
  );
}

export default App;
