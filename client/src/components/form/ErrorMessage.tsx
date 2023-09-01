interface ErrorMessageProps {
  children: React.ReactNode;
  styled?: string;
}

export function ErrorMessage({ children, styled }: ErrorMessageProps) {
  return (
    <p
      className={`min-h-[30px] text-sm text-red-500 ${styled ?? ""}`}
      aria-invalid={children ? true : false}
    >
      {children}
    </p>
  );
}
