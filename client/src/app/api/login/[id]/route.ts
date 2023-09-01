import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { prismaExclude } from "@/lib/prismaExclude";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = Number(params.id);

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: prismaExclude("User", ["password"]),
    });
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}
