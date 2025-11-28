"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { MenuDrawer } from "@/components/MenuDrawer";

export default function CommunityMenuPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        <Header title="Community" onMenuClick={() => setMenuOpen(true)} />

        {/* RED COMMUNITY AREA */}
        <div className="flex-1 bg-red text-white relative overflow-hidden">
          {/* ICON GRID */}
          <div className="relative z-10 px-12 pt-20">
            <div className="grid grid-cols-2 gap-x-10 gap-y-12 justify-items-center">
              {/* HOUSING */}
              <Link
                href="/community/housing"
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src="/icons/housing.svg"
                  alt="Housing"
                  width={56}
                  height={56}
                />
                <span className="text-md font-base">Housing</span>
              </Link>

              {/* SHARED EXPERIENCE */}
              <Link
                href="/community/notes"
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src="/icons/shared.svg"
                  alt="Shared Experience"
                  width={56}
                  height={56}
                />
                <span className="text-md font-base text-center">
                  Shared Experience
                </span>
              </Link>

              {/* EVENTS */}
              <Link
                href="/community/events"
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src="/icons/event.svg"
                  alt="Events"
                  width={60}
                  height={60}
                />
                <span className="text-md font-base pt-1">Events</span>
              </Link>

              {/* CANADA HISTORY */}
              <Link
                href="/community/history"
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src="/icons/history.svg"
                  alt="Canada History"
                  width={66}
                  height={66}
                />
                <span className="text-md font-base text-center">
                  Canada History
                </span>
              </Link>
            </div>
          </div>

          {/* BIG MAPLE LEAF AT BOTTOM */}
          <Image
            src="/icons/leaf.svg"
            alt="Maple leaf"
            width={420}
            height={260}
            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 pointer-events-none"
          />
        </div>

        {/* BOTTOM NAV */}
        <BottomNav />

        {/* SLIDE-IN MENU DRAWER */}
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}
