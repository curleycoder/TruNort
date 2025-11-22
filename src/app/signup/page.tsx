"use client";

import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-snow shadow-xl overflow-hidden flex flex-col">
        {/* ===== TOP GRADIENT HEADER ===== */}
        <div className="bg-gradient-to-b from-red to-[#6B150F] text-white px-2 pt-8 pb-24">

          {/* title text */}
          <div className="px-4 pt-10 pb-10 space-y-1">
            <p className="text-3xl font-semibold">Hello</p>
            <p className="text-3xl font-semibold">
              Create Your Account
            </p>
          </div>
        </div>

        {/* ===== FORM AREA ===== */}
        <div className="flex-1 bg-snow border border-darker rounded-t-[40px] -mt-12 px-6 pt-16 pb-10 space-y-6">
          {/* inputs */}
          <div className="space-y-4">
            <input
              type="Name"
              placeholder="Full Name"
              className="w-full rounded-md bg-white px-4 py-3  text-xs font-light placeholder:text-darker drop-shadow-[0_3px_5px_#6B150F22] focus:outline-none focus:ring-2 focus:ring-red"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md bg-white px-4 py-3  text-xs font-light placeholder:text-darker drop-shadow-[0_3px_5px_#6B150F22] focus:outline-none focus:ring-2 focus:ring-red"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md bg-white px-4 py-3 text-xs font-light placeholder:text-darker drop-shadow-[0_3px_5px_#6B150F22] focus:outline-none focus:ring-2 focus:ring-red"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-md bg-white px-4 py-3 text-xs font-light placeholder:text-darker drop-shadow-[0_3px_5px_#6B150F22] focus:outline-none focus:ring-2 focus:ring-red"
            />
          </div>

          {/* sign in button */}
          <a
            href="/complete" // change to "/" if your main homepage is at root
              className="inline-block mx-auto rounded-md bg-red px-16 py-3 text-center text-base text-white drop-shadow-[1px_2px_6px_#6B150F]"
          >
            SIGN UP
          </a>

          {/* divider */}
          <div className="mt-10 flex items-center gap-3">
            <div className="h-px flex-1 bg-darker" />
            <span className="text-sm text-darker">
              Or Sign Up with
            </span>
            <div className="h-px flex-1 bg-darker" />
          </div>

          {/* social icons row – placeholder letters, replace with real icons if you have them */}
          <div className="flex justify-center gap-10 pt-2 text-2xl text-darker">
            <div className="flex justify-center gap-10 pt-2">
              <Image
                src="/icons/google.svg"
                alt="Google"
                width={28}
                height={28}
                className="w-8 h-8"
              />

              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={28}
                height={28}
                className="w-8 h-8"
              />

              <Image
                src="/icons/apple.svg"
                alt="Apple"
                width={28}
                height={28}
                className="w-8 h-8"
              />
            </div>

          </div>

          {/* sign up text */}
          <p className="mt-12 text-right text-xs text-darker">
            You have an account?{" "}
            <Link href="/login" className="font-semibold text-red">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
