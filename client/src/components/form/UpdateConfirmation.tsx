import { BiCheck as ConfirmIcon, BiX as CancelIcon } from "react-icons/bi";

import { Button } from "@/components/ui/button";

interface Props {
  isReadOnly: boolean;
  setIsReadOnly: (isReadOnly: boolean) => void;
  onCancel: () => void;
}

export function UpdateConfirmation({
  isReadOnly,
  setIsReadOnly,
  onCancel,
}: Props) {
  if (isReadOnly) {
    return (
      <Button
        type="submit"
        onClick={() => setIsReadOnly(false)}
        className="w-[96px] bg-midnightBlue"
      >
        Update
      </Button>
    );
  }

  return (
    <div className="flex w-full gap-4">
      <Button
        type="button"
        variant={"destructive"}
        className="w-[102px] bg-red-500 hover:bg-red-600"
        onClick={onCancel}
      >
        <CancelIcon size={16} className="mr-1" />
        Cancel
      </Button>
      <Button type="submit" className="w-[102px] bg-blue-700 hover:bg-blue-800">
        <ConfirmIcon size={16} className="mr-1" />
        Confirm
      </Button>
    </div>
  );
}
