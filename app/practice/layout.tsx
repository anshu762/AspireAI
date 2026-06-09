export default function PracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
      {children}
    </div>
  );
}
