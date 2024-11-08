"use client"
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from 'utils';
//import { navDelay, loaderDelay } from '../utils/constants';

import { usePrefersReducedMotion } from '@hooks';
// Define types for any untyped imported variables

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }
`;

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const one: React.ReactNode = (
    <h1 className="text-green-500 text-4xl md:text-5xl font-mono">Hi, my name is</h1>
  );
  const two: React.ReactNode = (
    <h2 className="text-6xl font-bold text-gray-800">Loise Mburu.</h2>
  );
  const three: React.ReactNode = (
    <h3 className="text-3xl text-slate-600">I build things for the web.</h3>
  );
  const four: React.ReactNode = (
    <p className="mt-6 text-lg text-gray-700 max-w-lg">
      I’m a software engineer specializing in building (and occasionally designing) exceptional
      digital experiences. I create user-centered digital experiences for both Web2 and Web3. 
      My focus is on building accessible, impactful products that leverage the best of modern technology, 
      from traditional web applications to blockchain-integrated platforms.
    </p>
  );
  const five: React.ReactNode = (
    <a
      className="bg-green-500 text-white py-3 px-6 rounded-lg mt-8 inline-block"
      target="_blank"
      rel="noreferrer"
    >
      Check out my Resume!
    </a>
  );

  const items: React.ReactNode[] = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
