"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { MenuDrawer } from "@/components/MenuDrawer";
import { getArrivalCompleted } from "@/lib/arrivalProgress";

const arrivalItems = [
  { slug: "sin", label: "Social Insurance Number" },
  { slug: "msp", label: "Medical Service Plan (MSP)" },
  { slug: "bank-account", label: "Open a Bank Account" },
  { slug: "phone-plan", label: "Buying a Phone Plan" },
  { slug: "compass-card", label: "Compass Card" },
  { slug: "pr-pathways", label: "PR Pathways" },
  { slug: "schools", label: "Schools" },
  { slug: "job-search", label: "Job Search" },
  { slug: "tax-return", label: "Tax Return" },
];

export default function ArrivalGuidePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(getArrivalCompleted());
  }, []);

  return (
    <main className="min-h-screen bg-white flex justify-center py-3">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        <Header title="Arrival Guide" onMenuClick={() => setMenuOpen(true)} />

        {/* CONTENT */}
        <div className="flex-1 px-6 pt-6 overflow-y-auto">
          <p className="text-center text-xs text-darker mb-4">
            Must done list when arrived in Canada
          </p>

          {/* timeline + cards */}
          <div className="relative  mt-2 space-y-2 mb-5">
            {arrivalItems.map((item, index) => {
              const isDone = completed.includes(item.slug);
              const isLast = index === arrivalItems.length - 1;

              return (
                <div
                  key={item.slug}
                  className="flex items-start gap-2 relative"
                >
                  {/* DOT + tiny vertical line below it */}
                  <div className="flex flex-col items-center mt-1">
                    {/* DOT */}
                    <div
                      className={`flex items-center justify-center w-7 h-7 rounded-full drop-shadow-[0_1px_2px_#6B150F55] ${
                        isDone ? "bg-darker text-white" : "bg-melon"
                      }`}
                    >
                      {isDone && (
                        <span className="text-[11px] leading-none">✓</span>
                      )}
                    </div>

                    {/* SHORT LINE under dot */}
                    {!isLast && (
                      <div className="w-[2px] h-6 bg-red/50 mt-0.5" />
                    )}
                  </div>

                  {/* CARD */}
                  <Link href={`/guide/${item.slug}`} className="flex-1 block">
                    <div className="w-full rounded-[8px] bg-snow px-5 py-3 drop-shadow-[0_1px_1px_#6B150F22]">
                      <span className="text-sm text-darker">{item.label}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <BottomNav />
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}
