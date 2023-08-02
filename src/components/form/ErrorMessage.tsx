import { cn } from "@/lib/utils";

type ErrorMessageProps =
  | {
      touched?: boolean | undefined;
      error: string | undefined;
      isRequestError?: never;
    }
  | {
      touched?: never;
      error: string | undefined;
      isRequestError: boolean;
    };

export function ErrorMessage({
  touched,
  error,
  isRequestError,
}: ErrorMessageProps) {
  return (
    <p
      className={cn(
        "min-h-[30px]  text-red-500",
        isRequestError ? "mt-4 text-center text-xl" : "text-sm"
      )}
      role="alert"
    >
      {isRequestError && !touched && error}
      {touched && error && error}
    </p>
  );
}
