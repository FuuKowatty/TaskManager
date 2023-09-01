export function LoadingSettings() {
  return (
    <div className="flex w-full max-w-xl animate-pulse flex-col justify-start gap-12 lg:gap-20 lg:px-20">
      <div className="bg-gray-200 dark:bg-midnightBlue lg:h-[80px] lg:w-[350px]" />
      <div className="flex flex-col gap-10">
        <div className="bg-gray-200 dark:bg-midnightBlue lg:h-[68px] lg:w-[400px]" />
        <div className="bg-gray-200 dark:bg-midnightBlue lg:h-[68px] lg:w-[400px]" />
      </div>
      <div className="h-[50px] w-[420px] bg-gray-200 dark:bg-midnightBlue" />
      <div className="block lg:hidden">
        <div className="h-[40px] bg-gray-200 dark:bg-midnightBlue lg:w-[105px]" />
      </div>
    </div>
  );
}
