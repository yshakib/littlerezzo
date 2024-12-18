const availableTimesByDate = {
  "2024-12-24": ["9:00pm", "9:30pm", "4:00pm", "6:30pm"],
  "2024-12-25": ["9:00pm", "9:30pm", "1:00pm"],
  "2024-12-26": ["8:00am", "7:00pm", "7:30pm"],
  "2024-12-27": ["10:00am", "11:00am", "12:00pm"],
  "2024-12-28": ["9:00am", "10:30am", "11:30am", "1:00pm"],
  "2024-12-29": ["2:00pm", "3:00pm", "6:00pm"],
  "2024-12-30": ["11:00am", "11:30am", "5:00pm", "6:00pm"],
  "2024-12-31": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2025-01-1": ["10:00am", "11:00am", "12:00pm"],
  "2025-01-2": ["10:30am", "11:30am", "12:00pm"],
  "2025-01-3": ["2:00pm", "3:00pm", "6:00pm"],
  "2025-01-4": ["11:00am", "11:30am", "1:00pm"],
  "2025-01-5": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2024-12-6": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2024-12-7": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2024-12-8": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2024-12-9": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2024-12-10": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2024-12-11": ["10:00am", "11:00am", "12:00pm"],
  "2024-12-12": ["10:30am", "11:30am", "12:00pm"],
  "2024-12-13": ["2:00pm", "3:00pm", "6:00pm"],
  "2024-12-14": ["11:00am", "11:30am", "1:00pm"],
  "2024-12-15": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2024-12-16": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2024-12-17": ["9:00pm", "9:30pm"],
  "2024-12-18": ["8:00am", "7:00pm", "7:30pm"],
  "2024-12-19": ["10:00am", "11:00am", "12:00pm"],
  "2024-12-20": ["9:00am", "10:30am", "11:30am", "1:00pm"],
  "2024-12-21": ["2:00pm", "3:00pm", "6:00pm"],
  "2024-12-22": ["11:00am", "11:30am", "5:00pm", "6:00pm"],
  "2024-12-23": ["1:00pm", "2:30pm", "3:00pm", "8:00pm"],
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
        resolve(true);
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000);
  });
};

export { fetchAPI, submitAPI };
