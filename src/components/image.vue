<template>
  <div class="x-image" :data-src="src" :class="{ 'x-image--aspect': isAspect }" :style="rootStyle" ref="container">
    <!-- 加载中显示 -->
    <slot name="placeholder" v-if="loading">
      <div class="x-image__placeholder">Loading...</div>
    </slot>
    <!-- 加载失败显示 -->
    <slot name="error" v-else-if="isLoadError">
      <div class="x-image__error">Failed</div>
    </slot>
    <!-- 加载成功显示 -->
    <img class="x-image__inner" v-else v-bind="$attrs" :src="src" :style="imageStyle" />
  </div>
</template>
<script setup lang="ts">
import { getScrollContainer, isViewInContainer } from '@/utils/utils';
import { computed, CSSProperties, onMounted, ref, watch } from 'vue';

interface Props {
  src: string;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  aspect?: string;
  lazy?: boolean;
  scrollContainer?: HTMLElement | string;
}

const props = withDefaults(defineProps<Props>(), {
  fit: 'cover',
});

const loading = ref(true);
const isLoadError = ref(false);
const container = ref<HTMLElement>();
const _scrollContainer = ref<HTMLElement | Window>();

const imageStyle = computed<CSSProperties>(() => {
  return { objectFit: props.fit };
});

// 是否是固定宽高比
const isAspect = computed(() => props.aspect?.split('/').every(x => !Number.isNaN(Number(x))));

const rootStyle = computed<CSSProperties>(() => {
  if (!isAspect.value) return {};

  const aspect = props.aspect!.split('/');

  return { '--aspect-w': aspect[0], '--aspect-h': aspect[1] } as CSSProperties;
});

const loadImage = () => {
  const imageEl = new Image();

  const currentImageSrc = props.src;

  imageEl.src = currentImageSrc;

  imageEl.addEventListener('load', e => {
    if (currentImageSrc != props.src) return;

    loading.value = false;
    isLoadError.value = false;
  });

  imageEl.addEventListener('error', e => {
    if (currentImageSrc != props.src) return;

    loading.value = false;
    isLoadError.value = true;
  });
};

const removeLazyLoadListener = () => {
  _scrollContainer.value?.removeEventListener('scroll', lazyLoadHandler);
  _scrollContainer.value = undefined;
};

const lazyLoadHandler = () => {
  if (isViewInContainer(container.value!, _scrollContainer.value)) {
    loadImage();
    removeLazyLoadListener();
  }
};

const addLazyLoadListener = () => {
  const { scrollContainer } = props;
  if (scrollContainer instanceof Element) {
    _scrollContainer.value = scrollContainer;
  } else if (typeof scrollContainer == 'string' && scrollContainer != '') {
    _scrollContainer.value = document.querySelector<HTMLElement>(scrollContainer) ?? undefined;
  } else if (container.value) {
    _scrollContainer.value = getScrollContainer(container.value);
  }

  if (_scrollContainer.value) {
    _scrollContainer.value.addEventListener('scroll', lazyLoadHandler);
    lazyLoadHandler();
  }
};

watch(
  () => props.src,
  () => {
    // 重置状态
    loading.value = true;
    isLoadError.value = false;

    if (props.lazy) {
      removeLazyLoadListener();
      addLazyLoadListener();
    } else {
      loadImage();
    }
  },
);

onMounted(() => {
  if (props.lazy) {
    addLazyLoadListener();
  } else {
    loadImage();
  }
});
</script>
<style>
.x-image {
  position: relative;
  overflow: hidden;
}
.x-image__placeholder,
.x-image__error,
.x-image__inner {
  width: 100%;
  height: 100%;
}
.x-image__inner {
  min-width: 100%;
}
.x-image__error,
.x-image__placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  color: #c0c4cc;
  font-size: 14px;
}
.x-image--aspect::after {
  content: '';
  display: inline-block;
  vertical-align: top;
  padding-bottom: calc(var(--aspect-h) / var(--aspect-w) * 100%);
}
.x-image--aspect > .x-image__placeholder,
.x-image--aspect > .x-image__error,
.x-image--aspect > .x-image__inner {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
