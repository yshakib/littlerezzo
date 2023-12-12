import { render, screen } from "@testing-library/react";
import { initializeTimes, availableTimesReducer } from "./BookingPage";
import {
  availableTimesByDate,
  fetchAPI,
  submitAPI,
} from "../../data/mocks/MockData";

describe("initializeTimes function", () => {
  it("should return the expected defaultAvailableTimes array", () => {
    const expectedTimes = [
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
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});

/* describe("initializeTimes function", () => {
  it("should return the expected availableTimesByDate array", async () => {
    const availableTimesByDate = [
     "",
  "2023-12-24": ["10:00am", "11:00am", "12:00pm"],
  "2023-12-23": ["10:30am", "11:30am", "12:00pm"],
  "2023-12-22": ["2:00pm", "3:00pm", "6:00pm"],
  "2023-12-21": ["11:00am", "11:30am", "1:00pm"],
  "2023-12-20": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2023-12-19": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2023-12-18": ["9:00pm", "9:30pm"],
  "2023-12-17": ["8:00am", "7:00pm", "7:30pm"],
  "2023-12-16": ["10:00am", "11:00am", "12:00pm"],
  "2023-12-15": ["9:00am", "10:30am", "11:30am", "1:00pm"],
  "2023-12-14": ["2:00pm", "3:00pm", "6:00pm"],
  "2023-12-13": ["11:00am", "11:30am", "5:00pm", "6:00pm"],
  "2023-12-12": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2023-12-11": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2023-12-31": ["9:00pm", "9:30pm"],
  "2023-12-30": ["8:00am", "7:00pm", "7:30pm"],
  "2023-12-29": ["10:00am", "11:00am", "12:00pm"],
  "2023-12-28": ["9:00am", "10:30am", "11:30am", "1:00pm"],
  "2023-12-27": ["2:00pm", "3:00pm", "6:00pm"],
  "2023-12-26": ["11:00am", "11:30am", "5:00pm", "6:00pm"],
  "2023-12-25": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});
*/
test("useReducer returns the same state as the initial state", () => {
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

  const newState = availableTimesReducer(defaultAvailableTimes, {
    type: "date_changed",
    date: "2023-09-11",
  });

  expect(newState).toStrictEqual(defaultAvailableTimes);
});
