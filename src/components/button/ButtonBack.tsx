interface BackButtonProps {
  children: React.ReactNode;
  handleClose: () => void;
}

export function ButtonBack({ children, handleClose }: BackButtonProps) {
  return (
    <button
      type="button"
      className="rounded-2xl border-[1px] border-gray-200 py-2 text-black"
      onClick={handleClose}
    >
      {children}
    </button>
  );
}
