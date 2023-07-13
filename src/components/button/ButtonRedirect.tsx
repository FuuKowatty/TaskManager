"use client";
import { useRouter } from "next/navigation";

export function RedirectButton({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/login")}
      className="rounded-md bg-blue-700 px-8 py-4 text-center font-bold text-white lg:min-w-[162px]"
    >
      {children}
    </button>
  );
}
