import { AboutMe } from "@/components/AboutMe";
import { Achievements } from "@/components/Achievements";
import { HeroSection } from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Socials } from "@/components/Socials";
import { ScrollProgress } from "@/components/ProgressBar";
import Footer from "@/components/Footer";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <div className="dark cursor-default">
        <ScrollProgress />
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
        <div id="techstack">
          <TechStack />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="socials">
          <Socials />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
