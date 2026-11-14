import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Research from "@/components/sections/Research";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Credentials from "@/components/sections/Credentials";
import InternationalCompetition from "@/components/sections/InternationalCompetition";
import Writing from "@/components/sections/Writing";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Research />
      <Work />
      <Experience />
      <Skills />
      <Achievements />
      <Credentials />
      <InternationalCompetition />
      <Writing />
      <Contact />
    </>
  );
}