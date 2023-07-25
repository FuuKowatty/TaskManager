import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { prismaExclude } from "@/lib/prismaExclude";

export async function GET() {
  try {
    const employee = await prisma.user.findFirst({
      where: {
        role: "employee",
      },
      select: prismaExclude("User", ["password"]),
      orderBy: {
        tasks: {
          _count: "desc",
        },
      },
    });

    return NextResponse.json(employee);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}
