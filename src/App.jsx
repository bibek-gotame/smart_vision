import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="font-Roboto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
