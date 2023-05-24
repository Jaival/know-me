import Image from 'next/image';
import Link from 'next/link';

export function Card_Type_1() {
  return (
    <article
      className="flex transition bg-white rounded-lg hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25"
    >
      {/*<div className="rotate-180 p-2 [writing-mode:_vertical-lr]">*/}
      {/*  <time*/}
      {/*     dateTime="2022-10-10"*/}
      {/*     className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase dark:text-white"*/}
      {/*  >*/}
      {/*    <span>2022</span>*/}
      {/*    <span className="flex-1 w-px bg-gray-900/10 dark:bg-white/10"></span>*/}
      {/*    <span>Oct 10</span>*/}
      {/*  </time>*/}
      {/*</div>*/}

      <div className="hidden sm:block sm:basis-56">
        <Image
          alt="Guitar"
          src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="object-cover w-full h-full aspect-square"
          width={1740}
          height={224}
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div
          className="border-s border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
        >
          <div className='flex'>
            <h3 className="font-bold text-gray-900 uppercase dark:text-white">
               Name &nbsp;
            </h3>
            <h3 className="font-bold text-gray-900 uppercase dark:text-white">
               Occupation
            </h3>
          </div>

          <div className='flex'>
            <p className="text-gray-900 lowercase font-extralight dark:text-white">
               Email &nbsp;
            </p>
            <p className="text-gray-900 lowercase font-extralight dark:text-white">
               Number
            </p>
          </div>

          <p
            className="mt-2 text-gray-700 line-clamp-3 text-sm/relaxed dark:text-gray-200">
             About Me
          </p>
        </div>
      </div>
      <div className="sm:flex sm:items-end sm:justify-end">
        <a
          href="#"
          className="block px-5 py-3 text-xs font-medium text-center text-gray-900 uppercase transition bg-yellow-300 rounded-br-lg hover:bg-yellow-400">
           My Website
        </a>
      </div>
    </article>
  )
}