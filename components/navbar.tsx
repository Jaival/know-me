import NavigationButton from '@/components/custom/navigationButton';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="flex gap-4">
        <div className="md:flex md:items-center md:justify-center md:gap-12">
          <Link className="block text-xl" href="/">
            Know Me
          </Link>
        </div>
        <div className="flex flex-row px-14">
          <ul className="flex flex-row gap-4">
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/services'}>Services</Link>
            </li>
            <li>
              <Link href={'/contactus'}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <NavigationButton
            title="Sign In/Sign Up"
            navigateTo="/login"
          ></NavigationButton>
        </div>
      </div>
    </div>
  );
}
