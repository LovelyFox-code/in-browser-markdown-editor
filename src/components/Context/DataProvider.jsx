import React, { createContext, useState, useEffect } from 'react'
// import file from '../../data/data.json'

export const documentsContext = createContext();


export const DataProvider = (props) => {
  const [documents, setDocuments] = useState([])
  const [currentDocument, setCurrentDocument] = useState({});
  const [id, setId] = useState("1");
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    async function getDocuments() {
      const response = await fetch("http://localhost:4000/documents")
      const result = await response.json();
      setDocuments(result);
    }
    getDocuments();
    return () => {

    }
  }, [])
  //CREATE DOCUMENT
  let createdTime = new Date();
  let dd = String(createdTime.getDate()).padStart(2, "0");
  let mm = String(createdTime.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = createdTime.getFullYear();
  createdTime = dd + "-" + mm + "-" + yyyy;

  const createDocument = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: "untitled-document.md",
      content: "### start create your new Mardown document",
      createdAt: createdTime,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    const response = await fetch(
      "http://localhost:4000/documents",
      requestOptions
    );
    const result = await response.json();
    setCurrentDocument(result);
    documents.push(result);
  };
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
    const newDocuments = documents.filter((document) => {
      console.log(document.id !== id);
      return document.id !== id;

    });
    console.log(id);
    setDocuments(newDocuments);
  };
  //SAVE NAME

  const saveName = async (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("currentDocument", currentDocument);
    const requestOptions = {
      method: "PATCH",
      body: JSON.stringify({ ...currentDocument, name: e.target.value }),
      headers: myHeaders,
    };
    const response = await fetch(
      `http://localhost:4000/documents/${id}`,
      requestOptions
    );
    const result = await response.json();
    console.log("RESULT", result);
    const updatedFiles = documents.map((file) => {
      if (file.id === id) {
        return result;
      }
      return file;
    });
    console.log("updatedFiles", updatedFiles);
    setDocuments(updatedFiles);
    setCurrentDocument(result);
  };
  //SAVE DOCUMENT
  const isSaved = () => {
    setIsClicked(true);
  };

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
      );
      const document = await response.json();
      console.log(document);
    }

    if (isClicked) {
      console.log("currentDocument", currentDocument);

      saveDocument();
      setIsClicked(false);
    }
  }, [isClicked]);

  //UPDATE
  useEffect(() => {
    //fetch data from API
    async function getDocument() {
      const response = await fetch(`http://localhost:4000/documents/${id}`);
      const document = await response.json();
      setCurrentDocument(document);
    }
    getDocument();
    return () => { };
  }, [id]);
  const eventHandler = (e) => {
    e.preventDefault();
    console.log(id);
    setCurrentDocument({
      ...currentDocument,
      content: e.target.value,
    });
  };
  return (
    <documentsContext.Provider value={{
      documents: documents,
      currentDocument: currentDocument,
      id: id,
      setId: setId,
      createDocument: createDocument,
      deleteDocument: deleteDocument,
      saveName: saveName,
      isSaved: isSaved,
      eventHandler: eventHandler,
    }}>
      {props.children}
    </documentsContext.Provider>
  )
}
