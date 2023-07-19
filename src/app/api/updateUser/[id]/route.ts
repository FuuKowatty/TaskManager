import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const userData = await request.json();

    const task = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: userData,
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
