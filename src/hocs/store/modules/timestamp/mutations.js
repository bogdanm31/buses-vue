export default {
  updateCurrentTime(state) {
    state.currentTime = Math.round(Date.now() / 1000);
  },
};
