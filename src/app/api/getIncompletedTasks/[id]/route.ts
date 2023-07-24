import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId: Number(params.id),
        isCompleted: false,
      },
    });

    if (!tasks.length) {
      return NextResponse.json({ message: "No tasks found" });
    }

    return NextResponse.json(tasks);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}
