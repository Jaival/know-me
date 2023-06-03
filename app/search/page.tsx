import MainContainer from '@/components/mainContainer';
import { Input } from '@/components/ui/input';

export default function Dashboard() {
  return (
    <MainContainer>
      <section className="text-white">
        <div className="flex flex-col w-full max-w-screen-xl gap-8 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-32">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold">Search users</h2>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-8">
              <Input type="search" placeholder="Search user by Name" />
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}
