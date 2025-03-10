import React from 'react';
import ProjectCard from './project-card';

import MotionWrap from '@/components/motion-wrap';

import { project } from '@/app/source';
import TextReveal from '@/components/motion/text-reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Projects() {
  const projects = [...project.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  const designs = [
    {
      title: 'Elevate',
      description: 'A sleek and minimalist web design that showcases an architectural firm’s projects, and innovative designs with a visually captivating and user-friendly experience.',
      tags: [
        {
          "label": "UI/UX"
        },
        {
          "label": "Figma"
        },
      ],
      thumbnail: '/images/designs/elevate.jpg'
    },
    {
      title: 'Trendrating',
      description: 'Trendrating is a web design that offers advanced analytics to enhance investment strategies and optimize portfolio performance.',
      tags: [
        {
          "label": "UI/UX"
        },
        {
          "label": "Figma"
        },
      ],
      thumbnail: '/images/designs/trendrating.jpg'
    },
  ];

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="projects">
      <div className="space-y-4 px-4 md:space-y-6 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-row items-center justify-between text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <TextReveal
              as="h2"
              className="flex flex-col -space-y-4 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              My Projects
            </TextReveal>
          </div>
          <div className='flex flex-row items-center justify-center lg:justify-end gap-4'>
            <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[100%]">
              Here are some of my coded projects and designs, blending creativity with functionality.
            </p>
            <Button className='cursor-pointer'>
              <Link href="/projects">View More</Link>
            </Button>
          </div>
        </div>
        {/* todo: limit amount of projects shown here and all view all projects to all sections */}
        <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {projects
                .filter((project) => project.data.website)
                .map((project, index) => (
                  <ProjectCard
              title={project.data.title}
              href={project.url}
              description={project.data.description}
              key={`project_${index}`}
              tags={project.data.tags}
              thumbnail={`/images/projects/${project.slugs[0]}/cover.jpg`}
              website={project.data.website}
              />
            ))}
            {designs.map((project, index) => (
              <ProjectCard
                title={project.title}
                href={'/designs'}
                description={project.description}
                key={`design_${index}`}
                tags={project.tags}
                thumbnail={project.thumbnail} 
              />
            ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
