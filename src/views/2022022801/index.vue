<template>
  <div id="a">
    <div id="b">
      <div id="c">
        <button id="d">点我</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { setHtmlTitle } from '@/utils/utils';
import { onMounted } from 'vue';

setHtmlTitle('e.target 和 e.currentTarget 的区别');

onMounted(() => {
  const aEl = document.getElementById('a')!,
    bEl = document.getElementById('b')!,
    cEl = document.getElementById('c')!,
    dEl = document.getElementById('d')!;

  aEl.addEventListener('click', (e: MouseEvent) => {
    console.log(`冒泡阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
  });
  bEl.addEventListener('click', (e: MouseEvent) => {
    console.log(`冒泡阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
  });
  cEl.addEventListener('click', (e: MouseEvent) => {
    console.log(`冒泡阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
  });
  dEl.addEventListener('click', (e: MouseEvent) => {
    console.log(`冒泡阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
  });

  aEl.addEventListener(
    'click',
    (e: MouseEvent) => {
      console.log(`捕获阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
    },
    true,
  );
  bEl.addEventListener(
    'click',
    (e: MouseEvent) => {
      console.log(`捕获阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
    },
    true,
  );
  cEl.addEventListener(
    'click',
    (e: MouseEvent) => {
      console.log(`捕获阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
    },
    true,
  );
  dEl.addEventListener(
    'click',
    (e: MouseEvent) => {
      console.log(`捕获阶段, target:${(e.target as any).id}, currentTarget: ${(e.currentTarget as any).id}`);
    },
    true,
  );
});
</script>
