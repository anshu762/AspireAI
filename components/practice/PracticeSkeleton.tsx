import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function PracticeSkeleton() {
  return (
    <div className="flex flex-col h-full">
      <div className="shrink-0 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-9 rounded-xl" />
            <div className="space-y-1.5">
              <Skeleton className="h-7 w-28" />
              <Skeleton className="h-3 w-52" />
            </div>
          </div>
          <Skeleton className="h-7 w-28 rounded-full" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="flex">
          <aside className="hidden lg:block w-56 shrink-0 border-r border-border/50 bg-muted/20 p-4 sm:p-5 space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-9 w-full rounded-lg" />
              <Skeleton className="h-9 w-full rounded-lg" />
              <Skeleton className="h-9 w-full rounded-lg" />
            </div>
            <div className="space-y-2 pt-2">
              <Skeleton className="h-4 w-20" />
              <div className="flex flex-wrap gap-1.5">
                <Skeleton className="h-7 w-16 rounded-full" />
                <Skeleton className="h-7 w-20 rounded-full" />
                <Skeleton className="h-7 w-14 rounded-full" />
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
            <Skeleton className="h-4 w-32 mb-4" />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="relative border-border/50 h-full flex flex-col overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-border to-border/50 opacity-50" />
                  <CardHeader className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-4 shrink-0" />
                    </div>
                    <div className="space-y-1 mt-2">
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-3/4" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-3 border-t border-border/40">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-5 w-14 rounded-full" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
