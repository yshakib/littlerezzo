import { useState, useReducer } from "react";
import BookingForm from "../BookingForm/BookingForm";
import { fetchAPI, submitAPI } from "../../data/mocks/MockData";
import { useNavigate } from "react-router-dom";

export function availableTimesReducer(availableTimes, action) {
  console.log("availableTimesReducer:", availableTimes, action);
  switch (action.type) {
    case "set_times":
      return { times: [...action.times] };
    default:
      return { times: availableTimes };
  }
}

export const getTodaysDate = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

export function initializeTimes(initialTimes) {
  console.log("initializeTimes:", initialTimes);
  return {
    times: initialTimes,
  };
}

const BookingPage = ({ initialTimes }) => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(formattedDate);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("None");
  const [specReqs, setSpecreqs] = useState("");
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initialTimes,
    initializeTimes
  );
  const navigate = useNavigate();

  const fetchTimesByDate = async (date) => {
    try {
      const response = await fetchAPI(date);
      dispatch({ type: "set_times", times: response });
    } catch (error) {
      // TODO - handle telling the customer that the date has no times available on the form
      console.error("Error fetching times:", error);
    }
  };

  const submitFormData = async (formData) => {
    try {
      const response = await submitAPI(formData);
      if (response) {
        navigate("/confirmedbooking");
      }
    } catch (error) {
      // TODO - handle telling the customer that the date has no times available on the form
      console.error("Error submitting form:", error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setGuests("1");
    setOccasion("none");
    setSpecreqs("");
    const form = e.target;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());
    submitFormData(formEntries);
  };

  const updateTimes = (date) => {
    console.log("updateTimes");
    setDate(date);
    fetchTimesByDate(date);
  };

  return (
    <BookingForm
      name={name}
      setName={setName}
      phone={phone}
      setPhone={setPhone}
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
      specReqs={specReqs}
      setSpecreqs={setSpecreqs}
      availableTimes={availableTimes}
      updateTimes={updateTimes}
      submitForm={submitForm}
    />
  );
};

export default BookingPage;
