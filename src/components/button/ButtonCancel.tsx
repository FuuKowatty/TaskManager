export function ButtonCancel({ handleCancel }: { handleCancel: () => void }) {
  return (
    <button
      type="button"
      className="rounded-2xl border-[1px] border-gray-200 py-2 text-black dark:border-none dark:bg-gray-600 dark:text-white hover:dark:bg-gray-700"
      onClick={handleCancel}
    >
      Cancel
    </button>
  );
}
