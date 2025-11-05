import coderCoffee from "@/public/coderCoffee.png";
import fashionnowImg from "@/public/fashionnowImg.png";
import resumebuilderImg from "@/public/resumebuilderImg.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Software Developer Internship",
  //   location: "at Elevatifier, Remote",
  //   description:
  //     "I worked as a full-stack developer for 3 month as a Intern. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "Sept/2023 - Dec/2023",
  // },
  {
    title: "P. P. SAVANI UNIVERSITY - CGPA: 8.00",
    location: "Surat, Gujarat",
    description:
      "I am currently pursuing a Bsc (Hons) in Information Technology and have a strong passion for programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "Narmada high school (12th)",
    location: "Shuklatirth, Bharuch",
    description:
    "Having completed my schooling with a strong academic foundation, I developed keen analytical thinking and effective problem-solving abilities.",
    // icon: React.createElement(FaReact),  icon for current working
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Resume Builder",
    description:
      "A full-stack web app for building professional resumes with customizable templates and real-time preview.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],

    imageUrl: resumebuilderImg,
    url: "https://github.com/parth-p1702/Resume-main-full-stack-",
  },
  {
    title: "FashionNow E-Commerce",
description:
  "A responsive e-commerce platform for browsing fashion products, managing carts, and handling orders with an integrated admin panel.",
tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
imageUrl: fashionnowImg,
url: "https://github.com/parth-p1702/FashionNow-E-Commerce",

  },
  {
    title: "",
    description:
      "A full-featured e-commerce application using the MERN stack, enabling seamless shopping experiences with robust front-end and back-end integration.",
    tags: ["React", "TailwindCSS", "Framer-motion", "React-Icons"],

    imageUrl: coderCoffee,
    url: "https://github.com/parth-p1702/React-animate-Website",
  },
] as const;

export const skillsData = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "SQL",
  "Postman",
  "Framer Motion",
  "Google Firebase",
] as const;
