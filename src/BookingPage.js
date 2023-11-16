import { useState, useReducer} from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./MockData";
import { useNavigate } from "react-router-dom";

export function availableTimesReducer(availableTimes, action) {
      switch (action.type) {
        case 'set_times': {
          return [...action.times];
        }
        default: {
          return availableTimes
        }
      }
    }

const BookingPage = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const initializeTimes = async () => {
    try {
      const response = await fetchAPI(formattedDate);
      dispatch({ type: 'set_times', times: response });
      setDate(formattedDate);
    } catch (error) {
      console.error('Error fetching times:', error);
    }
  }

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("None");
    const [specReqs, setSpecreqs] = useState("");
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);
    const navigate = useNavigate();

    const fetchTimesByDate = async (date) => {
      try {
        const response = await fetchAPI(date);
        dispatch({ type: 'set_times', times: response });
      } catch (error) {
        // TODO - handle telling the customer that the date has no times available on the form
        console.error('Error fetching times:', error);
      }
    }

    const submitFormData = async (formData) => {
      try {
        const response = await submitAPI(formData);
        if (response) {
          navigate('/confirmedbooking');
        }
      } catch (error) {
        // TODO - handle telling the customer that the date has no times available on the form
        console.error('Error submitting form:', error);
      }
    }

    const submitForm = (e) => {
      e.preventDefault();
      setDate("");
      setTime("");
      setGuests("1");
      setOccasion("none");
      setSpecreqs("");
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
      const formEntries = Object.fromEntries(formData.entries());
      submitFormData(formEntries);
    }

    const updateTimes = date => {
        setDate(date);
        fetchTimesByDate(date);
    }

  return <BookingForm
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
  />;
}

export default BookingPage;
