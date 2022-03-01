<template>
  <div class="min-h-screen pt-24">
    <el-empty description="您访问的页面不存在"></el-empty>
  </div>
</template>
<script setup lang="ts">
import { setHtmlTitle } from '@/utils/utils';
setHtmlTitle('404');
</script>
