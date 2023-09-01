export function Tile({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-grow flex-col items-center justify-center gap-1  rounded-md bg-gray-200 p-2 text-center dark:bg-midnightBlue dark:text-white md:w-[140px] md:flex-grow-0 md:p-0 md:py-1 lg:h-[100px] lg:w-[160px]">
      {children}
    </article>
  );
}
