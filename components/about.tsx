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
         I'm a fifth-year{" "}
        <span className="font-medium">Software Engineering</span> Co-op student pursuing a minor in business.
         I am passionate in both{" "}
        <span className="font-medium">full-stack web development</span>{" "} and <span className="font-medium">back-end development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of figuring out a solution to a problem. With co-op experience, I have learned various skills and technologies that make me well equipped to tackle any problem.
        I am always looking to
        learn new technologies; currently I am learning {" "}
        <span className="font-medium">React and AI technologies such as Langchain & Azure OpenAI</span>!{" "}
        I am currently looking for an{" "}
        <span className="font-medium">internship position</span>{" "} or a {" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy working out, watching movies, and relaxing with a cup of coffee. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">art, cooking, and financing</span>.
      </p>
    </motion.section>
  );
}