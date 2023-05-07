export const addLeadingZero = (n, threshold = 2) => {
  const num = n.toString();
  return num.length < threshold ? `0${num}` : `${num}`;
};

export const getHourMinuteFromProp = (value) => {
  let minute = value % 100;
  minute = minute > 59 ? 59 : addLeadingZero(minute);

  let hour = Math.floor(value / 100);
  hour = hour > 23 ? 23 : addLeadingZero(hour);

  return { hour, minute };
};
