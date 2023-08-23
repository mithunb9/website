<template>
  <div class="bg-bgblue grid grid-cols-2 h-screen">
    <div class="col-span-1">
      <div id="header" class="text-txwhite">
        <div
          class="pl-10 pt-5 lg:text-[4rem] md:text-[2rem] xs:text-[1rem]"
          @mouseover="stophover"
        >
          <h1 class="-mb-6">Mithun</h1>
          <h1>Balasubramanian</h1>
        </div>
      </div>

      <div v-if="hoverStatus == true" class="pt-5 w-10/12 ml-16">
        <h1 class="text-txyellow mt-2 text-2xl font-bold pb-2">
          {{ project.name }}
        </h1>
        <p class="text-2xl">{{ project.long }}</p>
      </div>
      <div v-else>
        <About @mouseover="stophover" />
      </div>
    </div>

    <div class="col-span-1">
      <div class="pt-40">
        <!-- turn this into a for loop-->
        <div v-for="(project, index) in projects" :key="index">
          <Project
            :name="project.name"
            :description="project.description"
            :langs="project.langs"
            @mouseover="hover(project.name)"
            class="pb-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Plane from "./components/Plane.vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import { ref } from "vue";

let projects = ref([]);
let hoverStatus = ref(false);
let hoverName = ref("");
let project = ref({});

hoverStatus.value = false;

projects = [
  {
    name: "Cotes",
    description:
      "Cotes is a great project. This is an amazing project. You should definitely hire me. ",
    long: "Cotes is a great project. This is an amazing project. You should definitely hire me. Cotes is a great project. This is an amazing project. You should definitely hire me. ",
    langs: ["JavaScript", "Python", "React.js"],
  },
  {
    name: "Not Cotes",
    description:
      "Cotes is a great project. This is an amazing project. You should definitely hire me. ",
    long: "Cotes is a great project. This is an amazing project. You should definitely hire me. Cotes is a great project. This is an amazing project. You should definitely hire me. ",
    langs: ["JavaScript", "Python", "React.js"],
  },
];

const hover = (name) => {
  hoverStatus.value = true;

  hoverName.value = name.toLowerCase();
  const hoveredProject = projects.find(
    (project) => project.name.toLowerCase() === hoverName.value
  );

  console.log(hoveredProject);

  project.value = hoveredProject;
};

const stophover = () => {
  hoverStatus.value = false;
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
