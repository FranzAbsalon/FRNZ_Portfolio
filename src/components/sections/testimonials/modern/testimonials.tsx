'use client';
import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import TestimonialCard from './testimonial-card';

import { Reveal } from '@/components/reveal';

import { testimonials } from '@/components/sections/testimonials/config';

import Autoplay from 'embla-carousel-auto-scroll';
import TextReveal from '@/components/motion/text-reveal';

const firstRow = testimonials.slice(0, testimonials.length - 2);
const secondRow = testimonials.slice(testimonials.length - 2);

function Testimonials() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="testimonials">
      <div className="grid gap-10">
        <div className="flex w-full flex-col items-center justify-center px-4 text-center md:px-6 lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <TextReveal
              as="h2"
              className="flex flex-col -space-y-4 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              My Testimonials
            </TextReveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some of my testimonials where clients and colleagues share
            their experiences of working with me. These is not automated, these are real feedbacks from real people.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
          {secondRow.map((testimonial, index) => (
              <div key={index} className="h-full w-xs sm:w-lg md:w-2xl lg:w-4xl xl:w-[150vh] p-1">
                <TestimonialCard
                  name={testimonial.name}
                  image={testimonial.image}
                  username={testimonial.username}
                  testimonial={testimonial.testimonial}
                />
              </div>
          ))}
          <Carousel
            opts={{
              align: 'start',
              dragFree: true,
              loop: true
            }}
            plugins={[
              Autoplay({
                speed: 600 / 1000,
                startDelay: 100,
                stopOnInteraction: false,
                stopOnMouseEnter: true
              })
            ]}
            className="w-full"
          >
            <CarouselContent>
              {firstRow.map((testimonial, index) => (
                <CarouselItem
                  key={`testimonial_${index}`}
                  className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                >
                  <div className="h-full p-1">
                    <TestimonialCard
                      name={testimonial.name}
                      image={testimonial.image}
                      username={testimonial.username}
                      testimonial={testimonial.testimonial}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Testimonials;
