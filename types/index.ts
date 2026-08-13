export type AchievementCategory =
  | "Academics"
  | "Leadership"
  | "Swimming"
  | "Extra-Curricular";

export type MediaItem = {
  type: "image" | "video";
  url: string;
  caption: string;
};

export type Achievement = {
  id: string;
  title: string;
  category: AchievementCategory;
  year: string;
  organization: string;
  description: string;
  media?: MediaItem[];
};

export type GalleryItem = {
  id: string;
  type: "image" | "video";
  url: string;
  caption: string;
  category: string;
};
