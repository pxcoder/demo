<template>
  <div class="x-aspect" :style="aspectStyle">
    <div class="x-aspect__inner">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, CSSProperties } from 'vue';

interface Props {
  aspectW?: number;
  aspectH?: number;
}

const props = withDefaults(defineProps<Props>(), {
  aspectW: 4,
  aspectH: 3,
});

const aspectStyle = computed(() => {
  return {
    '--aspect-w': props.aspectW,
    '--aspect-h': props.aspectH,
  } as CSSProperties;
});
</script>
<style>
.x-aspect {
  position: relative;
}
.x-aspect::after {
  content: '';
  display: inline-block;
  padding-bottom: calc(var(--aspect-h) / var(--aspect-w) * 100%);
}
.x-aspect__inner {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.x-aspect__inner > * {
  width: 100%;
  height: 100%;
}
</style>
