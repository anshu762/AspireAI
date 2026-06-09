"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black px-4">
      <div className="text-center max-w-md">
        <AlertTriangle className="h-12 w-12 mx-auto text-red-400 mb-4" />
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Something went wrong</h1>
        <p className="text-muted-foreground mb-2">
          An unexpected error occurred. Our team has been notified.
        </p>
        {error.digest && (
          <p className="text-xs text-muted-foreground/50 mb-6 font-mono">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex gap-3 justify-center">
          <Button onClick={reset} className="rounded-xl">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
