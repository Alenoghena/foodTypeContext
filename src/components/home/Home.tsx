import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAddressCard, FaCartPlus, FaShoppingBasket } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import {
  useStateContext,
  foodArrType,
  initialStateType,
} from "../../contexts/ContextProvider";
import Header from "../App/header/Header";
import "./Home.css";

type NavButtonProps = {
  title?: string;
  customFunc: () => void;
  icon: ReactNode;
  color?: string;
  dotColor?: string;
};

const NavButton = ({ customFunc, icon, color, dotColor }: NavButtonProps) => (
  <div>
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      // className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        // className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </div>
);

type HomeProps = {
  menuItems: foodArrType;
  isClicked: initialStateType;
  handleIsClicked: (clicked: string) => void;
};

const Home = () => {
  const { menuItems, isClicked, handleIsClicked }: HomeProps =
    useStateContext();

  const handleActiveMenu = () => {
    handleIsClicked("sidebarSelected");
  };

  return (
    <div className="home">
      {!isClicked.sidebarSelected && (
        <section className=" outlineMenu">
          <NavButton
            title="Menu"
            customFunc={handleActiveMenu}
            color="red"
            icon={<AiOutlineMenu />}
          />
        </section>
      )}
      <section className="sectionHeader">
        <Header />
      </section>

      <section className="sectionList">
        <div className="contentContainer">
          <div className="missionStatement">
            <h3>Mission Statement</h3>
            <p>
              Our products are organic, carefully cultivated and processed with
              the best physical and traditional methods to ensure no or minimum
              loss of minerals and vitamins.
            </p>
          </div>

          <ul className="foodApp">
            <li className="liAppHeading">
              Item Name - Item Quantity Available
            </li>
            ,
            {menuItems.map((item) => {
              return (
                <li key={item.id} className="liApp">
                  {item.name} - {item.quantity}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <nav className="nav">
        <section className="links">
          <Link to="/foods" className="foodsLink">
            <FaShoppingBasket />
            <span>Products</span>
          </Link>
          <Link to="/contacts" className="contactsLink">
            <FaAddressCard />
            <span>Contacts</span>
          </Link>
          {isClicked.orderSelected && (
            <Link to="/cart" className="cartLink">
              <FaCartPlus />
              <span>Checkout</span>
            </Link>
          )}
        </section>
        <section className=" settingsbtn">
          <FiSettings />
          <span>Settings</span>
        </section>
      </nav>
    </div>
  );
};

export default Home;
