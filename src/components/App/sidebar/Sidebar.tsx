import { SiShopware } from "react-icons/si";
import Button from "../button/Button";
import { useStateContext } from "../../../contexts/ContextProvider";
import "./Sidebar.css";
import { Link } from "react-router-dom";

type SidebarProps = {
  handleIsClicked: (clicked: string) => void;
  activeMenu: boolean;
  screenSize: any;
  setActiveMenu: (value: React.SetStateAction<boolean>) => void;
};

const Sidebar = () => {
  const { handleIsClicked }: SidebarProps = useStateContext();

  const handleCloseSideBar = () => {
    handleIsClicked("sidebarSelected");
  };
  return (
    <div>
      <Link
        to="/"
        onClick={handleCloseSideBar} //() => handleIsClicked("sidebarSelected")
        className="sidebar shopware"
      >
        <SiShopware /> <span>Shoppy</span>
      </Link>

      <section className="sidebar-btn">
        <Button />
      </section>
    </div>
  );
};

export default Sidebar;
