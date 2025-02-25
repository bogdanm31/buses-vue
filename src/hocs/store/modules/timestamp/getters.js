export default {
  midnightTime({ midnightTime }) {
    return midnightTime;
  },
  timeFromMidnight({ currentTime, midnightTime }) {
    return Math.floor((currentTime - midnightTime) / 60) * 60;
  },
};
