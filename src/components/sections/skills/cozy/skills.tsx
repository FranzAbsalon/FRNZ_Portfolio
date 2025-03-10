import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import TextReveal from '@/components/motion/text-reveal';
import { LensDemoThird } from './lens-card';

function Skills() {
  const skills = [
    {
      name: 'Web Development',
      thumbnail: '/images/skills/webdev.jpg',
      description: `Crafting visually engaging and highly functional websites and applications using modern technologies, frameworks, and best practices to deliver seamless user experiences and optimal performance.`
    },
    {
      name: 'UI/UX Design',
      thumbnail: '/images/skills/ui-ux-design.jpg',
      description: `Designing intuitive and visually appealing user interfaces while enhancing user experiences through research-driven insights, wireframing, prototyping, and usability best practices.`
    },
    {
      name: 'Multimedia Arts',
      thumbnail: '/images/skills/photo.jpg',
      description: ` Capturing compelling visuals through photography and videography, blending creativity with technical expertise to produce high-quality content that tells impactful stories.`
    },
    {
      name: 'Graphic Design',
      thumbnail: '/images/skills/graphics.jpg',
      description: `Creating visually compelling designs that communicate ideas effectively, combining typography, color theory, and layout principles to produce engaging digital and print materials.`
    }
  ];
  
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="skills">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <TextReveal
              as="h2"
              className="flex flex-col -space-y-4 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              My Skills
            </TextReveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some of my skills where I&apos;ve turned knowledge into
            expertise, making things happen.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {skills.map((skill, index) => (
            <LensDemoThird
              key={`skill_${index}`}
              name={skill.name}
              description={skill.description}
              thumbnail={skill.thumbnail}
            />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
