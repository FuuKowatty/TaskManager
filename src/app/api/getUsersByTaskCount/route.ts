import { NextResponse } from "next/server";

import { getPrismaError } from "@/lib/getPrismaError";
import prisma from "@/lib/prisma";

import type { UserWithCompletedTasks } from "@/types/users";

export async function GET() {
  try {
    const usersWithCompletedTasks = await prisma.user.findMany({
      where: {
        role: "employee",
      },
      select: {
        id: true,
        name: true,
        surname: true,
        tasks: {
          where: {
            isCompleted: true,
          },
        },
      },
    });

    const formattedUsers: UserWithCompletedTasks[] = usersWithCompletedTasks
      .map((user) => ({
        id: user.id,
        name: user.name,
        surname: user.surname,
        numberOfCompletedTasks: user.tasks.length,
      }))
      .sort(
        (a: UserWithCompletedTasks, b: UserWithCompletedTasks) =>
          b.numberOfCompletedTasks - a.numberOfCompletedTasks
      );

    return NextResponse.json(formattedUsers);
  } catch (error: unknown) {
    const prismaError = getPrismaError(error);

    if (!prismaError) {
      return;
    }
    if (prismaError.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      });
    }

    return new NextResponse(prismaError.message, { status: 500 });
  }
}
