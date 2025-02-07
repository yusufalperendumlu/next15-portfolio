"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const handleReload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-red-500">Something went wrong</h1>
      <p className="text-gray-400">{error.message || "Unknown error"}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => handleReload()}
      >
        Try Again
      </button>
    </div>
  );
}
