import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  try {
    return NextResponse.json(task);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}
