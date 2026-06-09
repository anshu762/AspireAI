import { ProfileSkeleton } from "@/components/profile/ProfileSkeleton";

export default function ProfileLoading() {
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-black">
      <ProfileSkeleton />
    </div>
  );
}
