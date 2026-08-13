"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageOff, Play } from "lucide-react";
import MediaModal from "./MediaModal";
import type { GalleryItem, MediaItem } from "@/types";

type Props = {
  items: GalleryItem[];
};

export default function EventGallery({ items }: Props) {
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const [active, setActive] = useState<GalleryItem | null>(null);

  const modalMedia: MediaItem[] = active
    ? [{ type: active.type, url: active.url, caption: active.caption }]
    : [];

  return (
    <div className="mb-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.25em] uppercase text-accent mb-3"
      >
        Visual Evidence
      </motion.p>
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight mb-8"
      >
        Event Highlights
      </motion.h3>

      <div className="masonry">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            whileHover={{ scale: 1.015 }}
            onClick={() => setActive(item)}
            className="group relative w-full overflow-hidden border border-border bg-bg-surface text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div
              className={`relative ${
                i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"
              }`}
            >
              {failed[item.id] ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-bg-elevated to-bg-surface text-text-dim p-4">
                  <ImageOff size={28} strokeWidth={1.25} />
                  <span className="text-xs text-center">{item.caption}</span>
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.url}
                  alt={item.caption}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() =>
                    setFailed((f) => ({ ...f, [item.id]: true }))
                  }
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-bg/60 text-accent backdrop-blur-sm">
                    <Play size={18} fill="currentColor" />
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 inset-x-0 p-4">
                <span className="text-[10px] uppercase tracking-widest text-accent">
                  {item.category}
                </span>
                <p className="mt-1 text-sm font-medium leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <MediaModal
        open={!!active}
        media={modalMedia}
        title={active?.caption ?? ""}
        onClose={() => setActive(null)}
      />
    </div>
  );
}
