import type { Task } from "@prisma/client";
import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!task) {
      return NextResponse.json({ message: "None of task with such id" });
    }
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        isCompleted: !task.isCompleted,
        endDate: new Date(),
      },
    });

    return NextResponse.json(updatedTask);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const taskData: Task = await request.json();

    const endDateTime = `${taskData.endDate}T23:59:59Z`;

    const task = await prisma.task.update({
      where: {
        id: parseInt(id),
      },
      data: { ...taskData, endDate: endDateTime },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 });
    }
  }
}
