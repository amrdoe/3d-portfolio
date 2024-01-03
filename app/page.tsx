import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import Feedbacks from "@/components/Feedbacks";
import Contact from "@/components/Contact";
import StarsCanvas from "@/components/canvas/Stars";

export default function Home() {
  return (
    <main className="relative z-0 bg-primary">
      <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </header>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <footer className="relative z-0">
        <Contact />
        <StarsCanvas />
      </footer>
    </main>
  );
}
