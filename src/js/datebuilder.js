const dateBuilder = date => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[date.getDay()];
  const currentDate = date.getDay();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${currentDay} ${currentDate} ${month} ${year}`;
};

export default dateBuilder;
