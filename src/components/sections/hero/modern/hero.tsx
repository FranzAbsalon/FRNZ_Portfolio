'use client';

import React, { useRef } from 'react';
import TextReveal from '@/components/motion/text-reveal';
import ParallaxImage from '@/components/motion/parallax-image';
import { TextLoop } from '@/components/motion/text-loop';
import MotionWrap from '@/components/motion-wrap';
import { hero } from '../config';

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
        <MotionWrap className="flex relative z-10 h-[53dvh] md:h-[90vh] xl:h-[80dvh] w-full items-center justify-center">
          <div className="flex w-full items-center justify-center gap-4 px-4 md:grid-cols-2 md:px-6 lg:gap-10">
            <div className="flex w-full items-center justify-center space-y-3 text-left">
              <div className="flex w-full flex-col items-center justify-center">
                <div className="relative mb-3  w-fit flex flex-row gap-2 rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-foreground/10">
                  <div className="h-3 w-3">
                    <span className="relative flex h-full w-full pt-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                  {hero.label}
                </div>
                <h1 className="text-5xl font-bold tracking-tighter self-center sm:text-7xl md:text-9xl lg:self-start lg:text-[12rem] xl:text-[14rem] cursor-default">
                  John Francis
                </h1>
                <h1 className="text-5xl font-bold tracking-tighter self-center sm:text-7xl md:text-9xl lg:self-end lg:text-[12rem] xl:text-[14rem] cursor-default">
                  Absalon
                </h1>
              </div>
            </div>
          </div>
        </MotionWrap>
        <ParallaxImage
          src="/images/prof_picture.jpg"
          containerRef={container}
          alt="Hero image"
          containerClassName="aspect-4/2 w-screen lg:mt-16"
          priority
          parallaxOptions={{
            yStart: '-10%',
            yEnd: '10%',
            scaleStart: 1,
            scaleEnd: 3
          }}
        />
    </section>
  );
}

export default Hero;
