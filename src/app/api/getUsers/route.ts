import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'




export async function GET() {
    try {

      const posts = await prisma.user.findMany()

      return NextResponse.json(posts);

  } catch(err) {
      return NextResponse.json({message: "GET Error", err}, {status: 500})
  }
}

export async function POST(request: Request, response: Response) {
  try {
     const json:FormRegister= await request.json();
     const user = await prisma.user.create({
       data: json,
     });

     return NextResponse.json(user, { status: 201 });
   } catch (error: any) {
     if (error.code === "P2002") {
       return new NextResponse("User with email already exists", {
         status: 409,
       });
    }
     return new NextResponse(error.message, { status: 500 });
   }
  }
    