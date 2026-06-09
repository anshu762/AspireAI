import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Bot, BookOpen, Code2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AspireAI — the platform that helps beginners learn coding and AI.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent">
            <Lightbulb className="h-6 w-6 text-white" />
          </span>
          <div>
            <h1 className="text-2xl font-bold font-heading text-foreground">AspireAI</h1>
            <p className="text-sm text-muted-foreground">Learn Coding & AI</p>
          </div>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            AspireAI is a modern learning platform that combines structured coding lessons,
            hands-on practice exercises, and an AI tutor to help beginners master programming and AI concepts.
          </p>

          <h2>Features</h2>
          <div className="grid sm:grid-cols-2 gap-4 not-prose mt-6">
            {[
              { icon: <BookOpen className="h-5 w-5" />, title: "Structured Courses", desc: "Step-by-step lessons covering Python, AI fundamentals, and more." },
              { icon: <Code2 className="h-5 w-5" />, title: "Interactive Practice", desc: "Real coding exercises with instant feedback and hints." },
              { icon: <Bot className="h-5 w-5" />, title: "AI Tutor (Astra)", desc: "24/7 AI-powered chat assistant for questions and debugging." },
              { icon: <Sparkles className="h-5 w-5" />, title: "Progress Tracking", desc: "Detailed dashboard with streaks, levels, and achievements." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-border/40 bg-white dark:bg-white/[0.02] p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary mb-3">
                  {f.icon}
                </span>
                <h3 className="text-sm font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2>Tech Stack</h2>
          <ul>
            <li><strong>Frontend:</strong> Next.js 16 (App Router), React 19, Tailwind CSS v4, shadcn/ui</li>
            <li><strong>Backend:</strong> Next.js API Routes, NextAuth v5, Prisma ORM</li>
            <li><strong>AI:</strong> Google Gemini 2.5 Flash (coding tutor, code evaluation, chat)</li>
            <li><strong>Database:</strong> PostgreSQL</li>
            <li><strong>Editor:</strong> Monaco Editor (VS Code-based code editor)</li>
          </ul>

          <h2>Get Started</h2>
          <p>
            Ready to start your learning journey? Create a free account and dive into our courses.
          </p>
        </div>

        <div className="mt-8 flex gap-3">
          <Button asChild className="rounded-xl">
            <Link href="/register">
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/learn">Browse Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
