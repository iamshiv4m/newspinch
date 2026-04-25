import { Skeleton, ArticleGridSkeleton } from "@/components/ui/skeleton";

export default function NewsLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <div className="gradient-hero py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Skeleton className="h-12 w-72 rounded-lg bg-white/10" />
          <Skeleton className="h-5 w-96 mt-3 rounded bg-white/10" />
          <Skeleton className="h-10 w-80 mt-6 rounded-lg bg-white/10" />
        </div>
      </div>

      {/* Category bar skeleton */}
      <div className="bg-white border-b border-np-gray-200 py-3">
        <div className="mx-auto max-w-7xl px-6 flex gap-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-full shrink-0" />
          ))}
        </div>
      </div>

      {/* Articles skeleton */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Featured skeleton */}
          <Skeleton className="h-[380px] w-full rounded-2xl mb-8" />
          <ArticleGridSkeleton count={3} />
        </div>
      </div>
    </>
  );
}
