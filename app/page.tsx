
import Navbar from "@/src/components/navbar";
import Hero from "@/src/components/hero";
import About from "@/src/components/about";
import Skills from "@/src/components/skills";
import Projects from "@/src/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080810]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
