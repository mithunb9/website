<template>
  <div class="hover:bg-[#F5F9FD05] p-2 rounded-lg pb-4" @mouseover="$emit('mouseover', experience)">
    <h2 class="text-txyellow text-xl font-bold">{{ experience.title }}</h2>
    <p class="text-txwhite">{{ experience.company }} | {{ experience.date }}</p>
    <p class="text-txwhite mt-2">{{ experience.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  experience: Object,
});
</script>