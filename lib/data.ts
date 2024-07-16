import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import covidAnalyzerImg from "@/public/covid-analyzer.png";
import linkshrinkitImg from "@/public/linkshrinkit.png";
import myfitnessplannerImg from "@/public/myfitnessplanner.png";
import svgparserImg from "@/public/svgparser.png";
import sumitupImg from "@/public/sumitup.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Guelph",
    location: "Software Engineering Student",
    description:
      "In September of 2020, I began my journey as a Software Engineering Co-op student at the University of Guelph, learning fundamental skills such as Data Structures, Algorithms and OOP.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept. 2020",
  },
  {
    title: "Schema App",
    location: "Software Developer Intern",
    description:
      "In my first job as a software developer, I found my passion for full-stack and back-end development. At Schema App, I primarily developed client product pages and enhanced existing client tools. I also built full-stack pages and components using Javascript, Vue.js, PHP, Python, PHPUnit, Jest, and SPARQL, helping drive success and solutions for 100+ clients.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept. 2022 - Dec. 2022",
  },
  {
    title: "TD Bank",
    location: "Quality Engineer Intern",
    description:
      "As a Quality Engineer, I honed my problem solving and attention-to-detail skills, creating unit tests with Java, Selenium and Gherkin. My tasks included designing and developing test cases to validate user stories for business banking clients, and optimizing test case routing. My contributions helped in delivering high-quality software for more than 1,000,000 business clients.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Aug. 2023",
  },
  {
    title: "RBC",
    location: "AI Developer Intern",
    description:
      "At RBC, I'm currently leveraging AI to solve problems within the bank related to legacy systems and code. A highlight of my work was building two different frameworks that have now moved to production. The first framework was a service to suggest suitable platforms for an application, and the second was a reusable framework to convert code in any legacy language to Python.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan. 2024 - Present",
  },
  {
    title: "CIBC",
    location: "Application Developer Intern",
    description:
      "As an Application Developer, I will be leveraging Docker and Kubernetes to optimize and deploy applications more efficiently.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan. 2024 - Present",
  },
  {
    title: "University of Guelph",
    location: "Software Engineering Graduate",
    description:
      "In August 2025, I am expected to graduate and will be looking for a full-time position!",
    icon: React.createElement(LuGraduationCap),
    date: "August 2025",
  },
] as const;

export const projectsData = [
  {
    title: "MyFitnessPlanner",
    description:
      "A full-stack fitness application that allows users to record, edit and plan workout routines. Includes a logic authentication feature using the Supabase database.",
    tags: ["Javascript", "Vue.js", "Node.js", "Supabase", "Tailwind"],
    imageUrl: myfitnessplannerImg,
  },
  {
    title: "SVG Parser",
    description:
      "An SVG file manipulation tool enabling users to upload, select, and edit SVG files, to add and modify individual elements of an SVG image.",
    tags: ["C", "Javascript", "Node.js", "Express.js", "HTML", "CSS", "AJAX", "Bootstrap"],
    imageUrl: svgparserImg,
  },
  {
    title: "COVID-19 Data Analyzer",
    description:
      "A Python data processing and analysis system that extracts 10,000+ entries from Ontario’s COVID-19 database to facilitate a deeper understanding of the pandemic’s impact.",
    tags: ["Python", "Tkinter","Matplot"],
    imageUrl: covidAnalyzerImg,
  },
  {
    title: "Link Shrink It",
    description:
      "A full-stack web application that delivers fast and reliable URL condensed products, stored using the Firebase database.",
    tags: ["React", "Python", "Flask", "Firebase"],
    imageUrl: linkshrinkitImg,
  },
  {
    title: "Sum It Up",
    description:
      "A web application to summarize text passages that leverages LLama3 with custom prompting using Ollama and Langchain to summarize ",
    tags: ["Python", "Llama3", "Langchain", "Ollama", "React", "FastAPI"],
    imageUrl: sumitupImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "Javascript",
  "SQL",
  "HTML",
  "CSS",
  "PHP",
  "TypeScript",
  "C",
  "SPARQL",
  "Node.js",
  "React",
  "Vue.js",
  "Angular",
  "Azure",
  "Flask",
  "PostgreSQL",
  "MariaDB",
  "MySQL",
  "Ragas",
  "OpenAI",
  "Llama3",
  "Langchain",
  "LLamaIndex",
  "Ollama",
  "PGVector",
  "LangGraph",
  "PromptFoo",
  "MLFlow",
  "Langfuse",
  "ChromaDB",
  "FAISS",
  "HuggingFace",
  "Scikit-Learn",
  "Pytorch",
  "FramerMotion",
  "Git",
  "Docker",
  "Kubernetes",
  "Confluence",
  "JIRA",
  "JTMF",
  "Pandas",
  "Cucumber",
  "Bash",
  "Matplotlib",
  "Jenkins"



] as const;