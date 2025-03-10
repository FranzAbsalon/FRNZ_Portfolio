"use client";
import { useState } from "react";
import { Lens } from "@/components/ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LensDemoThirdProps {
    name: string;
    description: string;
    thumbnail: string;
}

export function LensDemoThird({
    name,
    description,
    thumbnail,
}: LensDemoThirdProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <div>
      <Lens>
        <div className="w-full h-[60vh] relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#000000] to-[#121318] p-8 my-2">
          <Beams />
          <div className="relative">
            <Image
              src={thumbnail}
              alt="image"
              width={500}
              height={500}
              className="rounded-2xl"
            />

            <motion.div className="py-4 relative mt-4">
              <h2 className="text-white text-2xl text-left font-bold">
                {name}
              </h2>
              <p className="text-neutral-200 text-sm md:text-base text-left mt-4">
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </Lens>
    </div>
  );
}

// Sorry about this but it looks cool

const Beams = () => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
    >
      <g filter="url(#filter0_f_120_7473)">
        <circle cx="34" cy="52" r="114" fill="white" />
      </g>
      <g filter="url(#filter1_f_120_7473)">
        <circle cx="332" cy="24" r="102" fill="white" />
      </g>
      <g filter="url(#filter2_f_120_7473)">
        <circle cx="191" cy="53" r="102" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_f_120_7473"
          x="-192"
          y="-174"
          width="452"
          height="452"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="56"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter1_f_120_7473"
          x="70"
          y="-238"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter2_f_120_7473"
          x="-71"
          y="-209"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
      </defs>
    </svg>
  );
};
