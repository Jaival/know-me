import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Working' }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { clerkId } = await req.json();
  const user = await prisma.user.findFirst({
    where:{
      clerk_id: clerkId
    }
  });
  return NextResponse.json({ data:user }, { status: 200 });
}