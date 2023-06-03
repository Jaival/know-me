'use client';
import { Card_Type_1 } from '@/components/cards/cardsUI';
import Loading from '@/components/loading';
import MainContainer from '@/components/mainContainer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { Prisma } from '@prisma/client';
import { Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Email must be valid.' }).optional(),
  number: z.coerce.number().safe({ message: 'Please enter a valid contact number' }).optional(),
  url: z.string().url({ message: 'Please enter a valid url' }).optional(),
  aboutMe: z.string().min(5,{ message: 'Name must be at least 5 characters.' })
});

export default function ProfileCreate() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode:'onChange',
    defaultValues: {
      name: '',
      email: '',
      url: '',
      aboutMe:''
    },
  });
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return (
      <MainContainer>
        <section className="text-white">
          <div className="flex flex-col items-center justify-center w-full h-screen gap-8">
            <Loading />
          </div>
        </section>
      </MainContainer>
    );
  }
  
  let clerkId : string;

  if(isSignedIn){
    clerkId = user.id;
  }

  async function onSubmit(values: z.infer<typeof schema>) {
    let user: Prisma.UserCreateInput
    user = {
      name:values.name,
      email:values.email,
      contact:values.number,
      aboutMe:values.aboutMe,
      url: values.url,
      clerk_id: clerkId
    }
    try {
      await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user}),
      });
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Suspense fallback={<Loading />}>
      <MainContainer>
        <section className="flex text-white">
          <div className="flex flex-col w-full gap-8 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-32">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold">Create Profile</h2>
            </div>
            <div className="flex flex-row justify-between gap-10">
              <div className="flex flex-col w-1/2 gap-4">
                <p className="text-xl font-medium">Profile</p>
                <UserDataForm form={form} onSubmit={onSubmit}/>
              </div>
              <div className="flex items-center justify-center w-1/2">
                <Card_Type_1></Card_Type_1>
              </div>
            </div>
          </div>
        </section> 
      </MainContainer>
    </Suspense> 
  );
}

function UserDataForm({form, onSubmit}: {form:any, onSubmit:Function}){
  return(
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
              This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jane@knowme.com" {...field} />
              </FormControl>
              <FormDescription>
              This is your public display email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input placeholder="0000000000" {...field} />
              </FormControl>
              <FormDescription>
              This is your public display contact number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="aboutMe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About Me</FormLabel>
              <FormControl>
                <Input placeholder="Write something about you" {...field} />
              </FormControl>
              <FormDescription>
              This will be visible to the public.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://knowme.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
              This is your public display website url.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={'outline'}>Submit</Button>
      </form>
    </Form>
  )
}