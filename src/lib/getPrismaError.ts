import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export function getPrismaError(error: unknown) {
  if (!(error instanceof Error)) {
    return;
  }
  if (!(error instanceof PrismaClientKnownRequestError)) {
    return;
  }

  return error;
}
