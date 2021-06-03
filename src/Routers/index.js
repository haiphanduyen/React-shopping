import Header from "../Commons/Components/Header";
import Footer from "../Commons/Components/Footer";
import HomeRouter from "./HomeRouter";
import AboutRouter from "./AboutRouter";
import ShopRouter from "./ShopRouter";
import {BrowserRouter as Router} from "react-router-dom"
import PointRouter from "./PointRouter";
const AppRouter = () => {
  return (
    <Router>
      <Header />
      <HomeRouter />
      <AboutRouter />
      <ShopRouter/>
      <PointRouter/>
      <Footer />
    </Router>
  );
};

export default AppRouter;
