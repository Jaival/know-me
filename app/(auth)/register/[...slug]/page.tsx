'use client';
import MainContainer from '@/components/mainContainer';
import { SignUp } from '@clerk/nextjs';


export default function Register() {
  return (
    <MainContainer>
      <section className='text-white'>
        <div className="flex items-center justify-center w-full my-14">
          <div className="max-w-xl lg:max-w-3xl ">
            <h1 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
              Register
            </h1>
            <div className='flex items-center justify-center py-10'>
              <SignUp redirectUrl="/dashboard"/>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}