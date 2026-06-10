"use client";

import { Button } from "@/components/ui/button";
import { Code2, RefreshCw } from "lucide-react";

export default function PracticeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-sm">
        <Code2 className="h-10 w-10 mx-auto text-red-400 mb-3" />
        <h2 className="text-lg font-bold text-foreground mb-1">Failed to load exercises</h2>
        <p className="text-sm text-muted-foreground mb-4">{error.message || "Something went wrong loading the exercises."}</p>
        <Button onClick={reset} variant="outline" className="rounded-xl">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
