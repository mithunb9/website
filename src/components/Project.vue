<template>
  <div>
    <h1 class="text-3xl text-txyellow">{{ name }}</h1>
    <p>{{ description }}</p>
    <div class="flex space-x-2">
      <div
        v-for="(lang, index) in langs"
        :key="index"
        class="bg-[#202F43] rounded"
      >
        <LangLabel :name="lang" class="p-[.5rem] text-txyellow" />
      </div>
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
