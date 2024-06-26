"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const notify = () => toast.success('Email copied to clipboard');

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    notify()
    
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:yashagrawal946@gmail.com"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default mailto action
            copyToClipboard("yashagrawal946@gmail.com");
          }}
        >
          yashagrawal946@gmail.com
        </a>{" "}
        {/* or through this form. */}
      </p>
    </motion.section>
  );
}
