import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import savelink from "@/public/savelink.jpg";
import signup from "@/public/signup.jpg";
import blog from "@/public/blog.jpg";

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
  {
    title: "Node.js AI Developer (DMI Finance)",
    location: "Remote",
    description:
      `Harnessed the power of Node.js, Crawlee, Apify, and Playwright to scrape data from thousands of websites efficiently. Built an interactive chatbot frontend from scratch using HTMX and Tailwind CSS, enhancing user experience with
      dynamic content. Developed robust APIs with Node.js and Hono.js and intregate PostgreSQL with Prisma ensuring seamless and
      efficient backend communication.`,
    icon: React.createElement(FaReact),
    date: "Feb 2024 - Present",
    hrefLink: "https://app.trustauthx.com"

  },
  {
    title: "Web Developer (GLA University)",
    location: "Mathura",
    description:
      `Designed a fully functional and responsive portfolio website, showcasing projects with HTML, CSS, JavaScript, and Bootstrap. Developed a dynamic COVID-19 tracking website that fetches real-time data from the COVID-19 API.
      `,
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022-Aug 2022",
    hrefLink: "https://www.flitchcoin.com"
  }
] as const;

export const projectsData = [
  {
    title: "Medium",
    description:
      "Unleash your creativity and showcase your journey with a blog that highlights your unique story, talents, and professional achievements.",
    tags: ["Typescript", "React", "Prisma", "Tailwind", "PostgreSQL", "Hono", "Cloudflare", "Redis", "Recoil"],
    imageUrl: blog,
    hrefLink: "https://blog.yashagrawal.top/"
  },
  {
    title: "Sign Up",
    description:
      "Creative signup form that store profile and send email to user and check username on the spot.",
    tags: ["React", "TypeScript", "Tailwind", "Express", "Node", "cloudinary", "Resend,", "PostgreSQL", "Prisma"],
    imageUrl: signup,
    hrefLink: 'https://intern1aeonaxy.netlify.app/'
  },
  {
    title: "Save Link",
    description:
      "The only extension you need to save link and save time while filling any form.",
    tags: ["Typescript", "React", "Tailwind", "Context API"],
    imageUrl: savelink,
    hrefLink: "https://github.com/Yash-946/Save-Link-Extension"
  },
] as const;

export const skillsData = [
  "React",
  "Express",
  "Hono",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Cloudflare",
  "Tailwind",
  "React-Query",
  "MongoDB",
  "Next.js",
  "Docker",
  "JavaScript",
  "Recoil",
  "Git",
  "Github",
  "AWS",
  "Turborepo",
  "java",
  "C++",
  "HTML/CSS",
] as const;
