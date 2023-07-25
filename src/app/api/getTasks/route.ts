import { NextResponse } from "next/server";

import { getPrismaError } from "@/lib/getPrismaError";
import prisma from "@/lib/prisma";

import type { FormAddTask } from "@/types/task";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const isCompleted = searchParams.get("isCompleted");

    if (isCompleted === "true") {
      const posts = await prisma.task.findMany({
        where: {
          isCompleted: true,
        },
      });
      return NextResponse.json(posts);
    }

    const posts = await prisma.task.findMany();
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

    const task = await prisma.task.create({
      data: {
        title,
        description,
        endDate: endDateTime,
        userId: parseInt(userId),
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
