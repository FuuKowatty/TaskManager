export function Tile({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex h-[100px] w-[160px] flex-col items-center  justify-center gap-1 rounded-md bg-gray-200 py-4 text-center">
      {children}
    </article>
  );
}
