import "./App.css";
import "./Header.css";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Order from "./OrderOnline";
import Login from "./Login";
import Reservations from "./Reservations";
import About from "./About";
import BookingPage from "./BookingPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/reservations" element={<Reservations />} />
      <Route index element={<Reservations />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order-online" element={<Order />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      <BookingPage />
      <Footer />
    </div>
  );
}

export default App;
