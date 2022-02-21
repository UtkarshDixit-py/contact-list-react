import React from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const ContactList = (props) => {
  const { contacts, retrieveContacts } = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  }, []);

  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return (
    <div className="main">
      <h1 style={{ color: "white", textAlign: "center" }}>Contact List</h1>
      <Link to="/add">
        <button style={{ margin: "5px" }} className="ui inverted button">
          Add Contact
        </button>
      </Link>

      <div className="ui cards">{renderContactList}</div>
    </div>
  );
};
export default ContactList;
