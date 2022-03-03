<template>
  <div class="h-[200vh] bg-gray-100">
    <div class="h-52"></div>
    <div class="w-96 h-96 bg-gray-400 affix-container">
      <x-affix :target="'.affix-container'">
        <div class="w-10 h-10 bg-red-400 mx-auto"></div>
      </x-affix>
    </div>
    <x-affix :top="10">
      <div class="w-10 h-10 bg-red-400 mx-auto"></div>
    </x-affix>
  </div>
</template>
<script setup lang="ts">
import XAffix from '@/components/affix.vue';
import { setHtmlTitle } from '@/utils/utils';
setHtmlTitle('固钉');
</script>
<style></style>
