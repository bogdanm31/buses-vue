<template>
  <div className="page-title h2 fb mb-1_5 mb-lg-5" data-testid="page-title">
    Buses ariving to
  </div>
  <div className="px-lg-1 h1 biggest-lg fb mb-2_5" data-testid="loading-msg">
    {{ isLoading ? 'Loading...' : station ? station.name : '' }}
  </div>
  <div className="px-lg-1">
    <ul className="buses-list" data-testid="buses-list">
      <li v-for="bus in buses" :key="bus.tripId">
        <Bus :bus="bus" :delay="false" />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import { useGetBuses } from '@/hooks/useGetBuses';

import Bus from '@/features/Bus';

export default {
  components: {
    Bus,
  },
  setup() {
    const buses = ref(null),
      station = ref(null);

    const fetchBuses = async () => {
      const { data } = await useGetBuses('HSL:1201110');

      buses.value = data.buses;
      station.value = data.station;
    };

    onMounted(fetchBuses);

    return {
      isLoading: false,
      buses,
      station,
    };
  },
};
</script>

<style lang="scss" scoped>
ul.buses-list {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 3px;
  }
}
</style>
