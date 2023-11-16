import { render, screen } from '@testing-library/react';
import { initializeTimes, availableTimesReducer } from "./BookingPage";

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


test('useReducer returns the same state as the initial state', () => {
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

    // Directly call the reducer with an action
    const newState = availableTimesReducer(defaultAvailableTimes, { type: 'date_changed', date: '2023-09-11' });

    expect(newState).toStrictEqual(defaultAvailableTimes);
});




