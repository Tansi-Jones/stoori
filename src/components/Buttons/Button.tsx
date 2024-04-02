"use client";

import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="bg-white/5 border  border-white/5 rounded-lg text-sm font-light py-[6px] px-3 hover:bg-white/10 transition"
    >
      Go back
    </button>
  );
};
