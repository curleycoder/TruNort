"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white px-3 py-3 drop-shadow-[0_1px_2px_#6B150F] z-50">
      <div className="flex items-center gap-6 overflow-x-auto px-6 py-1.5 no-scrollbar">
        {/* HOME */}
        <a href="/home" className="flex flex-col items-center min-w-[50px]">
          <Image
            src={isActive("/home") ? "/icons/home-red.svg" : "/icons/home.svg"}
            alt="Home"
            width={28}
            height={28}
            className="w-[30px] h-[30px]"
          />
        </a>

        {/* EVENTS */}
        <a href="/events" className="flex flex-col items-center min-w-[50px]">
          <Image
            src={
              isActive("/events") ? "/icons/event-red.svg" : "/icons/event.svg"
            }
            alt="Events"
            width={28}
            height={28}
            className="w-[28px] h-[28px]"
          />
        </a>

        {/* NOTES */}
        <a href="/notes" className="flex flex-col items-center min-w-[50px]">
          <Image
            src={
              isActive("/notes") ? "/icons/notes-red.svg" : "/icons/notes.svg"
            }
            alt="Notes"
            width={28}
            height={28}
            className="w-[28px] h-[28px]"
          />
        </a>

        {/* TRACKER */}
        <a href="/pr" className="flex flex-col items-center min-w-[50px]">
          <Image
            src={
              isActive("/pr") ? "/icons/tracker-red.svg" : "/icons/tracker.svg"
            }
            alt="Tracker"
            width={28}
            height={28}
            className="w-[28px] h-[28px]"
          />
        </a>

        {/* PROFILE */}
        <a href="/profile" className="flex flex-col items-center min-w-[50px]">
          <Image
            src={
              isActive("/profile")
                ? "/icons/profile-red.svg"
                : "/icons/profile.svg"
            }
            alt="Profile"
            width={28}
            height={28}
            className="w-[28px] h-[28px]"
          />
        </a>
      </div>
    </nav>
  );
}
