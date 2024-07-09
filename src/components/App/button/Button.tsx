import React from "react";
import "./Button.css";
import {
  initialStateType,
  useStateContext,
} from "../../../contexts/ContextProvider";

type ButtonProps = {
  isClicked: initialStateType;
  handleChoosePage: () => void;
  handleIsClicked: (clicked: string) => void;
};
const Button = () => {
  const { isClicked, handleChoosePage, handleIsClicked }: ButtonProps =
    useStateContext();
  return (
    <ul className="ulBtn">
      <li className="liBtn">
        {!isClicked.pageSelected && isClicked.show && isClicked.cartSelected ? (
          ""
        ) : isClicked.pageSelected &&
          isClicked.show &&
          isClicked.cartSelected ? (
          <button
            className="toggleButton"
            onClick={() => handleIsClicked("pageSelected")}
          >
            Go To MenuItem
          </button>
        ) : isClicked.pageSelected &&
          !isClicked.show &&
          !isClicked.cartSelected ? (
          <button className="toggleButton" onClick={() => handleChoosePage()}>
            check
          </button>
        ) : (
          <button className="toggleButton" onClick={() => handleChoosePage()}>
            Order Food
          </button>
        )}
      </li>
    </ul>
  );
};

export default Button;
