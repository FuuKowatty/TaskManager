import { AxiosError } from "axios";

import type { ErrorMessageType } from "@/types/errorMessage";

export function getErrorMessage(error: unknown): ErrorMessageType {
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
