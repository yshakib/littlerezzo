import { useState } from "react";
import BookingForm from "./BookingForm";

const defaultAvailableTimes = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
];

function BookingPage() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("None");
    const [specReqs, setSpecreqs] = useState("");
    const [availableTimes, setAvailableTimes] = useState(defaultAvailableTimes);

    function updateTimes(date) {
        // date state
        setDate(date);
        // set availableTimes based on this date - update availableTimes state
        setAvailableTimes([
            "17:00",
            "19:00",
            "19:30",
            "20:00",
            "20:30",
            "21:00",
            "21:30",
            "22:00",
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
