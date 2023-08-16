import Link from 'next/link';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer aria-label="Site Footer">
      <div className="flex flex-col max-w-screen-xl px-4 py-8 mx-auto">
        <Separator className="my-4 bg-violet-400" />
        <div className="flex">
          <span>© {new Date().getFullYear() + '.'}</span>
          <span>&nbsp;Created by:&nbsp;</span>
          <span>
            <Link
              href={'https://jaivalsaija.vercel.app/'}
              className="flex flex-row items-center space-x-4 group"
            >
              <span className="relative overflow-hidden">
                <div className="absolute h-0.5 w-full bg-red-300 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                Jaival Saija.&nbsp;
              </span>
            </Link>
          </span>
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
