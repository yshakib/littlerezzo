import { useEffect, useState } from "react";
import Main from "./Main/Main";
import BookingPage from "./BookingPage/BookingPage";
import { fetchAPI } from "../data/mocks/MockData";
import "./Main/Main.css";

const Reservations = () => {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTimes() {
    setLoading(true);
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;

    try {
      const response = await fetchAPI(formattedDate);
      setTimes(response);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTimes();
  }, []);

  return (
    <>
      <Main />
      {loading ? <div>Loading</div> : <BookingPage initialTimes={times} />}
    </>
  );
};

export default Reservations;
