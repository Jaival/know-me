import Image from 'next/image';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="grid items-center justify-center w-full h-screen text-white">
      <div>
        <Image src={'puff.svg'} alt='Loading' width={100} height={100}></Image>
      </div>
    </section>
  );
}
