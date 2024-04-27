import "./Header.css";
import {
  initialStateType,
  useStateContext,
} from "../../../contexts/ContextProvider";

type HeaderProps = {
  isClicked: initialStateType;
};
const Header = () => {
  const { isClicked }: HeaderProps = useStateContext();

  return (
    <div className="headerContainer">
      <h3 className="title">Online African Food Shop</h3>
      <h4 className="subTitle">
        {isClicked.pageSelected
          ? "Menu Availability"
          : "Menu List Availability"}
      </h4>
    </div>
  );
};

export default Header;
