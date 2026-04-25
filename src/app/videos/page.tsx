import { Metadata } from "next";
import { VideosPageClient } from "./client";

export const metadata: Metadata = {
  title: "Video Reports",
  description:
    "Watch documentaries, explainers and ground reports from the News Pinch newsroom — covering India's most important stories on camera.",
};

export default function VideosPage() {
  return <VideosPageClient />;
}
