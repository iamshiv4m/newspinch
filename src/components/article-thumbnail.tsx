import Image from "next/image";
import { cn } from "@/lib/utils";

interface ArticleThumbnailProps {
  image?: string | null;
  alt?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
}

const sizeClasses = {
  sm: "h-40",
  md: "h-48",
  lg: "h-52",
  hero: "h-64 md:h-auto min-h-[250px]",
};

export function ArticleThumbnail({
  image,
  alt = "Article thumbnail",
  className,
  size = "md",
}: ArticleThumbnailProps) {
  if (image) {
    return (
      <div className={cn("relative overflow-hidden bg-np-gray-100", sizeClasses[size], className)}>
        <Image src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br from-np-blue/[0.03] to-np-blue/[0.08] overflow-hidden",
        sizeClasses[size],
        className,
      )}
    >
      <Image
        src="/images/logo.png"
        alt="News Pinch"
        width={size === "hero" ? 100 : size === "lg" ? 72 : 56}
        height={size === "hero" ? 96 : size === "lg" ? 69 : 54}
        className={cn(
          "opacity-[0.12] grayscale select-none transition-all duration-500 group-hover:opacity-[0.2] group-hover:scale-110",
          size === "hero" ? "h-24 w-auto" : size === "lg" ? "h-16 w-auto" : "h-12 w-auto",
        )}
        draggable={false}
      />
    </div>
  );
}
