<template>
  <div class="bg-slate-500 p-[.2rem] rounded text-[.75rem]">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>
