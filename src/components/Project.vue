<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ description }}</p>
    <div v-for="(lang, index) in langs" :key="index" class="flex bg-red-500">
      <LangLabel :name="lang" />
    </div>
  </div>
</template>

<script>
import LangLabel from "./LangLabel.vue";

export default {
  props: {
    name: String,
    description: String,
    langs: Array,
  },
  components: {
    LangLabel,
  },
};
</script>
