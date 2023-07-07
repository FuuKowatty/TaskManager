import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const isCompleted = searchParams.get("isCompleted");
    const tasks = await prisma.task.findMany({
      where: {
        userId: Number(params.id),
        isCompleted: isCompleted ? true : false,
      },
    });
    if (!tasks) return NextResponse.json({ message: "No tasks found" });
    return NextResponse.json(tasks);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
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
