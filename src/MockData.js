const availableTimesByDate = {
    '2023-12-03': ['10:00', '11:00', '12:00'],
    '2023-12-02': ['10:00', '11:00', '12:00'],
    '2023-12-01': ['14:00', '15:00', '16:00'],
    '2023-11-30': ['10:00', '11:00', '12:00'],
    '2023-11-29': ['14:00', '15:00', '16:00'],
    '2023-11-28': ['10:00', '11:00', '12:00'],
    '2023-11-27': ['14:00', '15:00', '16:00'],
    '2023-11-26': ['10:00', '11:00', '12:00'],
    '2023-11-25': ['14:00', '15:00', '16:00'],
    '2023-11-24': ['10:00', '11:00', '12:00'],
    '2023-11-23': ['14:00', '15:00', '16:00'],
    '2023-11-22': ['10:00', '11:00', '12:00'],
    '2023-11-21': ['14:00', '15:00', '16:00'],
    '2023-11-20': ['10:00', '11:00', '12:00'],
    '2023-11-19': ['14:00', '15:00', '16:00'],
    '2023-11-18': ['10:00', '11:00', '12:00'],
    '2023-11-17': ['14:00', '15:00', '16:00'],
    '2023-11-16': ['10:00', '11:00', '12:00'],
    '2023-11-15': ['14:00', '15:00', '16:00'],
    '2023-11-14': ['10:00', '11:00', '12:00'],
    '2023-11-13': ['14:00', '15:00', '16:00'],
  };

  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {

    // TODO - where did this code come from?
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}