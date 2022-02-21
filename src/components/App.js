import React from "react";
import "./App.css";

import ContactList from "./ContactList";
import AddContact from "./AddContact";
import EditContact from "./EditContact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        
        <ContactsCrudContextProvider>
          <Routes>
            <Route path="/" exact element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit" element={<EditContact/>}/>
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
