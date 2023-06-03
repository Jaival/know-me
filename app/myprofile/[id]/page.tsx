import { Card_Type_1 } from '@/components/cards/cardsUI';
import MainContainer from '@/components/mainContainer';

export default function MyProfile({
  params,
  // searchParams,
}: {
  params: { id: string };
  // searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <MainContainer>
      <section className="flex text-white">
        <div className="flex flex-col w-full max-w-screen-xl gap-8 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-32">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold">My Profile</h2>
          </div>
          <div className='flex flex-col justify-between gap-8'>
            <div className='flex flex-col w-1/2 gap-4'>            
              <p className='text-xl font-medium'>
                {params.id}
              </p>
            </div>
            <div className='flex flex-col gap-8'>
              <Card_Type_1></Card_Type_1>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}
