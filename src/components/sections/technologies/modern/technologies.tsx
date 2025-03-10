'use client';
import React, { useRef } from 'react';
import MotionWrap from '@/components/motion-wrap';
import TechnologyCard from './technology-card';
import { motion } from "framer-motion"
import Image from "next/image"

import { technologies } from '@/components/sections/technologies/config';
import TextReveal from '@/components/motion/text-reveal';

function Technologies() {
  const containerRef = useRef<HTMLDivElement>(null);

  const technologies = [
    {
      name: "React",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "ShadcnUI",
      logo: "/images/devicon/shadcn.png",
    },
    {
      name: "MUI",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-plain.svg",
    },
    {
      name: "Next.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Vercel",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    },
    {
      name: "Vite",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Redux",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
      name: "Zustand",
      logo: "/images/devicon/zustand.png",
    },
    
    {
      name: "Framer Motion",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/framermotion/framermotion-original.svg",
    },
    {
      name: "GSAP",
      logo: "/images/devicon/gsap.png",
    },
    {
      name: "CSS",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "HTML",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
    {
      name: "JSON",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/json/json-plain.svg",
    },
    {
      name: "JQuery",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "Angular",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg",
    },
    {
      name: "Vue",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Svelte",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="technologies">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="flex flex-col -space-y-4 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              My Technologies
            </TextReveal>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the technologies I use in my projects
              </p>
            </div>
          </div>
          <div className="relative p-3 h-full w-full cursor-pointer items-center justify-center overflow-hidden">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                variants={item}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="mb-4 relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                  <Image fill
                  src={tech.logo || "/placeholder.svg"}
                  alt={`${tech.name} logo`}
                  className="filter grayscale transition-all duration-300 group-hover:filter-none"
                  style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="text-md text-center font-medium text-gray-900 dark:text-gray-100">{tech.name}</h3>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Technologies;
