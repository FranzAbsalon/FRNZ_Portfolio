'use client'

import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRightIcon, InfoIcon } from 'lucide-react';

import { Project } from '@/types/project';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import TextReveal from '@/components/motion/text-reveal';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { AnimatePresence, motion } from 'motion/react';

interface ProjectCardProps extends Project {
  href: string;
  thumbnail: string;
  className?: string;
  design: Boolean;
}

interface ImageModalProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-full overflow-hidden rounded-lg bg-white p-7 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-[250px] h-[250px] md:w-[700px] md:h-[550px]">
              <Image src={imageUrl} alt="Selected Image" layout="fill" objectFit="contain" className="rounded-md" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


function ProjectCard({
  title,
  description,
  href,
  thumbnail,
  tags,
  className,
  website,
  design,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
    <Card
      className={cn(
        'relative flex h-full flex-col justify-between border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900',
        className
      )}
    >
      <CardContent className="p-4 md:p-6">
        <div className="grid gap-2">
          <AspectRatio
            ratio={16 / 9}
            className="z-2 mb-2 inline-block overflow-hidden rounded-md"
          >
            <Image
              src={thumbnail || '/placeholder.svg'}
              alt={`Image of ${title}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              onClick={() => {
                if(design){
                  setIsModalOpen(true);
                }
              }}
            />
          </AspectRatio>
          <TextReveal className="text-xl font-bold" as="h1">
            {title}
          </TextReveal>
          <TextReveal
            as="p"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {description || ''}
          </TextReveal>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge key={`project-tag_${index}`}>{tag.label}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end p-4 md:p-6">
      <div className="flex items-center justify-end gap-2">
          {website && (
            <Link href={website} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button className='cursor-pointer'>
                  Live Demo
                  <ArrowUpRightIcon className="ml-1 size-5" />
                </Button>
              </a>
            </Link>
          
          )}
          <TooltipProvider>
            {!design ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="z-2 rounded-md border border-zinc-950/10 dark:border-zinc-50/10"
                    asChild
                  >
                    <Link href={href}>
                      <InfoIcon />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More Details</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Button
                variant="ghost"
                className="z-2 rounded-md cursor-pointer border border-zinc-950/10 dark:border-zinc-50/10"
                onClick={() => {
                    setIsModalOpen(true);
                }}
              >
                View Image
              </Button>
            )}
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
    <ImageModal imageUrl={thumbnail} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default ProjectCard;
