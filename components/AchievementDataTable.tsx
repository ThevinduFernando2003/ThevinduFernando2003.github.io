"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Images,
  Search,
} from "lucide-react";
import MediaModal from "./MediaModal";
import type { Achievement, AchievementCategory } from "@/types";

const ERAS = ["University", "School"] as const;
type Era = (typeof ERAS)[number];

const UNIVERSITY_START_YEAR = 2024;

const SCHOOL_FILTERS = [
  "All",
  "Academics",
  "Leadership",
  "Sports",
  "Extra-Curricular",
] as const;
type SchoolFilter = (typeof SCHOOL_FILTERS)[number];

const SCHOOL_FILTER_CATEGORY: Record<
  Exclude<SchoolFilter, "All">,
  AchievementCategory
> = {
  Academics: "Academics",
  Leadership: "Leadership",
  Sports: "Swimming",
  "Extra-Curricular": "Extra-Curricular",
};

const PAGE_SIZE = 10;

type Props = {
  achievements: Achievement[];
};

export default function AchievementDataTable({ achievements }: Props) {
  const [era, setEra] = useState<Era>("University");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<SchoolFilter>("All");
  const [page, setPage] = useState(1);
  const [mediaTarget, setMediaTarget] = useState<Achievement | null>(null);

  const eraAchievements = useMemo(
    () =>
      achievements.filter((a) =>
        era === "University"
          ? Number(a.year) >= UNIVERSITY_START_YEAR
          : Number(a.year) < UNIVERSITY_START_YEAR
      ),
    [achievements, era]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return eraAchievements
      .filter((a) => {
        const matchesFilter =
          era === "University" ||
          filter === "All" ||
          a.category === SCHOOL_FILTER_CATEGORY[filter as Exclude<SchoolFilter, "All">];
        const matchesQuery =
          !q ||
          a.title.toLowerCase().includes(q) ||
          a.organization.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.year.includes(q);
        return matchesFilter && matchesQuery;
      })
      .sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title));
  }, [eraAchievements, era, filter, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageRows = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const changeEra = (e: Era) => {
    setEra(e);
    setFilter("All");
    setPage(1);
  };

  const changeFilter = (f: SchoolFilter) => {
    setFilter(f);
    setPage(1);
  };

  const changeQuery = (v: string) => {
    setQuery(v);
    setPage(1);
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
            Full Achievement Record
          </h3>
          <p className="text-sm text-text-dim mt-1">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} · searchable
            & filterable
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => changeQuery(e.target.value)}
            placeholder="Search by name…"
            className="w-full bg-bg border border-border pl-9 pr-3 py-2.5 text-sm text-text placeholder:text-text-dim focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Era toggle */}
      <div className="mb-4 flex flex-wrap gap-2">
        {ERAS.map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => changeEra(e)}
            className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors border ${
              era === e
                ? "border-accent bg-accent text-bg"
                : "border-border text-text-muted hover:border-accent/50 hover:text-accent"
            }`}
          >
            {e === "University" ? "University (2024–2028)" : "School"}
          </button>
        ))}
      </div>

      {/* Category filter tabs — School only */}
      {era === "School" && (
        <div className="mb-6 flex flex-wrap gap-2">
          {SCHOOL_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => changeFilter(f)}
              className={`px-3.5 py-1.5 text-xs tracking-wide transition-colors border ${
                filter === f
                  ? "border-accent bg-accent text-bg"
                  : "border-border text-text-muted hover:border-accent/50 hover:text-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-bg-elevated border-b border-border">
            <tr>
              <th className="px-4 py-3 font-medium text-text-dim text-xs uppercase tracking-wider">
                Year
              </th>
              <th className="px-4 py-3 font-medium text-text-dim text-xs uppercase tracking-wider">
                Achievement
              </th>
              <th className="px-4 py-3 font-medium text-text-dim text-xs uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 font-medium text-text-dim text-xs uppercase tracking-wider">
                Organization
              </th>
              <th className="px-4 py-3 font-medium text-text-dim text-xs uppercase tracking-wider text-right">
                Media
              </th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {pageRows.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-12 text-center text-text-dim"
                  >
                    No achievements match your filters.
                  </td>
                </tr>
              ) : (
                pageRows.map((row) => {
                  const hasMedia = (row.media?.length ?? 0) > 0;
                  return (
                    <motion.tr
                      key={row.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-b border-border last:border-0 hover:bg-bg-elevated/60 transition-colors"
                    >
                      <td className="px-4 py-3.5 text-accent font-mono text-xs">
                        {row.year}
                      </td>
                      <td className="px-4 py-3.5">
                        <p className="font-medium text-text">{row.title}</p>
                        <p className="text-xs text-text-dim mt-0.5 line-clamp-1 max-w-xs">
                          {row.description}
                        </p>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="inline-block border border-border px-2 py-0.5 text-xs text-text-muted">
                          {row.category === "Swimming" ? "Sports" : row.category}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-text-muted text-xs">
                        {row.organization}
                      </td>
                      <td className="px-4 py-3.5 text-right">
                        {hasMedia ? (
                          <button
                            type="button"
                            onClick={() => setMediaTarget(row)}
                            className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline"
                          >
                            <Images size={13} />
                            View Media
                          </button>
                        ) : (
                          <span className="text-xs text-text-dim/50">—</span>
                        )}
                      </td>
                    </motion.tr>
                  );
                })
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-xs text-text-dim">
          Page {currentPage} of {totalPages}
          {filtered.length > 0 && (
            <>
              {" "}
              · showing {(currentPage - 1) * PAGE_SIZE + 1}–
              {Math.min(currentPage * PAGE_SIZE, filtered.length)} of{" "}
              {filtered.length}
            </>
          )}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="inline-flex items-center gap-1 border border-border px-3 py-1.5 text-xs text-text-muted hover:border-accent hover:text-accent disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft size={14} />
            Prev
          </button>
          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="inline-flex items-center gap-1 border border-border px-3 py-1.5 text-xs text-text-muted hover:border-accent hover:text-accent disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            Next
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <MediaModal
        open={!!mediaTarget}
        media={mediaTarget?.media ?? []}
        title={mediaTarget?.title ?? ""}
        onClose={() => setMediaTarget(null)}
      />
    </div>
  );
}
