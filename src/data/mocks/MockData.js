const availableTimesByDate = {
  "2023-03-19": ["10:00am", "11:00am", "12:00pm"],
  "2023-03-20": ["10:30am", "11:30am", "12:00pm"],
  "2023-03-21": ["2:00pm", "3:00pm", "6:00pm"],
  "2023-03-22": ["11:00am", "11:30am", "1:00pm"],
  "2023-03-23": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2023-03-24": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2023-03-25": ["9:00pm", "9:30pm"],
  "2023-03-26": ["8:00am", "7:00pm", "7:30pm"],
  "2023-03-27": ["10:00am", "11:00am", "12:00pm"],
  "2023-03-28": ["9:00am", "10:30am", "11:30am", "1:00pm"],
  "2023-03-29": ["2:00pm", "3:00pm", "6:00pm"],
  "2023-03-30": ["11:00am", "11:30am", "5:00pm", "6:00pm"],
  "2023-03-31": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2023-04-1": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
  "2023-04-2": ["9:00pm", "9:30pm"],
  "2023-04-3": ["8:00am", "7:00pm", "7:30pm"],
  "2023-04-4": ["10:00am", "11:00am", "12:00pm"],
  "2023-04-5": ["9:00am", "10:30am", "11:30am", "1:00pm"],
  "2023-04-6": ["2:00pm", "3:00pm", "6:00pm"],
  "2023-04-7": ["11:00am", "11:30am", "5:00pm", "6:00pm"],
  "2023-04-8": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2023-04-9": ["10:00am", "11:00am", "12:00pm"],
  "2023-04-10": ["10:30am", "11:30am", "12:00pm"],
  "2023-04-11": ["2:00pm", "3:00pm", "6:00pm"],
  "2023-04-12": ["11:00am", "11:30am", "1:00pm"],
  "2023-04-13": ["2:30pm", "3:00pm", "4:00pm", "6.30pm", "7:00pm"],
  "2023-04-14": ["1:00pm", "5:00pm", "8:00pm", "8:30pm"],
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
