import {
  useStateContext,
  foodArrType,
  initialStateType,
} from "../../contexts/ContextProvider";
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
      <div className="farm">
        <div className="farmContainer">
          <div className="storageContent">
            Storage of our products receives a high level of care and
            monitoring; ensuring the best temperature, pressure and humidity
            conditions are maintained for clean and healthy products
          </div>
          <img
            src={require("../../img/mediumField2.jpg")}
            alt="farm"
            className="farmImg"
          />
        </div>
        <div className="storageContainer">
          <img
            src={require("../../img/mediumGrainBin.jpg")}
            alt="farm"
            className="storageImg"
          />
          <div className="farmContent">
            These products are cultivated organically without chemicals from the
            finest breed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
