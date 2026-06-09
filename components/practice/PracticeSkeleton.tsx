import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export function PracticeSkeleton() {
  return (
    <div className="flex-1 p-6 space-y-4 overflow-y-auto">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="space-y-1">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-9 w-32 rounded-lg" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="border-0 bg-white dark:bg-white/[0.03] shadow-sm p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-5 w-12 rounded-full ml-auto" />
            </div>
            <Skeleton className="h-3 w-full" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-24" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
