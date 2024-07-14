import {
  useStateContext,
  foodArrType,
  initialStateType,
} from "../../contexts/ContextProvider";
import Header from "../App/header/Header";
import "./Home.css";

type HomeProps = {
  menuItems: foodArrType;
  isClicked: initialStateType;
  handleIsClicked: (clicked: string) => void;
};

const Home = () => {
  const { menuItems }: HomeProps = useStateContext();

  return (
    <div className="home">
      <section className="sectionHeader">
        <Header />
      </section>

      <div>
        <section className="sectionList">
          <div className="contentContainer">
            <div className="missionStatement">
              <h3>Mission Statement</h3>
              <p>
                Our products are organic, carefully cultivated and processed
                with the best physical and traditional methods to ensure no or
                minimum loss of minerals and vitamins.
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
      </div>
    </div>
  );
};

export default Home;
