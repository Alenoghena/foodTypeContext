import { Link } from "react-router-dom";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoReorderFour } from "react-icons/io5";
// import { AiOutlineUnorderedList } from "react-icons/ai";
import {
  initialStateType,
  useStateContext,
} from "../../../contexts/ContextProvider";
import "./Header.css";

type HeaderProps = {
  isClicked: initialStateType;
  handleIsClicked: (clicked: string) => void;
};
const Header = () => {
  const { isClicked, handleIsClicked }: HeaderProps = useStateContext();

  return (
    <div className="headerContainer">
      <nav className="nav">
        <section className="links">
          {isClicked.pageSelected && (
            <Link to="/foods" className="foodsLink">
              <span>Products</span>
            </Link>
          )}
          <Link to="/contacts" className="contactsLink">
            <span>Contacts</span>
          </Link>

          <Link to="/cart" className="cartLink">
            <span>Checkout</span>
          </Link>
        </section>
        <section className=" settingsbtn">
          <span>Settings</span>
        </section>
      </nav>
      {!isClicked.sidebarSelected && (
        <button
          className=" outlineMenu"
          onClick={() => handleIsClicked("sidebarSelected")}
        >
          &larr;
        </button>
      )}
      <header className="header">
        <h3 className="title">Online African Food Shop</h3>
        <h4 className="subTitle">
          {isClicked.pageSelected
            ? "Menu Availability"
            : "Menu List Availability"}
        </h4>
      </header>
    </div>
  );
};

export default Header;

// import { ReactNode } from "react";
// <FaShoppingBasket /> for food
//<FaShoppingCart />  for cart
// <FiSettings />
// <FaAddressCard />

/* <NavButton
            title="Menu"
            customFunc={handleActiveMenu}
            color="red"
            icon={}
          />  for outlinemenu*/

// const handleActiveMenu = () => {
//   handleIsClicked("sidebarSelected");
// };

// type NavButtonProps = {
//   title?: string;
//   customFunc: () => void;
//   icon: ReactNode;
//   color?: string;
//   dotColor?: string;
// };
// const NavButton = ({ customFunc, icon, color, dotColor }: NavButtonProps) => (
//   <div>
//     <button type="button" onClick={() => customFunc()} style={{ color }}>
//       <span style={{ background: dotColor }}>{icon}</span>
//     </button>
//   </div>
// );
