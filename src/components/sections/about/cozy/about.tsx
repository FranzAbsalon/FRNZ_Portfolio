import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import TextReveal from '@/components/motion/text-reveal';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="">
          <div className="space-y-4 grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center lg:items-start">
              <TextReveal
                as="h2"
                className="flex flex-row lg:flex-col -space-y-7 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-9xl lg:leading-tight"
              >
                About Me
              </TextReveal>
            </div>
            <div className="space-y-4 lg:pt-3">
                <TextReveal
                as="p"
                className="max-w-[1000px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                Hey there! I’m a Frontend Developer & Freelance UI/UX Designer who loves building clean, 
                intuitive, and user-friendly digital experiences. Whether I’m coding up sleek web apps or
                designing interfaces that just feel right, I’m all about making things 
                look great and work even better.
                </TextReveal>
                <TextReveal
                as="p"
                className="max-w-[1000px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                I also geek out over user research, wireframing, and prototyping, 
                making sure every design decision improves the experience. If you’re looking for someone to bring 
                your ideas to life with a mix of functionality and style, let’s make it happen! 🚀
                </TextReveal>
              <div className="flex gap-2">
                <Button asChild>
                  <a href="Absalon, John_Francis_CV.pdf" target="_blank">
                    View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
