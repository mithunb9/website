<template>
  <div class="bg-bgblue grid lg:grid-cols-2 h-screen">
    <div class="col-span-1 p-5 lg:pl-10 lg:pt-5">
      <div id="header" class="text-txwhite">
        <div
          class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
          @mouseover="stophover"
        >
          <h1 class="-mb-2">Mithun</h1>
          <h1>Balasubramanian</h1>
        </div>
      </div>

      <div class="pt-5 w-full sm:w-10/12 lg:ml-16">
        <template v-if="hoverStatus">
          <h1 class="text-txyellow mt-2 text-xl sm:text-2xl font-bold pb-2">
            {{ project.name || experience.title }}
          </h1>
          <p class="text-xl sm:text-2xl">
            {{ project.long || experience.description }}
          </p>
          <p v-if="project.link" class="text-xl sm:text-2xl mt-2">
            Visit the project
            <a :href="project.link" class="underline" target="_blank">here!</a>
          </p>
          <p v-if="experience.company" class="text-xl sm:text-2xl mt-2">
            {{ experience.company }} | {{ experience.date }}
          </p>
        </template>
        <template v-else>
          <div>
            <h1
              class="text-txyellow text-2xl sm:text-4xl lg:text-4xl font-bold"
            >
              Departures <span class="text-gray-500">//About</span>
            </h1>
            <div id="about" class="mt-4 lg:text-[1.5rem] md-[1rem] xs-[.5rem]">
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

      <Icons class="absolute bottom-4 left-4 sm:left-16 transform scale-110" />
    </div>

    <div class="col-span-1 mt-48 overflow-y-scroll overflow-hidden mr-16">
      <h1 class="text-txyellow text-2xl sm:text-4xl lg:text-4xl font-bold py-2">
        Arrivals <span class="text-gray-500">//About</span>
      </h1>
      <div>
        <div class="hover:bg-[#F5F9FD05] p-2 rounded-lg pb-4">
          <Project
            name="Mithun Balasubramanian"
            description="Hi! My name is Mithun. Hover over this to learn more about me!"
            @mouseover="stophover"
          />
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
          @mouseover="hoverExperience"
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

    <div class="fixed w-20 sm:w-32 top-4 right-4">
      <img src="./assets/logo.png" />
    </div>
  </div>
</template>

<script setup>
import Icons from "./components/Icons.vue";
import Project from "./components/Project.vue";
import WorkExperience from "./components/WorkExperience.vue";
import { ref } from "vue";

const hoverStatus = ref(false);
const project = ref({});
const experience = ref({});

const projects = ref([
  {
    name: "Cotes",
    short:
      "Cotes is a web app that allows CS students to take modular notes integrating both text and code.",
    long: "Cotes is a modular note-taking system similar to Notion that was designed for HackSMU 2022. In addition to being able to implement textual notes, you can insert code segments and run them. This functionality will help students effectively take notes.",
    langs: ["TypeScript", "Next.js", "Node.js", "MongoDB"],
    link: "https://github.com/mithunb9/cotes",
  },
  {
    name: "Clip!",
    short:
      "Clip! is an interactive educational web app for virtual learning environments.",
    long: "Clip! is an educational platform similar to Google Classroom designed specifically for virtual learning environments. As a student during the pandemic, I found that there was more that could be done to help facilitate productivity and interaction in virtual learning environments. This project was submitted for OneHacks 2021.",
    langs: ["JavaScript", "React.js", "Node.js", "Python", "Flask"],
    link: "https://github.com/KAJMHackathonTeam/clip",
  },
  {
    name: "NHS Status Tracker",
    short:
      "Web app that allows you to check your status with my school's chapter of NHS.",
    long: "NHS Status Tracker is a web app that interfaces with Google Sheets to simplify the process to check membership status and standing with my school's chapter of NHS. This project greatly simplified the experience of members and officers by streamlining the process of checking standing with the organization.",
    langs: ["JavaScript", "Next.js", "Node.js", "REST API"],
    link: "https://nhssystem.vercel.app/",
  },
]);

const workExperience = ref([
  {
    title: "Software Engineering Intern",
    company: "Digital Promise",
    date: "May 2024 - Present",
    description:
      "Worked on the development of a web application that allows users to view and manage their accounts.",
  },
  {
    title: "Undergraduate Researcher",
    company: "ConLAB @ UT Dallas",
    date: "Feburary 2024 - Present",
    description:
      "Worked on the development of a web application that allows users to view and manage their accounts.",
  },
  {
    title: "Technical Consulting Intern",
    company: "Driving Forward",
    date: "December 2022 - March 2023",
    description:
      "Worked on the development of a web application that allows users to view and manage their accounts.",
  },
  {
    title: "Software Engineering Intern",
    company: "Kalvi",
    date: "June 2021 - March 2022",
    description:
      "Worked on the development of a web application that allows users to view and manage their accounts.",
  },
]);

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
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>
