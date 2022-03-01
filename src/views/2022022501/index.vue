<template>
  <div class="text-center py-12">
    <x-aspect class="mx-auto mb-5 w-52" :aspectW="aspectW" :aspectH="aspectH">
      <img class="object-cover" src="http://qiniu.pxcoder.club/others/20220224091542BSOSTrbnVd" />
    </x-aspect>

    <el-radio-group v-model="aspectIndex">
      <el-radio v-for="(item, i) in aspectList" :key="i" :label="i">{{ item.w }}:{{ item.h }}</el-radio>
    </el-radio-group>
  </div>
</template>
<script setup lang="ts">
import { setHtmlTitle } from '@/utils/utils';
import XAspect from '@/components/aspect.vue';
import { computed, ref } from 'vue';

setHtmlTitle('CSS 实现固定宽高比');

const aspectIndex = ref(3);
const aspectList = ref([
  { w: 2, h: 3 },
  { w: 3, h: 4 },
  { w: 1, h: 1 },
  { w: 4, h: 3 },
  { w: 16, h: 9 },
  { w: 16, h: 10 },
]);

const aspectW = computed(() => aspectList.value[aspectIndex.value]['w']);
const aspectH = computed(() => aspectList.value[aspectIndex.value]['h']);
</script>
<style></style>
