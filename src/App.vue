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
        <p class="text-2xl mt-2">
          Visit the project
          <a :href="project.link" class="underline" target="_blank">here!</a>
        </p>
      </div>
      <div v-else>
        <About @mouseover="stophover" />
      </div>

      <Icons class="ml-16 absolute top-[100%] -mt-16 scale-[1.2]" />
    </div>

    <div class="col-span-1">
      <div class="pt-48">
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

    <div class="fixed w-[12.5rem] mt-10 left-[100%] -ml-[17.5rem]">
      <img src="./assets/logo.png" />
    </div>
  </div>
</template>

<script setup>
import Icons from "./components/Icons.vue";
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
      "Cotes is a web app that allows CS students to take modular notes integrating both text and code.",
    long: "Cotes is a modular note taking system similar to Notion that was designed for HackSMU 2022. In addition to being able to implement textual notes, you can insert code segments and run them. This functionality will help students effectively take notes.",
    langs: ["TypeScript", "Next.js", "Node.js", "MongoDB"],
    link: "https://github.com/mithunb9/cotes",
  },
  {
    name: "Clip!",
    description:
      "Clip! is an interactive educational web app for virtual learning environments.",
    long: "Clip! is a educational platform similar to Google Classroom designed specifically for virtual learning environments. As a student during the pandemic, I found that there was more that could be done to help faciliate productivity and interaction in virtual learning environments. This project was submitted for OneHacks 2021.",
    langs: ["JavaScript", "React.js", "Node.js", "Python", "Flask"],
    link: "https://github.com/KAJMHackathonTeam/clip",
  },
  {
    name: "NHS Status Tracker",
    description:
      "Web app that allows you to check your status with my school's chapter of NHS.",
    long: "NHS Status Tracker is a web app that interfaces with Google Sheets to simplify the process to check membership status and standing with my school's chapter of NHS. This project greatly simplified the experience of members and officers by streamlining the process of checking standing with the organization.",
    langs: ["JavaScript", "Next.js", "Node.js", "REST API"],
    link: "https://nhssystem.vercel.app/",
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
