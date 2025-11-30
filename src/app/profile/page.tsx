"use client";

import { useState } from "react";
import Image from "next/image";
import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { MenuDrawer } from "@/components/MenuDrawer";

export default function ProfilePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        {/* HEADER */}
        <Header title="Profile" onMenuClick={() => setMenuOpen(true)} />

        {/* CONTENT */}
        <div className="flex-1 pb-3 space-y-6 overflow-y-auto">
          {/* avatar + name */}
          <div className="flex bg-red pt-10 flex-col rounded-b-[40px] items-center">
            <Image
              src="/profile1.svg"
              alt="Profile avatar"
              width={100}
              height={100}
              className="rounded-full bg-white border-4 border-white shadow-md"
            />
            <p className="text-lg text-white mt-2 mb-8">Shabnam</p>
          </div>

          <section className="px-4 pt-4 bg-white divide-y">
            <ProfileRow
              icon="/profile/user.svg"
              label="My Profile"
              href="/profile/details"
            />

            {/* <ProfileRow
    icon="/profile/archive.svg"
    label="Archive"
    href="/profile/archive"
  /> */}

            <ProfileRow
              icon="/profile/save.svg"
              label="Saved Info"
              href="/profile/saved"
            />

            <ProfileRow
              icon="/icons/settings.svg"
              label="Settings"
              href="/settings"
            />
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

type ProfileRowProps = {
  icon: string;
  label: string;
  href?: string;
};

function ProfileRow({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-between w-full py-4 px-3 text-darker"
    >
      <div className="flex items-center gap-3">
        <Image
          src={icon}
          alt={`${label} icon`}
          width={22}
          height={22}
          className="opacity-90"
        />
        <span className="text-base">{label}</span>
      </div>
    </a>
  );
}
