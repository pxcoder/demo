<template>
  <div class="wrapper">
    <div class="card">
      <img src="./assets/0.png" />
    </div>
    <div class="card">
      <img src="./assets/1.png" />
    </div>
    <div class="card">
      <img src="./assets/2.png" />
    </div>
    <div class="card">
      <img src="./assets/3.png" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { setHtmlTitle } from '@/utils/utils';
setHtmlTitle('拟态风格按钮');
</script>
<style lang="css">
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeeee;
  gap: 30px;
}

.card {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2), -18px 18px 30px rgba(255, 255, 255, 1);
  transition: all 0.2s ease-out;
}

.card img {
  width: 60px;
  transition: all 0.2s ease-out;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px rgba(255, 255, 255, 0.8),
    inset 18px 18px 30px rgba(0, 0, 0, 0.1), inset -18px 18px 30px rgba(255, 255, 255, 1);
}

.card:hover img {
  width: 58px;
}
</style>
