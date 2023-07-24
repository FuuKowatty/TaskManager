import { AxiosError } from "axios";

export function getErrorMessage(error: unknown): ErrorMessage {
  if (error instanceof AxiosError) {
    const errorData = error.response?.data;

    if (
      typeof errorData.type !== "string" &&
      typeof errorData.message !== "string"
    ) {
      return {
        type: "unknown",
        message: "Something went wrong please try again",
      };
    }

    return errorData;
  }

  return undefined;
}
