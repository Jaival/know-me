'use client';
 
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export default function Navbar() {
  const router = useRouter();
  return (
    <header aria-label="Site Header">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="md:flex md:items-center md:justify-center md:gap-12">
            <Link className="block text-xl text-slate-400 " href="/">
              Know Me
            </Link>
          </div>

          <div className="hidden pl-10 md:flex">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-base transition text-slate-400 hover:text-slate-400/75"
                    href={'/about'}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-base transition text-slate-400 hover:text-slate-400/75"
                    href={'/services'}
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-base transition text-slate-400 hover:text-slate-400/75"
                    href={'/dashboard'}
                  >
                    Dashboard
                  </Link>
                </li>

              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Button variant={'secondary'} className='px-5 py-2.5 text-sm font-medium'
                onClick={() => router.push('/login')}>
                Login
              </Button>

              <div className="hidden sm:flex">
                <Button variant={'outline'} className='text-white px-5 py-2.5 text-sm font-medium' 
                  onClick={() => router.push('/register')}>
                  Register
                </Button>
              </div>
            </div>

            <div className="block md:hidden">
              <Button
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}