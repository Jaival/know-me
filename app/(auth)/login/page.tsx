'use client';
import MainContainer from '@/components/mainContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';

type FormValues = {
  username: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({});
  
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <MainContainer>
      <section>
        <div className="flex items-center justify-center w-full my-24 text-white">
          <div className="max-w-xl lg:max-w-3xl ">
            <h1 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
              Login
            </h1>
            <form className="grid grid-cols-6 gap-6 mt-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="col-span-6">
                <label htmlFor="Username" className="block text-sm font-medium">
                  Username
                </label>

                <Input type="text" id="Username" {...register('username')} />
              </div>

              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium">
                  Password
                </label>

                <Input type="password" id="Password" {...register('password')}/>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button variant={'secondary'}>Login</Button>

                <p className="mt-4 text-sm sm:mt-0">
                  Don&apos;t have an account?&nbsp;
                  <Link href={'/register'} className="underline">
                    Register
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}