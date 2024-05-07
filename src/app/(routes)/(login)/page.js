import Login from '@/components/Login';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="h-screen bg-[#e8b4b8] flex justify-center items-center ">
        <Login />
      </main>
    </>
  );
}
