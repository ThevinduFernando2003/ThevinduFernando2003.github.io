"use client";

import { useEffect, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ImageOff } from "lucide-react";
import type { MediaItem } from "@/types";
import { getYouTubeEmbedUrl } from "@/lib/youtube";

type Props = {
  media: MediaItem[];
  title: string;
  open: boolean;
  onClose: () => void;
};

function MediaFallback({ caption }: { caption: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-64 md:h-80 bg-bg-elevated text-text-dim">
      <ImageOff size={36} strokeWidth={1.25} />
      <p className="text-sm text-center px-6 max-w-sm">{caption}</p>
      <p className="text-xs text-text-dim/60">
        Add the file under <code className="text-accent/70">public/</code> to
        display it
      </p>
    </div>
  );
}

export default function MediaModal({ media, title, open, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (open) {
      setIndex(0);
      setFailed({});
    }
  }, [open, media]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + media.length) % media.length);
  }, [media.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % media.length);
  }, [media.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, prev, next]);

  const current = media[index];

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close media modal"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative z-10 w-full max-w-3xl border border-border bg-bg-surface shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div>
                <p className="font-[family-name:var(--font-display)] font-semibold text-sm md:text-base">
                  {title}
                </p>
                <p className="text-xs text-text-dim mt-0.5">
                  {index + 1} / {media.length}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-text-muted hover:text-accent transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative bg-bg">
              {failed[index] ? (
                <MediaFallback caption={current.caption} />
              ) : current.type === "video" && getYouTubeEmbedUrl(current.url) ? (
                <iframe
                  key={current.url}
                  src={getYouTubeEmbedUrl(current.url) ?? undefined}
                  title={current.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video max-h-[70vh] bg-black"
                />
              ) : current.type === "video" ? (
                <video
                  key={current.url}
                  src={current.url}
                  controls
                  className="w-full max-h-[70vh] bg-black"
                  onError={() =>
                    setFailed((f) => ({ ...f, [index]: true }))
                  }
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={current.url}
                  src={current.url}
                  alt={current.caption}
                  className="w-full max-h-[70vh] object-contain bg-bg"
                  onError={() =>
                    setFailed((f) => ({ ...f, [index]: true }))
                  }
                />
              )}

              {media.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-bg/70 border border-border text-text hover:text-accent transition-colors"
                    aria-label="Previous media"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-bg/70 border border-border text-text hover:text-accent transition-colors"
                    aria-label="Next media"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            <p className="px-5 py-3 text-sm text-text-muted border-t border-border">
              {current.caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
