const addLeadingZero = (num) => {
  return num < 10 ? `0${num}` : `${num}`;
};
export const hourGenerator = () => {
  const hours = [];
  const hourRange = { min: 0, max: 23 };
  for (let i = hourRange.min; i <= hourRange.max; i++) {
    hours.push([addLeadingZero(i), addLeadingZero(i)]);
  }
  return hours;
};

export const minuteGenerator = () => {
  const minutes = [];
  const minuteRange = { min: 0, max: 59 };
  for (let i = minuteRange.min; i <= minuteRange.max; i++) {
    minutes.push([addLeadingZero(i), addLeadingZero(i)]);
  }
  return minutes;
};
