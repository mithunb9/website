<template>
  <div class="bg-bgblue min-h-screen flex flex-col lg:flex-row">
    <div class="lg:w-1/2 p-4 lg:p-5 lg:pl-10 lg:pt-5 order-1 lg:order-none">
      <div id="header" class="text-txwhite mb-4 lg:mb-0">
        <div
          class="text-xl sm:text-2xl md:text-4xl lg:text-6xl"
          @mouseover="stophover"
        >
          <h1 class="-mb-2">Mithun</h1>
          <h1>Balasubramanian</h1>
        </div>
      </div>

      <Icons class="mb-4 lg:mb-0 lg:fixed lg:bottom-8 lg:left-8 transform scale-110" />

      <div class="pt-5 w-full lg:w-10/12 lg:ml-16">
        <template v-if="hoverStatus">
          <h1 class="text-txyellow mt-2 text-xl sm:text-2xl font-bold pb-2">
            {{ project.name || experience.title }}
          </h1>
          <p class="text-xl sm:text-2xl">
            {{ project.long || experience.description }}
          </p>
          <div v-if="project.source || project.link" class="flex mt-2 space-x-2">
            <a v-if="project.source" :href="project.source" target="_blank" rel="noopener noreferrer" class="text-txwhite hover:text-txyellow">
              <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 496 512">
                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
              </svg>
            </a>
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="text-txwhite hover:text-txyellow">
              <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 512 512">
                <path fill="currentColor" d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>
              </svg>
            </a>  
          </div>
          <p v-if="experience.company" class="text-xl sm:text-2xl mt-2">
            {{ experience.company }} | {{ experience.date }}
          </p>
        </template>
        <template v-else>
          <div>
            <h1 class="text-txyellow text-2xl sm:text-4xl lg:text-4xl font-bold">
              Departures <span class="text-gray-500">//About</span>
            </h1>
            <div id="about" class="mt-4 lg:text-[1.5rem] md:text-[1rem] text-[.5rem]">
              <p class="mb-2">
                Hello, I am currently a senior studying Computer Science at the
                University of Texas at Dallas
              </p>
              <h2 class="text-txyellow mt-2 text-2xl font-bold">About</h2>
              <div>
                <p class="mt-2">
                  I'm a hardworking and passionate student pursuing my
                  Bachelor's degree with honors in computer science,
                  specializing in software development, artificial intelligence,
                  and technology consulting.
                </p>
                <p class="mt-2">
                  I am committed to achieving academic excellence while
                  developing practical experience through internships and
                  extracurricular projects.
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="lg:w-1/2 h-screen overflow-y-auto relative custom-scrollbar">
      <div class="px-4 lg:px-0 lg:mr-16">
        <h1 class="text-txyellow text-2xl sm:text-4xl lg:text-4xl font-bold py-2">
          Arrivals <span class="text-gray-500">//About</span>
        </h1>
        <div>
          <div class="hover:bg-[#F5F9FD05] p-2 rounded-lg pb-4">
            <div @mouseover="stophover">
              <h2 class="text-txyellow text-xl font-bold">Mithun Balasubramanian</h2>
              <p class="text-txwhite mt-2">Hi! My name is Mithun. Hover over this to learn more about me!</p>
            </div>
          </div>
        </div>

        <!-- Work Experience section -->
        <h1 class="text-txyellow text-2xl sm:text-4xl lg:text-4xl font-bold py-2">
          Connections <span class="text-gray-500">//Work Experience</span>
        </h1>
        <div>
          <WorkExperience
            v-for="exp in workExperience"
            :key="exp.title"
            :experience="exp"
            @mouseover="hoverExperience(exp)"
          />
        </div>

        <!-- Projects section -->
        <h1 class="text-txyellow text-2xl sm:text-4xl lg:text-4xl font-bold py-2">
          Projects <span class="text-gray-500">//Personal</span>
        </h1>
        <div>
          <Project
            v-for="project in projects"
            :key="project.name"
            :name="project.name"
            :short="project.short"
            :langs="project.langs"
            @mouseover="hover(project.name)"
          />
        </div>
      </div>
      <Plane />
    </div>

    <div class="fixed w-16 sm:w-20 lg:w-32 top-4 right-4">
      <img src="./assets/logo.png" alt="Logo" />
    </div>
  </div>
</template>

<script setup>
import Icons from "./components/Icons.vue";
import Project from "./components/Project.vue";
import WorkExperience from "./components/WorkExperience.vue";
import Plane from "./components/Plane.vue";
import { ref } from "vue";
import projectsData from "./data/projects.json";
import workExperienceData from "./data/workexperience.json";

const hoverStatus = ref(false);
const project = ref({});
const experience = ref({});

const projects = ref(projectsData);
const workExperience = ref(workExperienceData);

const hover = (name) => {
  hoverStatus.value = true;
  project.value = projects.value.find((p) => p.name === name);
  experience.value = {};
};

const hoverExperience = (exp) => {
  hoverStatus.value = true;
  experience.value = exp;
  project.value = {};
};

const stophover = () => {
  hoverStatus.value = false;
  project.value = {};
  experience.value = {};
};
</script>

<style scoped>
@media (max-width: 1023px) {
  .lg\:flex-row {
    flex-direction: column;
  }
}

.custom-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>