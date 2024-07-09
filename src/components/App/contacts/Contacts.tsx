import React from "react";
import "./Contacts.css";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="contactsContainer">
      <h2>Head Office:</h2>
      <h3>Josieavs Nigeria Limited</h3>
      <p>
        8, Oyebimpe Ayorinde Street,
        <br />, First Unity Estate,
        <br />
        Badore,
        <br />
        Ajah,
        <br />, Mobile: +2347030231196, +2349048954988, +2348107958854
        <br />,
      </p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Contacts;
