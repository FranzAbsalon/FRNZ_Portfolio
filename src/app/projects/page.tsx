import Link from 'next/link';
import { project } from '@/app/source';
import TextReveal from '@/components/motion/text-reveal';
import Line from '@/components/motion/line';
import React from 'react';

import { createMetadata } from '@/lib/metadata';
import ProjectCard from '@/app/projects/_components/project-card';

import { metadata as meta } from '@/app/config';
import type { CollectionPage, WithContext } from 'schema-dts';

const title = 'Projects';
const description = 'Here are some projects I have worked on.';

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: '/projects',
    title,
    description
  },
  twitter: {
    title,
    description
  }
});

const jsonLd: WithContext<CollectionPage> = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  url: `${meta.site.url}/projects`,
  isPartOf: {
    '@type': 'WebSite',
    name: meta.site.title,
    url: meta.site.url
  },
  hasPart: [...project.getPages()].map((project) => ({
    '@type': 'SoftwareApplication',
    name: project.data.title,
    description: project.data.description,
    url: project.url,
    applicationCategory: 'WebApplication'
  }))
};

export default function ProjectsPage(): React.ReactElement {
  const projects = [...project.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  const designs = [
    {
      title: 'Elevate',
      description: 'An Architectural Firm Website',
      thumbnail: '/images/designs/elevate.jpg',
      tags: [
        {
          "label": "UI/UX"
        },
        {
          "label": "Figma"
        },
      ],
    },
    {
      title: 'PSU Urdaneta INTEL',
      description: 'Academic Organization Accomplishment Report',
      thumbnail: '/images/designs/intel.jpg',
      tags: [
        {
          "label": "Graphics Design"
        },
        {
          "label": "Canva"
        },
        {
          "label": "Magazine"
        },
      ],
    },
    {
      title: 'AISTAC',
      description: 'Tesda Training Center Website',
      thumbnail: '/images/designs/aistac.jpg',
      tags: [
        {
          "label": "UI/UX"
        },
        {
          "label": "Figma"
        },
      ],
    },
    {
      title: 'Trendrating',
      description: 'A Trend Analytics Platform',
      thumbnail: '/images/designs/trendrating.jpg',
      tags: [
        {
          "label": "Graphics Design"
        },
        {
          "label": "Photoshop"
        },
        {
          "label": "Invitation Poster"
        },
      ],
    },
    {
      title: 'Project Beans',
      description: 'Coffee Shop Landing Page',
      thumbnail: '/images/designs/projectBeans.jpg',
      tags: [
        {
          "label": "UI/UX"
        },
        {
          "label": "Figma"
        },
      ],
    },
    {
      title: 'Crypgend',
      description: 'Crypto Trading Platform Flyer',
      thumbnail: '/images/designs/crypgend.jpg',
      tags: [
        {
          "label": "Graphics Design"
        },
        {
          "label": "Canva"
        },
        {
          "label": "Flyers"
        },
      ],
    },
    {
      title: 'Bitshares Lab Inc.',
      description: 'Blockchain-Centric Web Development Company',
      thumbnail: '/images/designs/bitshares.jpg',
      tags: [
        {
          "label": "UI/UX"
        },
        {
          "label": "Figma"
        },
      ],
    },
    {
      title: 'MC & Angie',
      description: 'Wedding Invitation Poster Design',
      thumbnail: '/images/designs/mcAngie.jpg',
      tags: [
        {
          "label": "Graphics Design"
        },
        {
          "label": "Photoshop"
        },
        {
          "label": "Invitation Poster"
        },
      ],
    },
  ]

  return (
    <main className="my-14 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          {/* todo: re-add delay of 0.2seconds */}
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            My Projects
          </TextReveal>

          <Line className={'mt-16'} />
        </div>
      </section>

      <section className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.data.title}
            href={project.url}
            description={project.data.description}
            key={`project_${index}`}
            tags={project.data.tags}
            thumbnail={`/images/projects/${project.slugs[0]}/cover.jpg`}
            website={project.data.website}
            design={false}
          />
        ))}
      </section>

      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          {/* todo: re-add delay of 0.2seconds */}
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            My Designs
          </TextReveal>

          <Line className={'mt-16'} />
        </div>
      </section>

      <section className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {designs.map((project, index) => (
          <ProjectCard
            title={project.title}
            href={'/designs'}
            description={project.description}
            key={`project_${index}`}
            tags={project.tags}
            thumbnail={project.thumbnail}
            design={true}
          />
        ))}
      </section>
    </main>
  );
}
