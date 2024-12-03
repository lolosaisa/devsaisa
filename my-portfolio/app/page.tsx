"use client";

import Hero from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from 'styled-components';
import theme from "@/styles/theme";
//import { variables } from "@/styles/variables";
//import GlobalStyle from "@/styles/globalStyle";
// import Image from "next/image"; // Uncomment if you plan to use Image

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      
      <div className="py-4">
        <Navbar />
        <main>
          
          <Hero />
          <h1>Hello saisa</h1>
        </main>
      </div>
    </ThemeProvider>
  );
}
