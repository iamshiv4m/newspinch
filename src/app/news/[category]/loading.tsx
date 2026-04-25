import { Skeleton, ArticleGridSkeleton } from "@/components/ui/skeleton";

export default function CategoryLoading() {
  return (
    <>
      <div className="gradient-hero py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Skeleton className="h-4 w-20 rounded bg-white/10 mb-4" />
          <Skeleton className="h-12 w-56 rounded-lg bg-white/10" />
          <Skeleton className="h-4 w-24 mt-2 rounded bg-white/10" />
        </div>
      </div>
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <ArticleGridSkeleton count={6} />
        </div>
      </div>
    </>
  );
}
