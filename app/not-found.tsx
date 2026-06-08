import Link from "next/link";
import Nav from "@/components/Nav";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Nav />

      <main className="max-w-4xl mx-auto px-8 py-32 flex flex-col items-center text-center">
        <span className="text-[#e8502a] text-sm uppercase tracking-[0.3em] mb-4">
          404 Error
        </span>

        <h1 className="text-7xl md:text-8xl font-black">
          Not Found
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-[#e8502a] text-white rounded-sm uppercase tracking-widest text-xs hover:bg-[#ff6b45] transition-colors"
          >
            Go Home
          </Link>
        </div>

        <div className="mt-20 text-8xl font-black text-white/5 select-none">
          404
        </div>
      </main>
    </div>
  );
}