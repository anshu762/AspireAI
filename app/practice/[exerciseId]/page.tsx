import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { PracticeExerciseClient } from "./PracticeExerciseClient";
import { ChevronLeft, Code2 } from "lucide-react";

const difficultyColors: Record<string, { bg: string; text: string; dot: string }> = {
  EASY: { bg: "bg-green-500/10", text: "text-green-600", dot: "bg-green-500" },
  MEDIUM: { bg: "bg-yellow-500/10", text: "text-yellow-600", dot: "bg-yellow-500" },
  HARD: { bg: "bg-red-500/10", text: "text-red-600", dot: "bg-red-500" },
};

export default async function PracticeExercisePage({
  params,
}: {
  params: Promise<{ exerciseId: string }>;
}) {
  const { exerciseId } = await params;
  const session = await auth();

  const exercise = await prisma.exercise.findUnique({
    where: { id: exerciseId },
    include: {
      lesson: {
        select: { id: true, title: true, course: { select: { title: true, slug: true } } },
      },
    },
  });

  if (!exercise) notFound();

  const existingProgress = session?.user?.id
    ? await prisma.exerciseProgress.findUnique({
        where: {
          userId_exerciseId: {
            userId: session.user.id,
            exerciseId,
          },
        },
      })
    : null;

  const dc = difficultyColors[exercise.difficulty] || difficultyColors.EASY;

  return (
    <div className="flex-1 flex flex-col bg-[#1A1A2E] min-h-0">
      <header className="shrink-0 h-12 bg-[#1A1A2E] border-b border-white/[0.06] flex items-center px-4 gap-3">
        <a
          href="/practice"
          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Back
        </a>
        <span className="text-white/10">|</span>
        <div className="flex items-center gap-2 min-w-0">
          <Code2 className="h-4 w-4 text-white/30 shrink-0" />
          <span className="text-sm font-medium text-white/80 truncate">
            {exercise.title}
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${dc.bg} ${dc.text}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${dc.dot}`} />
            {exercise.difficulty}
          </span>
          <span className="text-[11px] text-white/30">
            {exercise.lesson.course.title}
          </span>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <PracticeExerciseClient
          exercise={{
            id: exercise.id,
            title: exercise.title,
            description: exercise.description,
            starterCode: exercise.starterCode || "",
            hints: exercise.hints,
            difficulty: exercise.difficulty,
            lessonTitle: exercise.lesson.title,
            courseTitle: exercise.lesson.course.title,
            courseSlug: exercise.lesson.course.slug,
          }}
          existingProgress={existingProgress ? { completed: existingProgress.completed, score: existingProgress.score, code: existingProgress.code } : null}
        />
      </div>
    </div>
  );
}
