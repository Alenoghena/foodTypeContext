import { MdOutlineCancel } from "react-icons/md";
import Button from "../button/Button";
import { useStateContext } from "../../../contexts/ContextProvider";
import "./Sidebar.css";

type SidebarProps = {
  handleIsClicked: (clicked: string) => void;
};

const Sidebar = () => {
  const { handleIsClicked }: SidebarProps = useStateContext();
  return (
    <div className="btnContainer">
      <section className="sidebar-btn">
        <Button />
      </section>

      <MdOutlineCancel
        role="button"
        onClick={() => handleIsClicked("sidebarSelected")}
        className="btnClose"
      />
    </div>
  );
};

export default Sidebar;
