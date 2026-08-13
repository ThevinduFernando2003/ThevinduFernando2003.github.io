"use client";

import { motion } from "framer-motion";
import Highlights from "./Highlights";
import EventGallery from "./EventGallery";
import AchievementDataTable from "./AchievementDataTable";
import type { Achievement, GalleryItem } from "@/types";

type Props = {
  achievements: Achievement[];
  gallery: GalleryItem[];
};

export default function AchievementsSection({ achievements, gallery }: Props) {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Highlights />
        <EventGallery items={gallery} />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <AchievementDataTable achievements={achievements} />
        </motion.div>
      </div>
    </section>
  );
}
