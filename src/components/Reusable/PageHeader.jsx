"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({ rightText = "View Profile" }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between px-4 pt-2 pb-4 mt-2 border-gray-300 border-b">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1 text-pink-600 hover:underline text-sm font-medium"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      {/* Right side text */}
      <span className="text-sm font-bold text-gray-800 cursor-pointer hover:underline">
        {rightText}
      </span>
    </div>
  );
}
