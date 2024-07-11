import React from "react";
import "./Foods.css";
import { FaLongArrowAltLeft, FaSearch } from "react-icons/fa";
import FoodOrder from "../orders/FoodOrder";
import { Link } from "react-router-dom";
import {
  foodArrType,
  initialStateType,
  useStateContext,
} from "../../contexts/ContextProvider";

type FoodsProps = {
  menuItems: foodArrType;
  isClicked: initialStateType;
  handleSelect: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  searchTerm: string;
  setSearchTerm: (value: React.SetStateAction<string>) => void;
};

const Foods = () => {
  const {
    menuItems,
    isClicked,
    searchTerm,
    setSearchTerm,
    handleSelect,
  }: FoodsProps = useStateContext();

  return (
    <div className="foods">
      {!isClicked.componentSelected && (
        <div className="foods__form">
          <h2>Choose from our List of Items</h2>
          <form className="search">
            <label>Search:</label>
            &nbsp;
            <input
              type="search"
              value={searchTerm}
              placeholder="Search for item"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch />
          </form>
        </div>
      )}
      <ul className="ulFoods">
        {!isClicked.componentSelected &&
          menuItems.map((item) => {
            //Show here if not selected.
            return (
              //Displays List of items

              <li
                className="liFoods"
                data-id={item.id}
                onClick={(event) => handleSelect(event)}
                key={item.id}
              >
                <img
                  className="foodImg"
                  src={require(`../../images/${item.image}`)}
                  alt={item.name}
                />

                <div className="foodItem">
                  <p className="foodName"> {item.name}</p>
                  <p className="foodPrice">${item.price}</p>
                </div>
              </li>
            );
          })}
      </ul>
      <nav>
        <Link to="/" className="home">
          <FaLongArrowAltLeft />
        </Link>
      </nav>

      {isClicked.componentSelected && <FoodOrder />}
    </div>
  );
};

export default Foods;
