<template>
  <div ref="root" :style="rootStyle">
    <div :style="fixedStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getScrollContainer } from '@/utils/utils';
import { computed, onMounted, ref, shallowRef, CSSProperties } from 'vue';

interface Props {
  top?: number;
  zIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {
  top: 0,
  zIndex: 10,
});

const emit = defineEmits({
  scroll: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) =>
    typeof scrollTop === 'number' && typeof fixed === 'boolean',
});

const root = shallowRef<HTMLDivElement>();
const scrollContainer = shallowRef<HTMLElement | Window>();

const fixed = ref(false);
const width = ref(0);
const height = ref(0);
const scrollTop = ref(0);

const rootStyle = computed(() => {
  if (!fixed.value) return;

  return {
    width: `${width.value}px`,
    height: `${height.value}px`,
  };
});

const fixedStyle = computed(() => {
  if (!fixed.value) return;

  return {
    width: `${width.value}px`,
    height: `${height.value}px`,
    top: `${props.top}px`,
    zIndex: props.zIndex,
    position: 'fixed',
  } as CSSProperties;
});

const update = () => {
  if (!root.value || !scrollContainer.value) return;
  const rootRect = root.value.getBoundingClientRect();

  width.value = rootRect.width;
  height.value = rootRect.height;
  fixed.value = rootRect.top <= props.top;
  scrollTop.value =
    scrollContainer.value instanceof Window ? document.documentElement.scrollTop : scrollContainer.value.scrollTop || 0;
};

const onScroll = () => {
  update();
  emit('scroll', {
    scrollTop: scrollTop.value,
    fixed: fixed.value,
  });
};

onMounted(() => {
  scrollContainer.value = getScrollContainer(root.value!);

  scrollContainer.value?.addEventListener('scroll', onScroll);
});
</script>
