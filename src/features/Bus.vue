<template>
  <Card :class="{ 'bus-item': true, delayed: !!delay }" data-testid="bus-card">
    <div className="row align-items-center">
      <div className="col-auto font-0" data-testid="icon">
        <img src="@/assets/svg/bus.svg" alt="" aria-hidden="true" />
      </div>
      <div className="row col pl-0">
        <div className="col-12 col-lg pl-0_5" data-testid="bus">
          {{ bus.name }} {{ busDelay }}
        </div>
        <div
          className="col-12 col-lg-auto pl-0_5 text-gray-light body2"
          data-testid="arrival"
        >
          In {{ timeRemaining }} / {{ arrivalTime }}
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';

import { useTimestamp } from '@/hooks/useTimestamp';

import Card from '@/components/Card';

export default {
  components: {
    Card,
  },
  props: ['bus', 'delay'],
  setup({ bus, delay }) {
    const store = useStore();
    const { toTimeString, toClockString } = useTimestamp();

    const arrivalTime = computed(() => toClockString(bus.arrival));

    const busDelay = computed(() =>
      delay ? `(${toTimeString(delay * 60)} late)` : ''
    );

    const timeRemaining = computed(() => {
      return toTimeString(
        bus.arrival +
          bus.serviceDay -
          (store.getters['timestamp/midnightTime'] +
            store.getters['timestamp/timeFromMidnight'])
      );
    });

    return {
      arrivalTime,
      busDelay,
      timeRemaining,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins/init';

.bus-item {
  position: relative;
  @include gen_breakpoint_spaces(margin-bottom, 0.5);

  &::before {
    content: '';
    border-radius: 0 0.5rem 0.5rem 0;
    position: absolute;
    left: 0;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 0.25rem;
    background-color: #{$colorSuccess};
  }

  &.delayed {
    &::before {
      background-color: #{$colorDanger};
    }
  }
}
</style>
