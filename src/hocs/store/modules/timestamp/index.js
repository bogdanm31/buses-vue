import getters from './getters';
import mutations from './mutations';

export default {
  state: () => ({
    currentTime: 0,
    midnightTime: new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000,
  }),
  namespaced: true,
  getters,
  mutations,
};
