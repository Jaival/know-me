import NavigationButton from '@/components/custom/navigationButton';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="md:flex md:gap-40">
        <div className="flex items-center justify-center gap-12">
          <Link className="block text-xl" href="/">
            Know Me
          </Link>
        </div>
        <div className="flex md:justify-between md:items-center">
          <ul className="flex md:flex-row gap-8">
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
