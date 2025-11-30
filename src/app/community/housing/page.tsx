"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header2";
import { MenuDrawer } from "@/components/MenuDrawer";
import { housingListings } from "./listings";

export default function FindHousingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        {/* RED HEADER */}
        <Header
          title="Housing"
          onMenuClick={() => setMenuOpen(true)}
          onBack={() => router.push("/community")}
        />

        {/* CONTENT */}
        <div className="flex-1 px-4 pt-5 pb-6 overflow-y-auto">
          <p className="text-center text-xs text-darker mb-6">
            Find roommate(s) or spots to rent in your area.
          </p>

          {/* grid of listings */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            {housingListings.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => router.push(`/community/housing/${item.id}`)}
                className="flex flex-col text-left focus:outline-none"
              >
                <div className="w-full overflow-hidden rounded-lg shadow-sm">
                  <Image
                    src={item.image}
                    alt={`${item.type} in ${item.location}`}
                    width={160}
                    height={120}
                    className="w-full h-[120px] object-cover"
                  />
                </div>

                <div className="mt-2 text-[11px] leading-tight text-black">
                  <div>
                    <span className="font-semibold text-darker">
                      Location:{" "}
                    </span>
                    {item.location}
                  </div>
                  <div>
                    <span className="font-semibold text-darker">Type: </span>
                    {item.type}
                  </div>
                  <div>
                    <span className="font-semibold text-darker">Price: </span>
                    {item.price}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* MENU DRAWER */}
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}
