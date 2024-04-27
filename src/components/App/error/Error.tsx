import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h3>
        Quantity above stock. Please check available stock and enter the right
        value!
      </h3>
      <Link to="/foods">Products</Link>
    </div>
  );
};

export default Error;
