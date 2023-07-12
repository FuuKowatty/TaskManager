import bcrypt from "bcrypt";
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

    if (!user?.password) {
      return NextResponse.json(
        { type: "email", message: "Email not found" },
        { status: 404 }
      );
    }

    const response = NextResponse.json(user, { status: 200 });

    response.cookies.set({
      name: "userId",
      value: user.id.toString(),
    });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (password !== user.password) {
      if (isPasswordCorrect) {
        return response;
      }

      return NextResponse.json(
        { type: "password", message: "Wrong password" },
        { status: 400 }
      );
    }

    return response;
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
}
