import { useState, useReducer } from "react";
import BookingForm from "./BookingForm";

const defaultAvailableTimes = [
    "",
    "5:00pm",
    "5:30pm",
    "6:00pm",
    "6:30pm",
    "7:00pm",
    "7:30pm",
    "8:00pm",
    "8:30pm",
    "9:00pm",
    "9:30pm",
    "10:00pm",
];

const initializeTimes = () => defaultAvailableTimes;

function availableTimesReducer(availableTimes, action) {
      switch (action.type) {
        case 'date_changed': {
          return [
            ...availableTimes,
          ];
        }
      }
    }

const BookingPage = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("None");
    const [specReqs, setSpecreqs] = useState("");
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, null, initializeTimes);

    const updateTimes = date => {
        setDate(date);
        dispatch({
          type: 'date_changed',
          date: date,
        });
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
  />;
}

export default BookingPage;
