<template>
  <MainHeader />

  <main>
    <router-view />
  </main>
</template>

<script>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

import MainHeader from '@/components/MainHeader';

export default {
  components: {
    MainHeader,
  },
  setup() {
    const store = useStore();
    const interval = ref(null);

    onMounted(() => {
      store.commit('timestamp/updateCurrentTime');

      interval.value = setInterval(() => {
        store.commit('timestamp/updateCurrentTime');
      }, 15000);
    });

    onUnmounted(() => {
      clearInterval(interval.value);
    });

    return {};
  },
};
</script>

<style lang="scss">
@import '@/styles/main';
</style>
