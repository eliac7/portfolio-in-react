import React from "react";

import "../Content/Content.css";
import Contact from "./Sections/Contact";

import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

function Content() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Content;
