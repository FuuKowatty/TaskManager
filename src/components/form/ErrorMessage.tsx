interface ErrorMessageProps {
  touched: boolean | undefined;
  error: string | undefined;
}

export function ErrorMessage({ touched, error }: ErrorMessageProps) {
  return (
    <p className="min-h-[30px] text-sm text-red-500" role="alert">
      {touched && error && <>{error}</>}
    </p>
  );
}
