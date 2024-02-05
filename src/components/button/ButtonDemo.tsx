import { useLoginDemo } from "@/hooks/api/useLoginDemo";

export function ButtonDemo() {
  const { mutate: handleLoginDemo } = useLoginDemo();

  return (
    <button
      onClick={() => handleLoginDemo()}
      type="button"
      className="w-[150px] rounded-md bg-blue-700 px-8 py-4 text-center font-bold text-white hover:bg-blue-800 dark:bg-gray-600 dark:hover:bg-gray-700"
    >
      View Demo
    </button>
  );
}