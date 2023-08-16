'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function NavigationButton({
  title,
  navigateTo,
}: {
  title: string;
  navigateTo: string;
}) {
  const router = useRouter();
  return <Button onClick={() => router.push(navigateTo)}> {title} </Button>;
}
