"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have been into {" "}
        <span className="font-medium">Full-Stack Development. </span>Currently I am working at{" "}
        <span className="font-medium">DMI Finance</span>, as a Node.js AI Developer.{" "}
        <span className="italic"> My favorite part of development</span> is the
        problem-solving aspect. My core stack
        is{" "}
        <span className="font-medium">
        TypeScript, Tailwind, React, Next.js, Express, MongoDB, PostgreSQL, Hono, Prisma
        </span>
        . I am also familiar with Docker and Redis. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a <span className="font-medium">Software Dev/Product Role.</span>
      </p>
    
      <p>
        <span className="italic">In my free-time</span>, I enjoy reading novels
        , watching movies, and playing with my dog. 
        <span className="font-medium"></span> I am currently
        learning about{" "}
        <span className="font-medium">Exciting Tech & Entrepreneurship along with brand building</span>. I'm also
        learning how to market my product efficiently.
      </p>
    </motion.section>
  );
}
