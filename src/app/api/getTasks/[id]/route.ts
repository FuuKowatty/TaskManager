import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function DELETE(request:Request,{ params }: { params: { id: string } }) {
    try {
      const { id } = params;

      await prisma.task.delete({
        where: {
          id: Number(id),
        },
      })
  
      return NextResponse.json("Post has been deleted");
    } catch(err) {
      console.log(err)
        return NextResponse.json({ message: "DELETE Error", err }, { status: 500 }) 
     }
}