export function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1) || null;
    }
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") return u.searchParams.get("v");
      if (u.pathname.startsWith("/embed/")) return u.pathname.split("/")[2] ?? null;
    }
    return null;
  } catch {
    return null;
  }
}

function getStartSeconds(url: string): number {
  try {
    const u = new URL(url);
    const raw = u.searchParams.get("t") ?? u.searchParams.get("start");
    if (!raw) return 0;
    const seconds = parseInt(raw.replace(/s$/, ""), 10);
    return Number.isFinite(seconds) ? seconds : 0;
  } catch {
    return 0;
  }
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const id = getYouTubeId(url);
  if (!id) return null;
  const start = getStartSeconds(url);
  return `https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ""}`;
}

export function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}
