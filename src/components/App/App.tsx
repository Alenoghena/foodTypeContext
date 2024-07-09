import { Routes, Route } from "react-router-dom";
import Error from "./error/Error";
import Footer from "./Footer";
// import Cart from "../cart/Cart";
import "./App.css";
import Contacts from "./contacts/Contacts";
import Sidebar from "./sidebar/Sidebar";
import { lazy, Suspense } from "react";
import {
  useStateContext,
  initialStateType,
} from "../../contexts/ContextProvider";
//Lazy Loading
const Foods = lazy(() => import("../foods/Foods"));
const Home = lazy(() => import("../home/Home"));
const Cart = lazy(() => import("../cart/Cart"));
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
            <Route
              path="/"
              element={
                <Suspense fallback={<div> Home details loading......</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/foods"
              element={
                <Suspense fallback={<div> Foods details loading......</div>}>
                  <Foods />
                </Suspense>
              }
            />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Cart detail loading...</div>}>
                  <Cart />
                </Suspense>
              }
            />
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
