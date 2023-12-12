import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-background footerNav">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              className="footerLogo"
              src="footerlogo.png"
              alt="Little Lemon logo"
            />
          </div>
          <div className="col-3">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
              <li>
                <Link to="/order-online">Order Online</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h4>Contact Us</h4>
            <ul>
              <li>11 Nanisca Road</li>
              <li>(773) 377-7373</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>
          <div className="col-3">
            <h4>Social Media</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
