export function FormButton({ children }: { children: React.ReactNode }) {
  return (
    <button type="submit" className="rounded-2xl bg-blue-700 py-2 text-white">
      {children}
    </button>
  );
}
