interface LabelProps {
  children: React.ReactNode;
  required?: boolean;
}

export function LabelText({ children, required }: LabelProps) {
  return (
    <span className="dark:text-white">
      {children}{" "}
      {required && (
        <span className="text-bold text-pink-500" aria-hidden>
          *
        </span>
      )}
    </span>
  );
}
