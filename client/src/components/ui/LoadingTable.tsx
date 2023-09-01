export function LoadingTable() {
  return (
    <div className="mt-2 w-full">
      <div className="mb-8 flex h-10 w-full justify-between">
        <div className="h-full w-32 animate-pulse bg-gray-200 dark:bg-midnightBlue"></div>
        <div className="h-full w-32 animate-pulse bg-gray-200 dark:bg-midnightBlue"></div>
      </div>
      <div className="mb-4 h-10 w-44 animate-pulse bg-gray-200 dark:bg-midnightBlue"></div>
      <div className="mb-8 h-1/2 w-full  animate-pulse bg-gray-200 dark:bg-midnightBlue lg:h-[660px]"></div>
      <div className="mx-auto flex h-10 w-full max-w-lg justify-center gap-4">
        <div className="h-full w-24 animate-pulse bg-gray-200 dark:bg-midnightBlue"></div>
        <div className="h-full w-24 animate-pulse bg-gray-200 dark:bg-midnightBlue"></div>
        <div className="h-full w-24 animate-pulse bg-gray-200 dark:bg-midnightBlue"></div>
      </div>
    </div>
  );
}
