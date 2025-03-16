'use client';
import { useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface MouseEvent {
  movementY: number;
  clientX: number;
}

export default function Line({
  className,
  borderColor
}: {
  className?: string;
  borderColor?: string;
}) {
  const path = useRef<SVGPathElement>(null);

  const progress = useRef(0);
  const x = useRef(0.5);
  const time = useRef(Math.PI / 2);
  const reqId = useRef<number | null>(null);

  const setPath = useCallback((progressValue: number) => {
    const width = window.innerWidth * 1;

    path.current?.setAttributeNS(
      null,
      'd',
      `M0 250 Q${width * x.current} ${250 + progressValue}, ${width} 250`
    );
  }, []);

  useEffect(() => {
    setPath(progress.current);
  }, [setPath]);

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId.current) {
      cancelAnimationFrame(reqId.current);
      resetAnimation();
    }
  };

  const manageMouseMove = useCallback((e: MouseEvent) => {
    const { movementY, clientX } = e;

    const pathBound = path.current?.getBoundingClientRect();

    if (pathBound) {
      x.current = (clientX - pathBound.left) / pathBound.width;
      progress.current += movementY;
      setPath(progress.current);
    }
  }, [setPath]);

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress.current * Math.sin(time.current);
    progress.current = lerp(progress.current, 0, 0.025);
    time.current += 0.2;
    setPath(newProgress);

    if (Math.abs(progress.current) > 0.75) {
      reqId.current = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time.current = Math.PI / 2;
    progress.current = 0;
  };

  return (
    <div className={cn('relative h-px w-full', className)}>
      <div
        onMouseEnter={manageMouseEnter}
        onMouseMove={manageMouseMove}
        onMouseLeave={manageMouseLeave}
        className="relative top-[-40px] z-10 h-10 w-full"
      ></div>
      <svg className="absolute top-[-250px] h-[500px] w-full">
        <path
          ref={path}
          className={cn(
            'fill-none stroke-current stroke-[1px] text-border',
            borderColor
          )}
        ></path>
      </svg>
    </div>
  );
}
