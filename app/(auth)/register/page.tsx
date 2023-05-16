'use client';
import MainContainer from '@/components/mainContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = {
  name: string;
  email: string;
  number: number;
  website: string;
};

export default function Register() {
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
        <div className="flex items-center justify-center w-full text-white my-14">
          <div className="max-w-xl lg:max-w-3xl ">
            <h1 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
              Register
            </h1>
            <form action="#" className="grid grid-cols-6 gap-6 mt-8">
              <div className="col-span-6">
                <label htmlFor="Username" className="block text-sm font-medium">
                  Username
                </label>

                <Input type="text" id="Username" name="username" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium"
                >
                  First Name
                </label>

                <Input type="text" id="FirstName" name="first_name" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium">
                  Last Name
                </label>

                <Input type="text" id="LastName" name="last_name" />
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium">
                  Email
                </label>

                <Input type="email" id="Email" name="email" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Password" className="block text-sm font-medium">
                  Password
                </label>

                <Input type="password" id="Password" name="password" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium"
                >
                  Password Confirmation
                </label>

                <Input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                />
              </div>

              {/* <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <Input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="w-5 h-5 bg-white border-gray-200 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                  />

                  <span className="text-sm text-gray-700 dark:text-gray-200">
                      I want to receive emails about events, product updates and
                      company announcements.
                  </span>
                </label>
              </div> */}

              {/* <div className="col-span-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    By creating an account, you agree to our
                  <a
                    href="#"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                      terms and conditions
                  </a>
                    and
                  <a
                    href="#"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                      privacy policy{' '}
                  </a>
                    .
                </p>
              </div> */}

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button variant={'secondary'}>Create an account</Button>

                <p className="mt-4 text-sm sm:mt-0">
                  Already have an account?&nbsp;
                  <Link href={'/login'} className="underline">
                    Log in
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

{
  /* <div className="col-span-6 sm:col-span-3">
  <label
    htmlFor="LastName"
    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
  >
    Last Name
  </label>

  <Input
    type="text"
    id="LastName"
    name="last_name"
    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
  />
</div> */
}
