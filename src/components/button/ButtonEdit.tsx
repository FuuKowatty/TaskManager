import { BiEdit } from "react-icons/bi";

export function ButtonEdit({
  openModal,
}: {
  openModal: (type: string) => void;
}) {
  return (
    <button
      className="flex items-center gap-1"
      onClick={() => openModal("edit")}
    >
      <BiEdit className="mr-2 h-4 w-4" />
      <span>Edit user</span>
    </button>
  );
}
