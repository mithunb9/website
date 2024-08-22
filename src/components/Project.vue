<template>
  <div class="hover:bg-[#F5F9FD05] p-2 rounded-lg pb-4" @mouseover="$emit('mouseover', name)">
    <h2 class="text-txyellow text-xl font-bold">{{ name }}</h2>
    <p class="text-txwhite">{{ short }}</p>
    <div class="flex space-x-2 mt-2">
      <div v-for="(lang, index) in langs" :key="index" class="bg-[#202F43] rounded">
        <LangLabel :name="lang" class="p-[.5rem] text-txyellow" />
      </div>
    </div>
  </div>
</template>

<script setup>
import LangLabel from './LangLabel.vue';

defineProps({
  name: String,
  short: String,
  langs: Array,
});
</script>