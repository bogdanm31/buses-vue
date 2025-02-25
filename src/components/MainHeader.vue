<template>
  <header className="app-header">
    <div className="clock biggest-lg fb" data-testid="clock">
      {{ clockTime }}
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import { useTimestamp } from '@/hooks/useTimestamp';

export default {
  setup() {
    const store = useStore();
    const { toClockString } = useTimestamp();

    const clockTime = computed(() =>
      toClockString(store.getters['timestamp/timeFromMidnight'])
    );

    return {
      clockTime,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins/init';

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: #{$headerHeight};
  padding: {
    left: #{spacer(1)};
    right: #{spacer(1)};
  }

  @include media_query('lg') {
    position: absolute;
    left: 0;
    right: 0;

    padding: {
      left: #{spacer(2_5)};
      right: #{spacer(2_5)};
    }
  }
}
</style>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins/init';

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: #{$headerHeight};
  padding: {
    left: #{spacer(1)};
    right: #{spacer(1)};
  }

  @include media_query('lg') {
    position: absolute;
    left: 0;
    right: 0;

    padding: {
      left: #{spacer(2_5)};
      right: #{spacer(2_5)};
    }
  }
}
</style>
