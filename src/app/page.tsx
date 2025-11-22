"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] h-[800px] bg-gradient-to-br from-red to-[#6B150F] shadow-xl overflow-hidden flex flex-col">
        
        {/* fake status bar */}
        <div className="px-4 pt-2 pb-1 flex items-center justify-between text-[10px] text-white opacity-90">
          
        </div>

        {/* LOGO — click to go to login */}
        <div className="flex-1 flex items-center justify-center">
          <button 
            onClick={() => router.push("/login")}
            className="active:scale-95 transition"
          >
            <Image
              src="/logo.svg"   // your white logo should be here
              alt="TruNort Logo"
              width={160}
              height={160}
              className="w-40 h-auto"
            />
          </button>
        </div>

        {/* FOOTER AGREEMENT */}
        <p className="text-center text-[10px] text-white/80 pb-6">
          By continuing, you agree to Forge’s<br /> 
          Terms of Use and Privacy Policy.
        </p>
      </div>
    </main>
  );
}
