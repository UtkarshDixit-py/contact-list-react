import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const  AddContact =()=>{
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const navigate = useNavigate();

  const {addContactHandler} = useContactsCrud();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All feilds are mandatory");
      return;
    }

    addContactHandler({name,email});
    setName("");
    setEmail("");
    navigate("/");

  };

 
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) =>setEmail( e.target.value )}
            />
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input type="number" name="number" placeholder="Phone Number" />
          </div>

          <button className="ui button blue">Submit</button>
        </form>
      </div>
    );
  
}

export default AddContact;
