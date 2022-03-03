<template>
  <div class="text-center py-5 text-2xl">滚动页面查看图片加载</div>
  <div class="h-[150vh]"></div>
  <x-image
    class="w-52 mx-auto"
    :src="'http://qiniu.pxcoder.club/others/20220224091542BSOSTrbnVd'"
    lazy
    aspect="4/3"
  ></x-image>
  <div class="h-screen"></div>
</template>
<script setup lang="ts">
import XImage from '@/components/image.vue';
import { setHtmlTitle } from '@/utils/utils';
setHtmlTitle('自定义图片组件，显示加载状态和 error 状态，支持固定宽高比，支持懒加载');
</script>
