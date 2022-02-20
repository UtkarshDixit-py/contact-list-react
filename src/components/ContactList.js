import React, { createContext } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const contactsCrudContext = createContext();

const ContactList = (props) => {
  const { contacts, retrieveContacts } = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  },[]);

  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return (
    <div className="main">
      <h1>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h1>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};
export default ContactList;
