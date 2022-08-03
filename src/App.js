import "./App.css";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState, useEffect } from "react";
function App() {
  const style = {
    width: "1440px",
    overflow: "hidden",
  };
  const flex = {
    display: "flex",
  };
  //useStates
  const [open, setOpen] = useState(true);
  const [files, setFiles] = useState([]); //moved
  const [id, setId] = useState("1"); //moved
  // const [currentDocument, setCurrentDocument] = useState({}); //moved
  // const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState(true);

  // let createdTime = new Date();
  // let dd = String(createdTime.getDate()).padStart(2, "0");
  // let mm = String(createdTime.getMonth() + 1).padStart(2, "0"); //January is 0!
  // let yyyy = createdTime.getFullYear();
  // createdTime = dd + "-" + mm + "-" + yyyy;

  //open close Sidebar
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  //UPDATE
  // useEffect(() => {
  //   //fetch data from API
  //   async function getDocument() {
  //     const response = await fetch(`http://localhost:4000/documents/${id}`);
  //     const document = await response.json();
  //     setCurrentDocument(document);
  //   }
  //   getDocument();
  //   return () => {};
  // }, [id]);
  // const eventHandler = (e) => {
  //   e.preventDefault();
  //   setCurrentDocument({
  //     ...currentDocument,
  //     content: e.target.value,
  //   });
  // };

  //SAVE DOCUMENT
  // const isSaved = () => {
  //   setIsClicked(true);
  // };

  // useEffect(() => {
  //   async function saveDocument() {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");
  //     const requestOptions = {
  //       method: "PATCH",
  //       body: JSON.stringify(currentDocument),
  //       headers: myHeaders,
  //     };
  //     const response = await fetch(
  //       `http://localhost:4000/documents/${id}`,
  //       requestOptions
  //     );
  //     const document = await response.json();
  //     console.log(document);
  //   }
  //   if (isClicked) {
  //     saveDocument();
  //     setIsClicked(false);
  //   }
  // }, [isClicked]);

  //SAVE NAME

  // const saveName = async (e) => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   console.log("currentDocument", currentDocument);
  //   const requestOptions = {
  //     method: "PATCH",
  //     body: JSON.stringify({ ...currentDocument, name: e.target.value }),
  //     headers: myHeaders,
  //   };
  //   const response = await fetch(
  //     `http://localhost:4000/documents/${id}`,
  //     requestOptions
  //   );
  //   const result = await response.json();
  //   console.log("RESULT", result);
  //   const updatedFiles = files.map((file) => {
  //     if (file.id === id) {
  //       return result;
  //     }
  //     return file;
  //   });
  //   console.log("updatedFiles", updatedFiles);
  //   setFiles(updatedFiles);
  //   setCurrentDocument(result);
  // };

  // console.log("FILES", files[0].name);

  //DELETE DOCUMENT
  // const deleteDocument = async () => {
  //   var requestOptions = {
  //     method: "DELETE",
  //   };
  //   fetch(`http://localhost:4000/documents/${id}`, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  //   setCurrentDocument({});
  //   setId("");
  //   const newFiles = files.filter((file) => {
  //     return file.id !== id;
  //   });
  //   setFiles(newFiles);
  // };
  //CREATE DOCUMENT
  // const createDocument = async () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     name: "untitled-document.md",
  //     content: "### start create your new Mardown document",
  //     createdAt: createdTime,
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //   };
  //   const response = await fetch(
  //     "http://localhost:4000/documents",
  //     requestOptions
  //   );
  //   const result = await response.json();
  //   setCurrentDocument(result);
  //   files.push(result);
  // };

  //SIDEBAR
  // useEffect(() => {
  //   //fetch data from API
  //   async function getFile() {
  //     const response = await fetch("http://localhost:4000/documents");
  //     const files = await response.json();
  //     setFiles(files);
  //   }

  //   getFile();
  //   return () => {};
  // }, []);

  //TOGGLE COLOR-THEME
  const handleColorChange = () => {
    setColor(!color);
  };

  return (
    <div style={flex}>
      {open ? (
        <Sidebar
          // createDocument={createDocument}
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
          // isSaved={isSaved}
          // deleteDocument={deleteDocument}
          files={files}
          id={id}
          // saveName={saveName}
          // handleName={handleName}
        ></Navbar>
        <EditorContainer
          // id={id}
          // currentDocument={currentDocument}
          // eventHandler={eventHandler}
          color={color}
        />
      </div>
    </div>
  );
}

export default App;
