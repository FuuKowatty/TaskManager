import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import { SALT_ROUNDS } from "@/lib/constanst";
import prisma from "@/lib/prisma";
import { prismaExclude } from "@/lib/prismaExclude";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get("role");
    const isEmployees = role === "employee";

    if (isEmployees) {
      const employees = await prisma.user.findMany({
        where: {
          role: "employee",
        },
        select: prismaExclude("User", ["password"]),
      });
      return NextResponse.json(employees);
    }

    const users = await prisma.user.findMany({
      select: prismaExclude("User", ["password"]),
    });

    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { password, ...restData }: FormRegister = await request.json();

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        ...restData,
        password: hashedPassword,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { type: "email", message: "Email already in use" },
        { status: 409 }
      );
    }
    return new NextResponse(error.message, { status: 500 });
  }
}
