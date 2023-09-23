function Footer() {
  return (
    <div className="container-fluid footer-background">
        <footer className="container footerNav">
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
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/menu">Menu</a>
                        </li>
                        <li>
                            <a href="/reservations">Reservations</a>
                        </li>
                        <li>
                            <a href="/orderonline">Order Online</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5>Contact Us</h5>
                    <ul>
                        <li>
                            <a href="/location">Location</a>
                        </li>
                        <li>
                            <a href="/phone">Phone number</a>
                        </li>
                        <li>
                            <a href="/email">Email</a>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <h5>Social Media</h5>
                    <ul>
                        <li>
                            <a href="/facebook">Facebook</a>
                        </li>
                        <li>
                            <a href="/instagram">instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
