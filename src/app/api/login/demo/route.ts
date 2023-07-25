import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { prismaExclude } from "@/lib/prismaExclude";

export async function GET() {
  try {
    const user = await prisma.user.findFirst({
      where: {
        role: "admin",
      },
      select: prismaExclude("User", ["password"]),
    });

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}
