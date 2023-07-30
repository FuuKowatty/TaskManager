import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import { SALT_ROUNDS } from "@/lib/constanst";
import { getPrismaError } from "@/lib/getPrismaError";
import prisma from "@/lib/prisma";
import { prismaExclude } from "@/lib/prismaExclude";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const posts = await prisma.user.findUnique({
      where: {
        id: Number(params.id),
      },
      select: prismaExclude("User", ["password"]),
    });

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id: userId } = params;
    const json = await request.json();

    const hashedPassword = json.password
      ? await bcrypt.hash(json.password, SALT_ROUNDS)
      : null;

    const data = hashedPassword ? { ...json, password: hashedPassword } : json;

    const user = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data,
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error: unknown) {
    const prismaError = getPrismaError(error);

    if (!prismaError) {
      return;
    }

    if (prismaError.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409,
      });
    }
    return new NextResponse(prismaError.message, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json("Post has been deleted");
  } catch (err) {
    return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
  }
}