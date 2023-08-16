import MainContainer from '@/components/mainContainer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <MainContainer>
      <section className="">
        <div className="flex items-center justify-center max-w-screen-xl px-4 py-20 mx-auto lg:py-44">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="pb-2 text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text sm:text-5xl">
              Unleash Your Digital Persona.
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:text-xl/relaxed">
              Create & Share Digital Business Cards Anywhere, Anytime.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant={'secondary'} asChild>
                <Link href={'/dashboard'}>Get Started</Link>
              </Button>

              <Button variant={'secondary'} asChild>
                <Link href={'/services'}>Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}
