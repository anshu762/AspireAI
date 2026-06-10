"use client";

import { Button } from "@/components/ui/button";
import { User, RefreshCw } from "lucide-react";

export default function ProfileError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-full flex items-center justify-center p-8 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
      <div className="text-center max-w-sm">
        <User className="h-10 w-10 mx-auto text-red-400 mb-3" />
        <h2 className="text-lg font-bold text-foreground mb-1">Failed to load profile</h2>
        <p className="text-sm text-muted-foreground mb-4">{error.message || "Something went wrong loading your profile."}</p>
        <Button onClick={reset} variant="outline" className="rounded-xl">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
