export function ButtonCancel({ handleCancel }: { handleCancel: () => void }) {
  return (
    <button
      type="button"
      className="rounded-2xl border-[1px] border-gray-200 py-2 text-black"
      onClick={handleCancel}
    >
      Cancel
    </button>
  );
}
