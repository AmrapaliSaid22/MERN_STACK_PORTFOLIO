import React from "react";
import Hero from "./sub-Componentes/Hero";
import Timeline from "./sub-Componentes/Timeline";
import Skills from "./sub-Componentes/Skills";
import MyApps from "./sub-Componentes/MyApps";
import About from "./sub-Componentes/About";
// import { ThemeProvider } from "@/components/theme-provider";
import Portfolio from "./sub-Componentes/Portfolio";
import Contact from "./sub-Componentes/Contact";

const Home = () => {
  return (
    <>
    
    <article className="px-3 mt-5 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-0">
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Portfolio />
      <MyApps />
      <Contact />
     
    </article>
    </>
  );
};

export default Home;
 