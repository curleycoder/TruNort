"use client";

import { useState } from "react";
import Image from "next/image";
import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { MenuDrawer } from "@/components/MenuDrawer";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        {/* HEADER */}
        <Header title="Homepage" onMenuClick={() => setMenuOpen(true)} />

        {/* CONTENT */}
        <div className="flex-1 px-4 pt-4 pb-3 space-y-6 overflow-y-auto">
          {/* hero */}
          <section>
            <div className="relative rounded-[10px] overflow-hidden shadow">
              <Image
                src="/home-hero.png"
                alt="Start your journey"
                width={340}
                height={150}
                className="h-[160px] w-full object-cover"
              />
              <div className="absolute inset-0" />
            </div>
          </section>

          {/* NEXT STEP */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-darker">Next Step</h2>

            <div className="bg-white rounded-lg drop-shadow-[0_3px_5px_#6B150F22] px-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/social.svg"
                  alt="Social insurance number icon"
                  width={80}
                  height={80}
                  className="h-20 w-auto"
                />
                <p className="text-base text-darker">Social Insurance Number</p>
              </div>

              <a
                href="/arrival-guide"
                className="text-xs text-red underline font-semibold"
              >
                Details
              </a>
            </div>
          </section>

          {/* LATEST UPDATE */}
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-darker pb-3">
              Latest Update
            </h2>

            <div className="bg-snow rounded-[10px] drop-shadow-[0_3px_5px_#6B150F22] px-4 py-3">
              <ul className="space-y-2">
                <li className="relative pl-3 text-base text-darker">
                  <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-darker" />
                  <span className="underline">
                    Canada extends temporary measures for Palestinians in Canada
                  </span>
                  <div className="text-base font-light text-grey-darker">
                    2025-08-01 18:48
                  </div>
                </li>

                <li className="relative pl-3 text-base text-darker">
                  <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-darker" />
                  <span className="underline">
                    Canada invests in services to support economic integration
                    and fill labour market shortages
                  </span>
                  <div className="text-base font-light text-grey-darker">
                    2025-07-23 11:02
                  </div>
                </li>

                <li className="relative pl-3 text-base text-darker">
                  <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-darker" />
                  <span className="underline">
                    Canada launches measures to support those affected by 2025
                    wildfires
                  </span>
                  <div className="text-base font-light text-grey-darker">
                    2025-07-02 11:00
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* BOTTOM NAV */}
        <BottomNav />

        {/* SLIDE-IN MENU DRAWER */}
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}
