import { createStore } from 'vuex';

import timestamp from './modules/timestamp';

const store = createStore({
  modules: { timestamp },
  namespaced: true,
});

export default store;
