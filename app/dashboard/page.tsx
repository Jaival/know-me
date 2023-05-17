'use client'
import MainContainer from '@/components/mainContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';

// const schema = z.object({
//   name: z.string(),
//   email: z.string(),
//   number: z.number(),
//   url: z.string().url(),
// });

type FormValues = {
  name: string,
  email: string,
  number: number,
  website: string,
}

 

export default function Dashboard() {
  const { register, handleSubmit,watch, formState: { errors }, reset } = useForm<FormValues>({
    // resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <MainContainer>
      <section className="flex text-white">
        <div className="flex flex-col w-full max-w-screen-xl gap-8 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-32">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold">Dashboard</h2>
          </div>
          <div className='flex flex-row justify-between '>
            <div className='flex flex-col w-1/2 gap-4'>            
              <p className='text-xl font-medium'>
                Profile
              </p>
              <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder='Name' {...register('name')}/>
                <Input placeholder='Email' {...register('email')}/>
                <Input placeholder='Website' {...register('website')}/>
                <Input placeholder='Contact Number' {...register('number')}/>
                <Button variant={'secondary'} type='submit'>Create</Button>
              </form>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-xl font-medium'>
                Preview
              </p>
              <div className='bg-red-400 w-44 h-44'>

              </div>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}
