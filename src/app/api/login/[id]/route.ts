import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id);

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}
