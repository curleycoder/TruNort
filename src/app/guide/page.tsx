"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { MenuDrawer } from "@/components/MenuDrawer";

const arrivalItems = [
    { label: "Social Insurance Number", href: "/arrival-guide/sin" },
    { label: "Medical Service Plan (MSP)", href: "/arrival-guide/msp" },
    { label: "Open a Bank Account", href: "/arrival-guide/bank-account" },
    { label: "Buying a Phone Plan", href: "/arrival-guide/phone-plan" },
    { label: "Compass Card", href: "/arrival-guide/compass-card" },
    { label: "Perminent Residency Pathways", href: "/arrival-guide/pr-pathways" },
    { label: "Schools", href: "/arrival-guide/schools" },
    { label: "Job Search Guide", href: "/arrival-guide/job-search" },
    { label: "Community Event", href: "/arrival-guide/community" },
    { label: "Meetup Hub", href: "/arrival-guide/community" },

];

export default function ArrivalGuidePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        {/* HEADER – use your red version here if you have variants */}
        <Header title="Arrival Guide" onMenuClick={() => setMenuOpen(true)} />

        {/* CONTENT */}
        <div className="flex-1 px-6 pt-6 pb-3 overflow-y-auto">
          {/* subtitle */}
          <p className="text-center text-xs text-darker mb-4">
            Must done list when arrived in Canada
          </p>

          <div className="space-y-3">
            {arrivalItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block"
              >
                <div className="w-full rounded-[8px] bg-snow px-4 py-3 drop-shadow-[0_1px_1px_#6B150F]">
                  <span className="text-sm text-darker">
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM NAV */}
        <BottomNav />

        {/* SLIDE-IN MENU DRAWER */}
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}
