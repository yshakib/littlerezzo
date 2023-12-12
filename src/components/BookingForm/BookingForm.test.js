import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("BOOK A TABLE");
  expect(headingElement).toBeInTheDocument();
});

test("submit button is disabled when required fields are empty", () => {
  const { getByText } = render(<BookingForm />);

  const submitButton = getByText("Submit");
  expect(submitButton).toBeDisabled();
});

test("submit button is enabled when required fields are filled", () => {
  const { getByLabelText, getByText } = render(<BookingForm />);

  const nameInput = getByLabelText("name");
  const phoneInput = getByLabelText("phone");
  const guestsInput = getByLabelText("guests");
  const dateInput = getByLabelText("date");
  const timeInput = getByLabelText("res-time");

  fireEvent.change(nameInput, { target: { value: "Yasmine" } });
  fireEvent.change(phoneInput, { target: { value: "0481111111" } });
  fireEvent.change(guestsInput, { target: { value: "2" } });
  fireEvent.change(dateInput, { target: { value: "2023-12-12" } });
  fireEvent.change(timeInput, { target: { value: "3:00pm" } });

  expect(submitButton).toBeEnabled();
});
