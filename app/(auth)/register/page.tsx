'use client';
import MainContainer from '@/components/mainContainer';
import { SignUp } from '@clerk/nextjs';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';

// type FormValues = {
//   username: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   passwordConfirmation: string;
// };

export default function Register() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm<FormValues>({});

  // const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
  //   console.log(JSON.stringify(data));
  //   reset();
  // };

  return (
    <MainContainer>
      <section>
        <div className="flex items-center justify-center w-full text-white my-14">
          <div className="max-w-xl lg:max-w-3xl ">
            <h1 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
              Register
            </h1>
            <div className='flex items-center justify-center py-10'>
              <SignUp redirectUrl="/dashboard"/>
            </div>
            {/* <form
              className="grid grid-cols-6 gap-6 mt-8"
              onSubmit={handleSubmit(onSubmit)}>
              <div className="col-span-6">
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>

                <Input type="text" id="username" {...register('username')} />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium">
                  First Name
                </label>

                <Input type="text" id="firstName" {...register('firstName')} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium">
                  Last Name
                </label>

                <Input type="text" id="lastName" {...register('lastName')} />
              </div>

              <div className="col-span-6">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>

                <Input type="email" id="email" {...register('email')} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>

                <Input
                  type="password"
                  id="password"
                  {...register('password')}/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-sm font-medium">
                  Password Confirmation
                </label>

                <Input
                  type="password"
                  id="passwordConfirmation"
                  {...register('passwordConfirmation')}/>
              </div>

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
            </form> */}
          </div>
        </div>
      </section>
    </MainContainer>
  );
}