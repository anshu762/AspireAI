import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function ProfileSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 space-y-5">
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 sm:size-14 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="border-0 bg-white dark:bg-white/[0.03] shadow-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-xl" />
              <div className="space-y-1.5">
                <Skeleton className="h-5 w-12" />
                <Skeleton className="h-3 w-16" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid lg:grid-cols-[1fr_300px] gap-5">
        <div className="space-y-5">
          <Card className="border-0 bg-white dark:bg-white/[0.03] shadow-sm">
            <div className="px-5 py-3.5 border-b border-border/30">
              <Skeleton className="h-4 w-20" />
            </div>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="px-5 py-3.5 flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-lg" />
                <div className="flex-1 space-y-1.5">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-2 w-full rounded-full" />
                </div>
              </div>
            ))}
          </Card>
        </div>
        <div className="space-y-5">
          <Card className="border-0 bg-white dark:bg-white/[0.03] shadow-sm">
            <CardContent className="p-5 space-y-3">
              <Skeleton className="h-10 w-10 rounded-xl" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
