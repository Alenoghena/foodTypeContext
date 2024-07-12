import React, { useEffect, useState } from "react";
import "./FoodOrder.css";
import { FaShoppingCart, FaLongArrowAltLeft } from "react-icons/fa";
import {
  useStateContext,
  foodType,
  initialStateType,
  foodArrType,
} from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";

type FoodOrderType = {
  setMobile: any;
  selectedFood: foodType;
  handleClick: any;
  menuItems: foodArrType;
  isClicked: initialStateType;
  errorMessage: any;
  handleQuantityChange: (event: any) => void;
  handleIsClicked: (clicked: string) => void;
  totalAmount: string;
  name: any;
  setName: React.Dispatch<React.SetStateAction<string>>;
  mobile: number;
  quantity: number;
};

const FoodOrder = () => {
  const {
    selectedFood,
    handleClick,
    name,
    setName,
    handleIsClicked,
    handleQuantityChange,
    totalAmount,
    mobile,
    setMobile,
    quantity,
    isClicked,
    errorMessage,
  }: FoodOrderType = useStateContext();

  return (
    //Displays selected item
    <>
      <div className=" foodOrder">
        {isClicked.componentSelected && (
          <nav className="home">
            <Link to="/">
              <FaLongArrowAltLeft />
            </Link>
          </nav>
        )}
        {isClicked.componentSelected && (
          <ul className="ulFoodDetails">
            <li className="orderedItem">
              <h1 className="selFoodTitle">{selectedFood.name}</h1>
              <img
                className="selFoodImg"
                src={require(`../../images/${selectedFood.image}`)}
                alt={selectedFood.name}
              />
              <p className="selQuantity">
                Available Quantity: {selectedFood.quantity}
              </p>
              <p className="selFoodDesc">{selectedFood.desc}</p>
              <p className="selFoodPrice">${totalAmount ? totalAmount : 0}</p>
            </li>
          </ul>
        )}
        {isClicked.componentSelected && (
          <ul className="ulFoodDetails">
            <li className="selQuantity">
              <label>Quantity:</label>
              <input
                type="number"
                value={quantity}
                className="quantity"
                min="1"
                max={selectedFood.quantity}
                onChange={(e) => handleQuantityChange(e)}
              />
            </li>
            <li className="liDetails">
              <label htmlFor="name"></label>
              <input
                type="text"
                className="liFields"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your Name"
              />
            </li>
            <li className="liDetails">
              <label htmlFor="mobile"></label>
              <input
                type="text"
                className="liFields"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                placeholder="Your mobile number"
              />
            </li>
            <li>
              <button
                className="btn btnOrder"
                onClick={() =>
                  handleClick(selectedFood.id, quantity, selectedFood.quantity)
                }
              >
                Submit Order
              </button>
              <button
                className="btn btnReturnMenu"
                onClick={() => handleIsClicked("returnToPage")}
              >
                Return to Menu
              </button>
            </li>
          </ul>
        )}

        {isClicked.orderSelected && (
          <div className="shoppingCart">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </div>
        )}
      </div>
      {isClicked.componentSelected && errorMessage && (
        <div className="stock__msg">
          <h4>
            Quantity above stock. Please check available stock and enter the
            right value!
          </h4>
        </div>
      )}
    </>
  );
};

export default FoodOrder;
