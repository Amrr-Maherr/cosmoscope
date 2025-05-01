"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-8">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="text-gray-300 hover:text-white underline transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
