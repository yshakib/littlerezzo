import { useState } from "react";
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

const BookingPage = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("None");
    const [specReqs, setSpecreqs] = useState("");
    const [availableTimes, setAvailableTimes] = useState(defaultAvailableTimes);

    console.log('occasion: ', occasion);

    const updateTimes = date => {
        // date state
        setDate(date);
        // set availableTimes based on this date - update availableTimes state
        setAvailableTimes([
            "",
            "5:00pm",
            "7:00pm",
            "7:30pm",
            "8:00pm",
            "8:30pm",
            "9:00pm",
            "9:30pm",
            "10:00pm",
        ]);
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
    setAvailableTimes={setAvailableTimes}
    updateTimes={updateTimes}
  />;
}

export default BookingPage;
