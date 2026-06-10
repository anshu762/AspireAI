import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Code2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl font-bold font-heading text-brand-primary/20 mb-4">404</div>
        <Code2 className="h-12 w-12 mx-auto text-brand-primary/40 mb-4" />
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Lost in the code?</h1>
        <p className="text-muted-foreground mb-8">
          This page doesn&apos;t exist. Maybe it was refactored, moved, or never compiled in the first place.
        </p>
        <Button asChild className="rounded-xl px-6">
          <Link href="/">
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
