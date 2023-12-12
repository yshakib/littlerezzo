import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="top-nav">
      <ul>
        <li className="top-li">
          <Link to="/">Home</Link>
        </li>
        <li className="top-li">
          <Link to="/about">About</Link>
        </li>
        <li className="top-li">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="top-li">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="top-li">
          <Link to="/order-online">Order Online</Link>
        </li>
        <li className="top-li">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
