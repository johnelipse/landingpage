import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="bg-blue-600  py-1 px-4 text-center text-sm sm:text-base">
      <span className="inline-flex items-center text-white">
        <span className="mr-2 display text-yellow-300">✨</span>
        Get a{" "}
        <Link
          href="https://coding-school-typescript.vercel.app/give-away"
          className="mx-1 font-semibold underline"
        >
          Free Next.js Starter Kit
        </Link>{" "}
        and enjoy{" "}
        <span className="mx-1 font-semibold display text-yellow-300">
          50% Discount
        </span>{" "}
        on the Premium{" "}
        <Link
          href="https://coding-school-typescript.vercel.app/give-away"
          className="mx-1 display font-semibold underline"
        >
          Next.js Fullstack Course!
        </Link>
        <span className="ml-2 text-yellow-300">🚀</span>
        <Link
          href="https://coding-school-typescript.vercel.app/give-away"
          className="flex display gap-1 items-center font-semibold underline"
        >
          Learn More
          <ChevronRight className="w-4 h-4" />
        </Link>
      </span>
    </div>
  );
}
