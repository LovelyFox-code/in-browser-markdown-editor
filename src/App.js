import "./App.css";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
function App() {
  const style = {
    width: "1440px",
    overflow: "hidden",
  };
  const flex = {
    display: "flex",
  };
  //useState
  const [open, setOpen] = useState(true);
  const [files, setFiles] = useState([]);
  const [id, setId] = useState("1");
  const [currentDocument, setCurrentDocument] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState(true);

  //open close Sidebar
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  //UPDATE
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

  const isSaved = () => {
    setIsClicked(true);
  };

  //SAVE DOCUMENT
  useEffect(() => {
    async function saveDocument() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
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

  //DELETE DOCUMENT
  const deleteDocument = async () => {
    var requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:4000/documents/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setCurrentDocument({});
    setId("");
    const newFiles = files.filter((file) => {
      return file.id !== id;
    });
    setFiles(newFiles);
  };

  //SIDEBAR
  useEffect(() => {
    //fetch data from API
    async function getFile() {
      const response = await fetch("http://localhost:4000/documents");
      const files = await response.json();
      setFiles(files);
    }

    getFile();
    return () => {};
  }, []);

  //TOGGLE COLOR-THEME
  const handleColorChange = () => {
    setColor(!color);
  };
  return (
    <div style={flex}>
      {open ? (
        <Sidebar
          setId={setId}
          handleColorChange={handleColorChange}
          color={color}
          files={files}
        />
      ) : null}
      <div style={style}>
        {/* <SaveModal /> */}
        <Navbar
          handleToggle={handleToggle}
          open={open}
          isSaved={isSaved}
          deleteDocument={deleteDocument}
        ></Navbar>
        <EditorContainer
          id={id}
          currentDocument={currentDocument}
          eventHandler={eventHandler}
          color={color}
        />
      </div>
    </div>
  );
}

export default App;
