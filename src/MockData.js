const availableTimesByDate = {
  "2023-12-03": ["10:00am", "11:00am", "12:00pm"],
  "2023-12-02": ["10:30am", "11:30am", "12:00pm"],
  "2023-12-01": ["2:00pm", "3:00pm", "6:00pm"],
  "2023-11-30": ["11:00am", "11:30am", "1:00pm"],
  "2023-11-29": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2023-11-28": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2023-12-18": ["9:00pm", "9:30pm"],
  "2023-12-17": ["8:00am", "7:00pm", "7:30pm"],
  "2023-12-16": ["10:00am", "11:00am", "12:00pm"],
  "2023-12-15": ["9:00am", "10:30am", "11:30am", "1:00pm"],
  "2023-12-14": ["2:00pm", "3:00pm", "6:00pm"],
  "2023-12-13": ["11:00am", "11:30am", "5:00pm", "6:00pm"],
  "2023-12-12": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2023-12-11": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2023-12-10": ["9:00pm", "9:30pm"],
  "2023-12-09": ["8:00am", "7:00pm", "7:30pm"],
  "2023-12-08": ["10:00am", "11:00am", "12:00pm"],
  "2023-12-07": ["9:00am", "10:30am", "11:30am", "1:00pm"],
  "2023-12-06": ["2:00pm", "3:00pm", "6:00pm"],
  "2023-12-05": ["11:00am", "11:30am", "5:00pm", "6:00pm"],
  "2023-12-04": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
};

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else {
        reject(new Error("No available times for the selected date."));
      }
    }, 1000);
  });
};

const submitAPI = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI };
