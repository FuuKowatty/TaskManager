import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function GET(request:Request,{ params }: { params: { id: string } }) {
  try {

    const posts = await prisma.user.findUnique({
        where: {
          id: Number(params.id),
        }
      })

    return NextResponse.json(posts);

} catch(err) {
    return NextResponse.json({message: "GET Error", err}, {status: 500})
}
}


export async function DELETE(request:Request,{ params }: { params: { id: string } }) {
    try {
      const { id } = params;

      await prisma.user.delete({
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
