'use client';
import MainContainer from '@/components/mainContainer';
import { UserProfile, useUser } from '@clerk/nextjs';
import Loading from './loading';

export default function UserProfilePage() {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded || !isSignedIn) {
    return (
      <MainContainer>
        <section className="text-white">
          <div className="flex flex-col items-center justify-center w-full h-screen gap-8">
            <Loading/>
          </div>
        </section>
      </MainContainer>
    )
  }
  
  return (
    <MainContainer>
      <section className="flex items-center justify-center text-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <UserProfile path="/user-profile" routing="path" />
        </div>
      </section>
    </MainContainer >
  )
}