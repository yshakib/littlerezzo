import "./App.css";
import "./components/Header.css";
import "./components/Footer.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Order from "./components/OrderOnline";
import Login from "./components/Login";
import Reservations from "./components/Reservations";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import ConfirmedBooking from "./components/ConfirmedBooking";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
        <Route index element={<Reservations />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-online" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
