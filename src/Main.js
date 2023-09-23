function Main() {
  return (
    <main className="container-fluid">
        <div className="container-fluid banner-container">
            <div className="container">
                <div className="row banner">
                    <div className="col-6 banner-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Our seating accomodates bookings for two persons up to large groups.
                        We have a beautiful outdoor setting that is covered so that you can
                        enjoy your meal with us undeterred by the weather. Please let us
                        know under special requirements if you have any accessibility needs
                        or require a high chair for your little bubbas so that we can set up
                        your table just the way you need it ahead of your arrival.
                    </p>
                    </div>
                    <div className="col-6 banner-right">
                    <img
                        src="restaurant.jpg"
                        alt="Little Lemon seating area with tables for two and groups."
                    />
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="bookTable">
                        <h1 className="book">BOOK A TABLE</h1>
                        <p className="select">Select a date</p>
                        <p className="select">Select a time</p>
                        <p className="select">Select number of guests</p>
                        <p className="select">Select an occasion</p>
                        <p className="select">Special requirements</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Main;
