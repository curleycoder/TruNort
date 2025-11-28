"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export function BottomNav() {
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white pt-2 pb-4 shadow-[0_-2px_6px_#6B150F22] z-50">
      <div className="flex items-center justify-around px-4">
        {/* HOME */}
        <a href="/home" className="flex flex-col items-center">
          <Image
            src={isActive("/home") ? "/icons/home-red.svg" : "/icons/home.svg"}
            alt="Home"
            width={26}
            height={26}
            className="mb-1"
          />
          {isActive("/home") && (
            <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
          )}
        </a>

        {/* TRACKER */}
        <a href="/pr" className="flex flex-col items-center">
          <Image
            src={
              isActive("/pr") ? "/icons/tracker-red.svg" : "/icons/tracker.svg"
            }
            alt="Tracker"
            width={26}
            height={26}
            className="mb-1"
          />
          {isActive("/pr") && (
            <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
          )}
        </a>

        {/* GUIDE */}
        <a href="/guide" className="flex flex-col items-center">
          <Image
            src={
              isActive("/guide") ? "/icons/guide-red.svg" : "/icons/guide.svg"
            }
            alt="Guide"
            width={26}
            height={26}
            className="mb-1"
          />
          {isActive("/guide") && (
            <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
          )}
        </a>

        {/* COMMUNITY */}
        <a href="/community" className="flex flex-col items-center">
          <Image
            src={
              isActive("/community") ? "/icons/hub-red.svg" : "/icons/hub.svg"
            }
            alt="Community"
            width={26}
            height={26}
            className="mb-1"
          />
          {isActive("/community") && (
            <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
          )}
        </a>
      </div>
    </nav>
  );
}
