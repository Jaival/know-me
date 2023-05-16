import Footer from './footer';
import Navbar from './navbar';

export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className='p-10 bg-foreground'>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </main>
  )
}