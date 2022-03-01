<template>
  <div ref="root" class="h-[200vh]"></div>
</template>
<script setup lang="ts">
import { setHtmlTitle } from '@/utils/utils';
import { onMounted, shallowRef } from 'vue';

setHtmlTitle('网页添加水印');

const root = shallowRef<HTMLElement>();

interface DrawWatermarkOptions {
  el?: HTMLElement;
  font?: string;
  textColor?: string;
  text?: string;
}

const drawWatermark = (options?: DrawWatermarkOptions) => {
  const { el = document.body, font = '16px Consolas', textColor = '#ddd', text = 'pxcoder.club' } = options || {};

  const canvasEl = document.createElement('canvas');

  // 设置画布尺寸
  canvasEl.width = 300;
  canvasEl.height = 200;

  const ctx = canvasEl.getContext('2d')!;

  // 旋转画布
  ctx.rotate((-20 * Math.PI) / 180);

  // 设置字体样式
  ctx.font = font;
  ctx.fillStyle = textColor;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';

  // 将文字填充到画布中
  ctx.fillText(text, canvasEl.width / 3, canvasEl.height / 2);

  // 将画布设置为背景图
  const styleStr = `url(${canvasEl.toDataURL('image/png')})`;
  el.style.backgroundImage = styleStr;

  // 防止用户删除或者修改元素
  const observer = new MutationObserver(() => {
    if ((el && el.style.backgroundImage !== styleStr) || !el) {
      if (el) {
        el.setAttribute('style', styleStr);
      } else {
        drawWatermark(options);
      }
    }
  });

  observer.observe(document.body, {
    attributes: true,
  });
};

onMounted(() => {
  drawWatermark({ el: root.value });
});
</script>
