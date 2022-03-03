<template>
  <div ref="root" :style="rootStyle">
    <div :style="fixedStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getScrollContainer } from '@/utils/utils';
import { computed, onMounted, ref, CSSProperties, watch } from 'vue';

interface Props {
  // 距离滚动容器顶部的距离
  top?: number;
  zIndex?: number;
  // 目标元素，目标元素显示显示在滚动容器内时，才会悬浮显示
  target?: string;
}

const props = withDefaults(defineProps<Props>(), {
  top: 0,
  zIndex: 10,
});

const emit = defineEmits({
  scroll: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) =>
    typeof scrollTop === 'number' && typeof fixed === 'boolean',
  change: (fixed: boolean) => typeof fixed == 'boolean',
});

const root = ref<HTMLDivElement>();
const scrollContainer = ref<HTMLElement | Window>();
const target = ref<HTMLElement>();

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
  scrollTop.value =
    scrollContainer.value instanceof Window ? document.documentElement.scrollTop : scrollContainer.value.scrollTop || 0;

  if (target.value) {
    const targetRect = target.value.getBoundingClientRect();
    fixed.value = rootRect.top <= props.top && targetRect.bottom > 0;
  } else {
    fixed.value = rootRect.top <= props.top;
  }
};

// 监听悬浮状态
watch(fixed, val => emit('change', val));

const onScroll = () => {
  update();
  emit('scroll', {
    scrollTop: scrollTop.value,
    fixed: fixed.value,
  });
};

onMounted(() => {
  // 获取目标元素
  if (props.target) {
    target.value = document.querySelector<HTMLElement>(props.target) ?? undefined;
  }

  scrollContainer.value = getScrollContainer(root.value!);

  scrollContainer.value?.addEventListener('scroll', onScroll);
});
</script>
