import "./Cart.css";
import { FaTrashAlt } from "react-icons/fa";
import {
  useStateContext,
  foodArrType,
  initialStateType,
  foodType,
} from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

type CartProps = {
  cart: foodArrType;
  handleIsClicked: (clicked: string) => void;
  customermobile: number;
  isClicked: initialStateType;
  cartValue: number;
  handleDelete: (id: number) => void;
};

const Cart = () => {
  const {
    cart,
    handleIsClicked,
    customermobile,
    cartValue,
    isClicked,
    handleDelete,
  }: CartProps = useStateContext();
  const [itemId, setItemId] = useState<number | null>(null);
  const handleCartTrash = (id: number) => {
    cart.map((item: foodType) => {
      if (item.id === id) {
        if (itemId === null) {
          setItemId(id);
        } else {
          setItemId(null);
        }
      }
    });
  };

  return (
    <div className="cart">
      <h2 className="heading">Your Cart List</h2>

      <ul className="cartList">
        <li className="linkContainer">
          <Link to="/foods">
            <FaArrowLeft />
          </Link>
        </li>
        {cart.map((item) => {
          return (
            <li key={item.id} data-id={item.id} className="selItem">
              <h5 className="selFoodTitle">{item.name}</h5>

              <img
                className="selFoodImg"
                src={require(`../../images/${item.image}`)}
                alt={item.name}
                style={{ height: 200, width: 200, marginBottom: 20 }}
                onClick={() => handleCartTrash(item.id)}
              />
              <p>
                {item.quantity} {item.name}-{item.price}$ each-$
                {item.totalAmount}
              </p>

              {itemId === item.id && (
                <FaTrashAlt
                  role="button"
                  tabIndex={0}
                  aria-label={`Delete ${item.name}`}
                  onClick={() => handleDelete(item.id)}
                />
              )}
            </li>
          );
        })}
      </ul>

      <li className="liMessage">
        <label>
          Order Submitted! You will receive an SMS on your mobile,
          {customermobile}, once ready, for pickup.
        </label>

        <h3>
          Total Bill is ${cartValue} for {cart.length} products
        </h3>
      </li>
    </div>
  );
};

export default Cart;
