<template>
  <div :class="{ card: true, class: true }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['class'],
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins/init';

.card {
  @include gen_breakpoint_spaces(padding);
  background-color: $colorWhite;
}
</style>
