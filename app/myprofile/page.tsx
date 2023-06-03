'use client'
import { Card_Type_1, } from '@/components/cards/cardsUI';
import MainContainer from '@/components/mainContainer';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function MyProfile() {
  const router = useRouter();

  return (
    <MainContainer>
      <section className="flex text-white">
        <div className="flex flex-col w-full gap-8 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-32">
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-col w-1/2 gap-4">
              <h2 className="text-3xl font-bold">My Profile</h2>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <Button variant={'ghost'} onClick={() => router.push('/myprofile/create')}>Create Profile</Button>
            </div>
          </div>
          <div className="grid justify-between grid-cols-2 gap-10">
            <Card_Type_1></Card_Type_1>
          </div>
        </div>
      </section> 
    </MainContainer>
  );
}
