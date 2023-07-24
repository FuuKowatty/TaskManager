import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

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
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}
