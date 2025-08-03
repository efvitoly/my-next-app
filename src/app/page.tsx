import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js!</h1>
        <p className="text-lg">
          This is your default homepage. Edit <code>app/page.tsx</code> to change this content.
        </p>
      </main>
    </>
  );
}
