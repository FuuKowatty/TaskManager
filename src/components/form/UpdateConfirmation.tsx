import { BiCheck, BiX } from "react-icons/bi";

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
        className="dark: w-[96px] bg-red-500 hover:bg-red-600"
        onClick={onCancel}
      >
        <BiX size={24} className="mr-1" />
        Cancel
      </Button>
      <Button type="submit" className="w-[96px] bg-blue-700 hover:bg-blue-800">
        <BiCheck size={24} className="mr-1" />
        Confirm
      </Button>
    </div>
  );
}
