import React from "react";
import "./Contacts.css";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="contactsContainer">
      <h2>Head Office:</h2>
      <h3>Josieavs Nigeria Limited</h3>
      <p>8, Oyebimpe Ayorinde Street,</p>
      <p>First Unity Estate,</p>
      <p>Badore,</p>
      <p>Ajah,</p>
      <p>Lagos-Nigeria</p>
      <p>Mobile: +2347030231196, +2349048954988, +2348107958854</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Contacts;
