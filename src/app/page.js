import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Research from "@/components/sections/Research";
import Experience from "@/components/sections/Experience";
import VoluntaryRoles from "@/components/sections/VoluntaryRoles";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Credentials from "@/components/sections/Credentials";
import InternationalCompetition from "@/components/sections/InternationalCompetition";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Research />
      <Work />
      <InternationalCompetition />
      <Experience />
      <VoluntaryRoles />
      <Skills />
      <Achievements />
      <Credentials />
      <Contact />
    </>
  );
}
