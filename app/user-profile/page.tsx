import MainContainer from '@/components/mainContainer';
import { UserProfile, useUser } from '@clerk/nextjs';

export default function UserProfilePage() {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
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