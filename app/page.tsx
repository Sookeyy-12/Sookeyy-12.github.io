import { AboutMe } from "@/components/AboutMe";
import Achievements from "@/components/Achievements";
import { HeroSection } from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import {Projects} from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="dark cursor-default">
        <NavBar />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="aboutme">
          <AboutMe />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="achievements">
          {/* <Achievements /> */}
        </div>
      </div>
    </>
  );
}
