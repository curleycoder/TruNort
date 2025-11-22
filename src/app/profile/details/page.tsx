"use client";

import { useState } from "react";
import Image from "next/image";
import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header2";
import { MenuDrawer } from "@/components/MenuDrawer";
import { useRouter } from "next/navigation";


export default function ProfileDetailsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
  
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        {/* HEADER (white) */}
        <Header
          title="My Profile"
          onMenuClick={() => console.log("menu")}
          onBack={() => router.back()}
        />
        {/* CONTENT */}
        <div className="flex-1 pt-5 bg-white">
          <div className="relative h-full">
            {/* RED FORM BLOCK */}
            <div className="mt-10 bg-red rounded-t-[50px] px-5 pt-32 pb-10 text-white">
              <ProfileField label="First Name" placeholder="email" />
              <ProfileField label="Last Name" placeholder="" />
              <ProfileField label="Birth Date" placeholder="DD / MM / YYYY" />
              <ProfileField label="Email" placeholder="" />
              <ProfileField label="Phone Number" placeholder="000 - 000 - 0000" />
              <ProfileField label="Gender" placeholder="" />
            </div>

            {/* AVATAR OVERLAP */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-10">
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden border-[6px] border-white shadow-md bg-white">
                  <Image
                    src="/profile1.svg"
                    alt="Profile avatar"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* small edit icon circle */}
                <button
                  type="button"
                  className="absolute bottom-1 right-1 w-7 h-7 rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/profile/edit.svg"
                    alt="Edit profile picture"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM NAV */}
        <BottomNav />

        {/* MENU DRAWER */}
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}

type FieldProps = {
  label: string;
  placeholder?: string;
};

function ProfileField({ label, placeholder }: FieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-[4px] bg-white px-3 py-2 text-sm text-darker placeholder:text-gray-400 outline-none"
      />
    </div>
  );
}
