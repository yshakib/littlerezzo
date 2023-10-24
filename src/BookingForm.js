import "./BookingForm.css";

function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, specReqs, setSpecreqs, availableTimes, setAvailableTimes, updateTimes }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setTime("");
    setGuests("1");
    setOccasion("none");
    setSpecreqs("");
  };

  function renderOccasion(occasion) {
    if (occasion === "none") {
      return '';
    } else if (occasion === "birthday") {
      return <> for a <strong>{occasion}</strong></>;
    } else if (occasion === "anniversary") {
      return <> for an <strong>{occasion}</strong></>;
    } else if (occasion === "engagement") {
      return <> for an <strong>{occasion}</strong></>;
    } else {
      return '';
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bookTable">
              <h2 className="book">BOOK A TABLE</h2>
              <label htmlFor="guests" className="select">
                Select number of guests
              </label>
              <input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              required />
              <label htmlFor="date" className="select">
                Select a date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => updateTimes(e.target.value)}
              required />
              <label htmlFor="res-time" className="select">
                Select a time
              </label>
              <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                 required>
                    {availableTimes.map((item) =>
                        <option key={item}>{item}</option>
                    )};
                </select>
              <label htmlFor="occasion" className="select">
                Select an occasion
              </label>
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>none</option>
                    <option>birthday</option>
                    <option>anniversary</option>
                    <option>engagement</option>
                </select>
              <label htmlFor="specreqs" className="select">
                Special requirements
              </label>
              <input
                type="text"
                value={specReqs}
                maxLength={100}
                onChange={(e) => setSpecreqs(e.target.value)}
              />
              <p className="confirmation">I am making a booking for <strong>{guests}</strong> persons on <strong>{date}</strong> at <strong>{time}</strong>{renderOccasion(occasion)}.</p>
              <div className="submitButton">
              <button className="submit" type="submit">
                Submit
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
