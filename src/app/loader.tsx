'use client';

import { useState, useEffect, useCallback } from 'react';
import { Preloader } from '@/components/preloader';
import { AnimatePresence } from 'motion/react';
import NumberTicker from '@/components/motion/number-ticker';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <Preloader>
          <NumberTicker
            from={10}
            target={100}
            autoStart={true}
            transition={{ duration: 2.5, type: 'tween', ease: 'easeInOut' }}
            onComplete={() => {
              setIsVisible(false);
              document.body.style.overflow = 'auto'; // Enable scrolling after preloader is done
            }}
            onStart={() => {
              console.log('start');
              document.body.style.overflow = 'hidden'; // Disable scrolling while preloader is active
            }}
          />
        </Preloader>
      )}
    </AnimatePresence>
  );
}
