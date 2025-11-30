"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header2";
import { MenuDrawer } from "@/components/MenuDrawer";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        {/* RED HEADER */}
        <Header
          title="Settings"
          onMenuClick={() => setMenuOpen(true)}
          onBack={() => router.push("/profile")}
        />
        {/* CONTENT */}
        <div className="flex-1 px-8 pt-10 overflow-y-auto">
          <h2 className="text-base font-semibold text-darker mb-3">General</h2>

          <div className="divide-y border-t">
            {/* Notifications Row */}
            <div className="flex items-center justify-between py-5">
              <span className="text-base text-darker">Notifications</span>

              {/* toggle switch */}
              <button className="relative w-12 h-6 bg-[#CD2A2A] rounded-full transition-all">
                <span className="absolute right-0 top-0.5 w-5 h-5 bg-white rounded-full shadow-md"></span>
              </button>
            </div>

            {/* regular rows */}
            <SettingsRow label="Language" href="/settings/language" />
            <SettingsRow label="Security" href="/settings/security" />
            <SettingsRow label="Appearance" href="/settings/appearance" />
            <SettingsRow label="FAQ" href="/settings/faq" />
            <SettingsRow label="Privacy Policy" href="/settings/privacy" />
            <SettingsRow label="Rate Us" href="/settings/rate" />
          </div>

          {/* DELETE ACCOUNT */}
          <div className="mt-6">
            <button className="text-red text-sm font-semibold">
              Delete Account
            </button>
          </div>
        </div>

        {/* MENU DRAWER */}
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}

function SettingsRow({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between py-3 text-darker"
    >
      <span className="text-base">{label}</span>

      {/* right arrow */}
      <span className="text-xl text-darker/60">›</span>
    </Link>
  );
}
