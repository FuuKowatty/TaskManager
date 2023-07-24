export function Tile({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-grow flex-col items-center  justify-center gap-1 rounded-md bg-gray-200 text-center lg:h-[100px] lg:w-[160px] lg:flex-grow-0 lg:py-4">
      {children}
    </article>
  );
}
