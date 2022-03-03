<template>
  <div id="a" class="py-14 bg-gray-400 text-3xl">
    a
    <div id="b" class="bg-yellow-400">
      b
      <div id="c" class="bg-green-400">
        c
        <button id="d" class="py-2 px-4 bg-blue-400 rounded-md text-base text-white hover:bg-blue-500 block m-auto">
          点我
        </button>
      </div>
    </div>
  </div>
  <div class="text-center text-base text-gray-700 py-10">
    <div>执行顺序如下：</div>
    <div v-for="(msg, i) in messages" :key="i" v-html="msg"></div>
  </div>
</template>
<script setup lang="ts">
import { setHtmlTitle } from '@/utils/utils';
import { onMounted, ref } from 'vue';

setHtmlTitle('e.target 和 e.currentTarget 的区别');

const messages = ref<string[]>([]);

onMounted(() => {
  const aEl = document.getElementById('a')!,
    bEl = document.getElementById('b')!,
    cEl = document.getElementById('c')!,
    dEl = document.getElementById('d')!;

  aEl.addEventListener('click', (e: MouseEvent) => {
    messages.value.push(`冒泡阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
  });
  bEl.addEventListener('click', (e: MouseEvent) => {
    messages.value.push(`冒泡阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
  });
  cEl.addEventListener('click', (e: MouseEvent) => {
    messages.value.push(`冒泡阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
  });
  dEl.addEventListener('click', (e: MouseEvent) => {
    messages.value.push(`冒泡阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
  });

  aEl.addEventListener(
    'click',
    (e: MouseEvent) => {
      messages.value.push(`捕获阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
    },
    true,
  );
  bEl.addEventListener(
    'click',
    (e: MouseEvent) => {
      messages.value.push(`捕获阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
    },
    true,
  );
  cEl.addEventListener(
    'click',
    (e: MouseEvent) => {
      messages.value.push(`捕获阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
    },
    true,
  );
  dEl.addEventListener(
    'click',
    (e: MouseEvent) => {
      messages.value.push(`捕获阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
    },
    true,
  );
});
</script>
