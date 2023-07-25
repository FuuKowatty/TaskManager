import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: "admin@gmail.com",
      },
    });
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}
