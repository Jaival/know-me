'use client';
import MainContainer from '@/components/mainContainer';
import { SignIn } from '@clerk/nextjs';

export default function Login() {
  return (
    <MainContainer>
      <section>
        <div className="flex items-center justify-center w-full my-24 text-white">
          <div className="max-w-xl lg:max-w-3xl ">
            <h1 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
              Login
            </h1>
            <div className='flex items-center justify-center py-10'>
              <SignIn redirectUrl="/dashboard"/>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}