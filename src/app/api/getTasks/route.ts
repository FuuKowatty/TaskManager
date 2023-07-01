import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function GET() {
    try {

      const posts = await prisma.task.findMany()

      return NextResponse.json(posts);

  } catch(err) {
      return NextResponse.json({message: "GET Error", err}, {status: 500})
  }
}

export async function POST(request: Request, response: Response) {
    try {
       const json:FormAddTask = await request.json();
       const { userId } =  json
       console.log(userId, Number(userId))
       const user = await prisma.user.findUnique({
        where: {
            id: Number(userId)
        }
       })

       if(!user) {
        return new NextResponse("User not found")
       }

       const task = await prisma.task.create({
         data: {
            ...json,
            userId: user.id
          },
       });
  
       return NextResponse.json(task, { status: 201 });
     } catch (error: any) {
       if (error.code === "P2002") {
         return new NextResponse("User with email already exists", {
           status: 409,
         });
      }
       return new NextResponse(error.message, { status: 500 });
     }
}