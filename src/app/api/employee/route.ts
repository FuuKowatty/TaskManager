import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const employee = await prisma.user.findFirst({
      where: {
        role: "employee",
      },
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
