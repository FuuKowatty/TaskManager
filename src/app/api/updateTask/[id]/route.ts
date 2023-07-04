import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const isCompleted = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!isCompleted) {
      return NextResponse.json({ message: "None of task with such id" });
    }
    const posts = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        isCompleted: !isCompleted.isCompleted,
      },
    });

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}
