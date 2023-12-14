import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookingForm from "./BookingForm";

test("submit button is disabled when required fields are empty", () => {
  const { getByText } = render(<BookingForm />);
  const submitButton = getByText("Submit");
  expect(submitButton).toBeDisabled();
});

test("submit button is enabled when required fields are filled", () => {
  const { getByLabelText, getByText } = render(
    <BookingForm availableTimes={{ times: ["1:00pm", "2:00pm"] }} />
  );

  fireEvent.change(getByLabelText("name"), { target: { value: "Yasmine" } });
  fireEvent.change(getByLabelText("phone"), {
    target: { value: "1234567890" },
  });
  fireEvent.change(getByLabelText("guests"), {
    target: { value: "2" },
  });
  fireEvent.change(getByLabelText("date"), {
    target: { value: "2023-12-31" },
  });
  fireEvent.change(getByLabelText("res-time"), {
    target: { value: "7:00pm" },
  });

  console.log(screen.getByTestId("booking-form").outerHTML);

  const submitButton = getByText("Submit");
  expect(submitButton).toBeEnabled();
});
