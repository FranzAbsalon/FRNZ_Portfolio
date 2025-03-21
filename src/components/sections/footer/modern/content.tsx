import React from 'react';
import Link from '@/components/motion/link';
import { metadata as meta } from '@/app/config';

import { copyright } from '@/components/sections/footer/config';
import { links } from '@/components/sections/header/config';
import { contact } from '@/components/sections/contact/config';
import { getYearDisplay } from '@/lib/utils';

export default function Content() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-muted/30 px-12 py-8">
      <Nav />
      <Copyright />
    </div>
  );
}

const Copyright = () => {
  const { startYear } = copyright;
  const yearDisplay = getYearDisplay(startYear);
  
  return (
    <div className="flex flex-col items-start justify-between sm:flex-row sm:items-end">
      <h1 className="mt-10 text-[18vw] leading-[0.8] md:text-[16vw] lg:text-[18vw] xl:text-[20vw] 2xl:text-[22vw]">
        Portfolio
      </h1>
      <p className="mt-4 text-xs sm:mt-0 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        © {yearDisplay} {meta.author.name}
      </p>
    </div>
  )
}

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-zinc-500 dark:text-zinc-400">
          About
        </h3>
        {links.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="underline-offset-4 hover:underline"
              href={href}
              key={`ft-l_about_${index}`}
            >
              {title}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-zinc-500 dark:text-zinc-400">
          Socials
        </h3>
        {contact.socials.map((link, index) => {
          const { name, href } = link;

          return (
            <Link
              className="underline-offset-4 hover:underline"
              href={href}
              target="_blank"
              key={`ft-l_social_${index}`}
              external
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
