import { Routes, Route } from "react-router-dom";
import Foods from "../foods/Foods";
import Error from "./error/Error";
import Footer from "./Footer";
import Home from "../home/Home";
import Cart from "../cart/Cart";
import "./App.css";
import Contacts from "./contacts/Contacts";
import Sidebar from "./sidebar/Sidebar";
import {
  useStateContext,
  initialStateType,
} from "../../contexts/ContextProvider";

type AppProps = {
  isClicked: initialStateType;
};

const App = () => {
  const { isClicked }: AppProps = useStateContext();

  return (
    <main className="App">
      {isClicked.sidebarSelected && (
        <section className="sidebarContainer">
          <Sidebar />
        </section>
      )}

      <div
        className={
          !isClicked.sidebarSelected ? "main-content-full" : "main-content"
        }
      >
        <section className="routes">
          <Routes>
            {/* dashboard  */}
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </section>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};
export default App;
