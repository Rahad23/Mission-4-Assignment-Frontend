import { Outlet } from "react-router-dom";
import Footer from "./pages/sheared/Footer/Footer";
import Navebar from "./pages/sheared/Navebar/Navebar";

const App = () => {
  return (
    <>
      <Navebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
