import { NextResponse } from "next/server";

import { getPrismaError } from "@/lib/getPrismaError";
import prisma from "@/lib/prisma";

import type { FormAddTask } from "@/types/task";

export async function GET(request: Request) {
  const getFilteredTasks = async (isCompleted: boolean) => {
    const posts = await prisma.task.findMany({
      where: {
        isCompleted,
      },
    });

    return posts;
  };

  const getTasks = async () => {
    const posts = await prisma.task.findMany();
    return posts;
  };

  try {
    const { searchParams } = new URL(request.url);
    let isCompleted;

    switch (searchParams.get("completed")) {
      case "true":
        isCompleted = true;
        break;
      case "false":
        isCompleted = false;
        break;
      default:
        isCompleted = undefined;
        break;
    }

    const posts =
      typeof isCompleted === "boolean"
        ? await getFilteredTasks(isCompleted)
        : await getTasks();
    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const {
      title,
      description,
      endDate,
      userId,
    }: FormAddTask & { userId: string } = await request.json();
    const endDateTime = `${endDate}T23:59:59Z`;

    const exsistingTask = await prisma.task.findFirst({
      where: {
        title,
        userId: parseInt(userId),
      },
    });

    if (exsistingTask) {
      return NextResponse.json(
        {
          type: "error",
          message: "That employee has already assigned the task",
        },
        { status: 409 }
      );
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        endDate: endDateTime,
        userId: Number(userId),
      },
    });

    return NextResponse.json(task, { status: 201 });
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
