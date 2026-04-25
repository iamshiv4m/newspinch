import { Skeleton } from "@/components/ui/skeleton";

export default function ArticleLoading() {
  return (
    <>
      {/* Header skeleton */}
      <div className="gradient-hero py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Skeleton className="h-4 w-28 rounded bg-white/10 mb-6" />
          <div className="flex gap-2 mb-4">
            <Skeleton className="h-6 w-24 rounded-full bg-white/10" />
            <Skeleton className="h-6 w-20 rounded-full bg-white/10" />
          </div>
          <Skeleton className="h-12 w-full rounded-lg bg-white/10" />
          <Skeleton className="h-12 w-3/4 mt-2 rounded-lg bg-white/10" />
          <div className="flex gap-4 mt-6">
            <Skeleton className="h-4 w-28 rounded bg-white/10" />
            <Skeleton className="h-4 w-20 rounded bg-white/10" />
            <Skeleton className="h-4 w-20 rounded bg-white/10" />
          </div>
        </div>
      </div>

      {/* Body skeleton */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 space-y-4">
          <Skeleton className="h-24 w-full rounded-xl" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-5 w-full mt-6" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-8 w-64 mt-8" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-2/3" />
        </div>
      </div>
    </>
  );
}
