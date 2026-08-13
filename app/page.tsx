import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import AchievementsSection from "@/components/AchievementsSection";
import Contact from "@/components/Contact";
import achievements from "@/data/achievements.json";
import gallery from "@/data/gallery.json";
import type { Achievement, GalleryItem } from "@/types";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <AchievementsSection
        achievements={achievements as Achievement[]}
        gallery={gallery as GalleryItem[]}
      />
      <Contact />
    </main>
  );
}
