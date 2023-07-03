import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

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
    console.log(err);
    return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
  }
}
