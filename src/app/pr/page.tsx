"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { MenuDrawer } from "@/components/MenuDrawer";

export default function PRProgressPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex justify-center py-3">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">

        {/* HEADER */}
        <Header title="PR Progress" onMenuClick={() => setMenuOpen(true)} />

        {/* PAGE CONTENT */}
        <div className="flex-1 px-4 pt-4 overflow-y-auto space-y-3">

          {/* SUBTITLE */}
          <p className="text-center pt-2 pb-2 text-darker text-sm">
            Track your progress toward permanent residency.
          </p>

          {/* CIRCLE PROGRESS */}
          <div className="flex justify-center">
            <div className="relative w-[200px] h-[200px]">
              {/* background circle */}
              <svg className="w-full h-full rotate-[-90deg]">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#D9D9D9"
                  strokeWidth="28"
                  fill="none"
                />
                {/* progress arc */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#D52B1E"
                  strokeWidth="28"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 80}
                  strokeDashoffset={2 * Math.PI * 80 * (1 - 0.786)}
                  fill="none"
                />
              </svg>

              {/* percentage text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-3xl font-bold text-red">78.6%</span>
                <span className="text-base text-grey-olive">21.4%</span>
              </div>
            </div>
          </div>

          {/* LEGEND */}
          <div className="flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-grey-olive rounded-full" />
              <span className="text-grey-darker">Remaining</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red rounded-full" />
              <span className="text-grey-darker">Complete</span>
            </div>
          </div>

          {/* PROGRESS BARS */}
          <div className="space-y-4 p-2">

            <ProgressRow label="IELTS" percent={0.55} />
            <ProgressRow label="Graduate" percent={0.50} />
            <ProgressRow label="Relevant Job" percent={0.45} />
            <ProgressRow label="French" percent={0.95} />
            <ProgressRow label="Days in Canada" percent={0.60} />

          </div>

          {/* BUTTONS */}
          <div className="flex items-center justify-between pt-4">
            <button className="bg-bittersweat text-white font-semibold px-4 py-3 rounded-md w-[48%]">
              Improve Progress
            </button>
            <button className="bg-red text-white font-semibold px-4 py-3 rounded-md w-[48%]">
              Update Details
            </button>
          </div>
        </div>
        <BottomNav />

        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}

function ProgressRow({
  label,
  percent,
}: {
  label: string;
  percent: number;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-semibold text-darker">{label}</span>

      <div className="w-full h-4 bg-grey-olive/40 rounded-full overflow-hidden">
        <div
          className="h-full bg-red rounded-full"
          style={{ width: `${percent * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
