import "./BookingForm.css";
import Occasion from "./Occasion";

function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, specReqs, setSpecreqs, availableTimes, setAvailableTimes, updateTimes }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !guests) {
      alert("Please fill out the missing information.");
      return;
    }
    setDate("");
    setTime("");
    setGuests("1");
    setOccasion("None");
    setSpecreqs("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bookTable">
              <h2 className="book">BOOK A TABLE</h2>
              <label htmlFor="date" className="select">
                Select a date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => updateTimes(e.target.value)}
              />
              <label htmlFor="res-time" className="select">
                Select a time
              </label>
              <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                >
                    {availableTimes.map((item) =>
                        <option key={item}>{item}</option>
                    )}
                </select>
              <label htmlFor="guests" className="select">
                Select number of guests
              </label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
              <label htmlFor="occasion" className="select">
                Select an occasion
              </label>
              <Occasion />
              <input
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              />
              <label htmlFor="specreqs" className="select">
                Special requirements
              </label>
              <input
                type="text"
                value={specReqs}
                maxLength={50}
                onChange={(e) => setSpecreqs(e.target.value)}
              />
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
