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

    if (!user) {
      return NextResponse.json(
        { type: "login", message: "User not found" },
        { status: 404 }
      );
    }

    const response = NextResponse.json(user, { status: 200 });
    response.cookies.set({
      name: "userId",
      value: user.id.toString(),
      sameSite: "strict",
    });

    return response;
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}
