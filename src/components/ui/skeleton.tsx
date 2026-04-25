import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("shimmer rounded-lg", className)} {...props} />;
}

export function ArticleCardSkeleton() {
  return (
    <div className="rounded-2xl border border-np-gray-200 bg-white overflow-hidden">
      <Skeleton className="h-48 rounded-none" />
      <div className="p-5 space-y-3">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex justify-between pt-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
}

export function ArticleGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ArticleCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-[100svh] bg-np-bg flex items-center">
      <div className="mx-auto max-w-7xl px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48 rounded-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-3/4" />
            <Skeleton className="h-16 w-1/2" />
            <Skeleton className="h-5 w-full max-w-lg mt-4" />
            <Skeleton className="h-5 w-3/4 max-w-lg" />
            <div className="flex gap-4 mt-6">
              <Skeleton className="h-12 w-44 rounded-lg" />
              <Skeleton className="h-12 w-36 rounded-lg" />
            </div>
          </div>
          <Skeleton className="h-64 rounded-2xl hidden lg:block" />
        </div>
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="space-y-8 py-16">
      <div className="mx-auto max-w-7xl px-6 space-y-4">
        <Skeleton className="h-10 w-64 mx-auto" />
        <Skeleton className="h-5 w-96 mx-auto" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <ArticleGridSkeleton />
      </div>
    </div>
  );
}
