import "./BookingForm.css";

function BookingForm({
  name,
  setName,
  phone,
  setPhone,
  date,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  specReqs,
  setSpecreqs,
  availableTimes,
  updateTimes,
  submitForm,
}) {
  function renderOccasion(occasion) {
    if (occasion === "none") {
      return "";
    } else if (occasion === "birthday") {
      return (
        <>
          {" "}
          for a <strong>{occasion}</strong>
        </>
      );
    } else if (occasion === "anniversary") {
      return (
        <>
          {" "}
          for an <strong>{occasion}</strong>
        </>
      );
    } else if (occasion === "engagement") {
      return (
        <>
          {" "}
          for an <strong>{occasion}</strong>
        </>
      );
    } else {
      return "";
    }
  }
  return (
    <form onSubmit={submitForm}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bookTable">
              <h2 className="book">BOOK A TABLE</h2>
              <label htmlFor="name" className="select">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="inputField"
                minLength={2}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="phone" className="select">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="inputField"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label htmlFor="guests" className="select">
                Select number of guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                className="inputField"
                min={1}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
              <label htmlFor="date" className="select">
                Select a date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="inputField"
                value={date}
                onChange={(e) => updateTimes(e.target.value)}
                required
              />
              <label htmlFor="res-time" className="select">
                Select a time
              </label>
              <select
                id="res-time"
                name="time"
                className="inputField"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value=""></option>
                {availableTimes &&
                  Array.isArray(availableTimes) &&
                  availableTimes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                ;
              </select>
              <label htmlFor="occasion" className="select">
                Select an occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                className="inputField"
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
                id="specreqs"
                className="inputField"
                value={specReqs}
                maxLength={100}
                onChange={(e) => setSpecreqs(e.target.value)}
              />
              <p className="sentence">
                <strong>{name}</strong> is making a booking for{" "}
                <strong>{guests}</strong> persons on <strong>{date}</strong> at{" "}
                <strong>{time}</strong>
                {renderOccasion(occasion)}. {name} can be reached on{" "}
                <strong>{phone}</strong> for any issues relating to the booking
                only.
              </p>
              <div className="submitButton">
                <button
                  className="submit"
                  type="submit"
                  disabled={!name || !phone || !guests || !date || !time}
                  aria-label="On Click"
                >
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
