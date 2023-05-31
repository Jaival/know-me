import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    // res.status(200).json({ message: 'GET Method Called' });
    return NextResponse.json({ message: 'GET Method Called' }, { status: 200 });
  } else {
    // 404
    return NextResponse.json({ error: 'Something Went Wrong' }, { status: 404 });
  }
}

export async function POST(req: NextRequest) {
  const { user } = await req.json();
  console.log('body', user);
  await prisma.user.create({
    data: user,
  });
  return NextResponse.json({ message: 'Created' }, { status: 200 });
  // } else {
  //   // 404
  //   return NextResponse.json({ error: 'Something Went Wrong' }, { status: 404 });
  // }
}