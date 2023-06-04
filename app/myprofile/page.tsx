'use client';
import { Card_Type_1 } from '@/components/cards/cardsUI';
import MainContainer from '@/components/mainContainer';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default async function MyProfile() {
  const router = useRouter();
  const userId: String = await GetUserId();
  let response;
  if (userId) {
    const data = { userId };
    response = await fetch('http://localhost:3000/api/profile', {
      cache:'force-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
  }
  const { res } = await response?.json();
  console.log('response:', 
    // responseponse.length(),
    typeof res,
    res[0].name,
    'length',
    res.length
  );
  return (
    <MainContainer>
      <section className="flex text-white">
        <div className="flex flex-col w-full gap-8 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-32">
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-col w-1/2 gap-4">
              <h2 className="text-3xl font-bold">My Profile</h2>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <Button
                variant={'ghost'}
                onClick={() => router.push('/myprofile/create')}
              >
                Create Profile
              </Button>
            </div>
          </div>
          <div className="grid justify-between grid-cols-2 gap-10">
            {/* {userId} */}
            
            {
              res.map((value: any, index: any) => {
                return (
                  <Card_Type_1 key={index}
                    name={value.name}
                    aboutMe={value.aboutMe}
                    email={value.email}
                    number={value.contact}
                    url={value.url}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
    </MainContainer>
  );
}

async function GetUserId() {
  const { isSignedIn, user } = useUser();
  let clerkId: string;

  if (isSignedIn) {
    clerkId = user.id;
    let userData;
    let user_id;
    try {
      const response = await fetch('/api/user/id', {
        cache:'force-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clerkId }),
      });
      userData = await response.json();
      user_id = userData.data.id;
      console.log(user_id);
      return user_id;
    } catch (error) {
      console.log(error);
    }
  } else {
    return 'error';
  }
}