<template>
  <div class="wrapper">
    <div class="card">
      <span class="card-text">CSS</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { setHtmlTitle } from '@/utils/utils';
setHtmlTitle('流动的边框');
</script>
<style lang="scss">
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeeee;
}

.card {
  width: 180px;
  height: 250px;
  background-color: rgba($color: #000000, $alpha: 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 120%;
    background: linear-gradient(#00ccff, #d500f9);
    animation: rotate 4s linear infinite;
    z-index: 8; // 渐变背景在最下层
  }
  &::after {
    content: '';
    position: absolute;
    background-color: #0e1538;
    inset: 5px; // 等同于 top: 5px; left: 5px; bottom: 5px; right: 5px;
    border-radius: 20px;
    z-index: 9; // 模拟的边框在中间
  }
}

.card-text {
  color: #fff;
  font-size: 4em;
  text-shadow: 2px 2px pink;
  z-index: 10; // 文字在最上层
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
