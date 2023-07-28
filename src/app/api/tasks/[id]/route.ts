import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import type { Task } from "@/types/task";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const getFilteredTasks = async (isCompleted: boolean) => {
    const posts = await prisma.task.findMany({
      where: {
        isCompleted,
        userId: parseInt(id),
      },
    });

    return posts;
  };

  const getTasks = async () => {
    const posts = await prisma.task.findMany({
      where: {
        userId: parseInt(id),
      },
    });
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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { endDate, ...taskData }: Task = await request.json();

    const updatedTask = await prisma.task.update({
      where: {
        id: parseInt(id),
      },
      data: { ...taskData, endDate: new Date(endDate) },
    });

    return NextResponse.json(updatedTask, { status: 201 });
  } catch (err) {
    return;
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const updatedTask = await prisma.task.update({
      where: {
        id: parseInt(id),
      },
      data: {
        isCompleted: true,
        endDate: new Date(),
      },
    });

    return NextResponse.json(updatedTask);
  } catch {
    return;
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json("Post has been deleted");
  } catch (err) {
    return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
  }
}
