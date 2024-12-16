"use client";
import { useRouter } from "next/navigation";
export default function About() {
  const router = useRouter();
  console.log(router);

  return (
    <div className="min-h-screen">
      <h1>About Us</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Go to Home
      </button>
    </div>
  );
}
