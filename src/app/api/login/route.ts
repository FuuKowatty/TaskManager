import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST({ json }: Request) {
  const { email, password } = await json();

  if (typeof email !== "string" && typeof password !== "string") {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { type: "email", message: "Email not found" },
        { status: 404 }
      );
    }

    if (user?.password !== password) {
      return NextResponse.json(
        { type: "password", message: "Wrong password" },
        { status: 400 }
      );
    }

    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
}
