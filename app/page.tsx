import { AboutMe } from "@/components/AboutMe";
import { HeroSection } from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <div className="dark">
        <NavBar />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="aboutme">
          <AboutMe />
        </div>
      </div>
    </>
  );
}
