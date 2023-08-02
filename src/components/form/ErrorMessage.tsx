export function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="min-h-[30px] text-sm text-red-500"
      aria-invalid={children ? true : false}
    >
      {children}
    </p>
  );
}
