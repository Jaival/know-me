import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'GET Method Called' }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  console.log('server: User ID', data.userId);
  const id = data.userId;
  const res = await prisma.profile.findMany({
    where: {
      user_id: {
        equals: id,
      },
    },
  });

  // const customJson = JSON.stringify(res , (key, value) => {  // <------------
  //   return typeof value === 'bigint' ? value.toString() : value;   // <--- SOLUTION
  // });
  
  // const response = JSON.parse(customJson);
  return NextResponse.json({ res }, { status: 200 });
}
