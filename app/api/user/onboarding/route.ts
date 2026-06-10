import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function PATCH(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { goal } = await req.json();
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        onboardingCompleted: true,
        onboardingGoal: goal || null,
      },
    });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to update onboarding" }, { status: 500 });
  }
}
