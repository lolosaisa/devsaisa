"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loaderDelay } from 'utils';
import { usePrefersReducedMotion } from '@hooks';

interface SideProps {
  children: ReactNode;
  isHome: boolean;
  orientation: 'left' | 'right'; // Limiting orientation to either 'left' or 'right'
}

const StyledSideElement = styled.div<{ orientation: 'left' | 'right' }>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${({ orientation }) => (orientation === 'left' ? '40px' : 'auto')};
  right: ${({ orientation }) => (orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${({ orientation }) => (orientation === 'left' ? '20px' : 'auto')};
    right: ${({ orientation }) => (orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side: React.FC<SideProps> = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState<boolean>(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, [isHome, prefersReducedMotion]);

  const motionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: loaderDelay / 1000 }, // Adjust transition timing as necessary
    },
  };

  return (
    <StyledSideElement orientation={orientation}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <motion.div
          initial="hidden"
          animate={isMounted ? 'visible' : 'hidden'}
          variants={motionVariants}
        >
          {children}
        </motion.div>
      )}
    </StyledSideElement>
  );
};

export default Side;
