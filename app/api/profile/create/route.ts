import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { profile } = await req.json();
  console.log(profile);
  await prisma.profile.create({
    data: profile,
  });
  return NextResponse.json({ message: 'Created' }, { status: 200 });
}