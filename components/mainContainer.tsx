import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <title>Know Me</title>
      </Head>
      <main>
        <div className='p-10 bg-foreground'>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </main>
    </html>
  )
}