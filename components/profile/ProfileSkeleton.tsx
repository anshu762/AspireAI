import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function ProfileSkeleton() {
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 sm:size-14 rounded-full ring-2 ring-white dark:ring-gray-900" />
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-40 sm:h-7 sm:w-48" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
              <Skeleton className="h-4 w-56 sm:h-5 sm:w-64" />
            </div>
          </div>
          <Skeleton className="h-9 w-24 rounded-lg" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="border-0 bg-white dark:bg-white/[0.03] shadow-sm">
              <CardContent className="p-4 flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-xl shrink-0" />
                <div className="space-y-1.5">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-3 w-14" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-5">
          <div className="space-y-5">
            <Card className="border-0 bg-white dark:bg-white/[0.03] shadow-sm">
              <div className="px-5 py-3.5 border-b border-border/30 flex items-center gap-2.5">
                <Skeleton className="h-7 w-7 rounded-lg" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="divide-y divide-border/20">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="px-5 py-3.5 flex items-center gap-3">
                    <Skeleton className="h-8 w-8 rounded-lg shrink-0" />
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-36" />
                        <Skeleton className="h-3 w-10 shrink-0 ml-2" />
                      </div>
                      <Skeleton className="h-2 w-full rounded-full" />
                    </div>
                    <Skeleton className="h-7 w-7 rounded-lg shrink-0" />
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-5">
              <Card className="border-0 bg-white dark:bg-white/[0.03] shadow-sm">
                <div className="px-5 py-3.5 border-b border-border/30 flex items-center gap-2">
                  <Skeleton className="h-7 w-7 rounded-lg" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="divide-y divide-border/20">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="px-5 py-3 flex items-center gap-3">
                      <Skeleton className="h-7 w-7 rounded-lg shrink-0" />
                      <div className="flex-1 min-w-0 space-y-1">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-20" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="border-0 bg-white dark:bg-white/[0.03] shadow-sm">
                <div className="px-5 py-3.5 border-b border-border/30 flex items-center gap-2">
                  <Skeleton className="h-7 w-7 rounded-lg" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="p-5 space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-14" />
                      </div>
                      <Skeleton className="h-2 w-full rounded-full" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-5">
            <Card className="border-0 shadow-sm overflow-hidden relative bg-gradient-to-br from-brand-primary/[0.03] via-white to-brand-accent/[0.03] dark:from-brand-primary/[0.05] dark:via-white/[0.02] dark:to-brand-accent/[0.05]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent" />
              <CardContent className="p-5 relative space-y-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-xl" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex gap-2.5 pt-1">
                  <Skeleton className="h-9 flex-1 rounded-lg" />
                  <Skeleton className="h-9 flex-1 rounded-lg" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white dark:bg-white/[0.03] shadow-sm">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2.5 mb-1">
                  <Skeleton className="h-7 w-7 rounded-lg" />
                  <Skeleton className="h-4 w-24" />
                </div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between py-1">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-14" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
