"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { MenuDrawer } from "@/components/MenuDrawer";

const groups = [
  {
    slug: "language-exchange",
    title: "Language Exchange",
    subtitle: "Practice English, French",
    image: "/community/language.jpg",
  },
  {
    slug: "crafting-building",
    title: "Crafting and Building",
    subtitle: "",
    image: "/community/crafting.jpg",
  },
  {
    slug: "cooking-class",
    title: "Cooking Class",
    subtitle: "",
    image: "/community/cooking.jpg",
  },
];

export default function CommunityHubPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">

        {/* HEADER */}
        <Header title="Community Hub" onMenuClick={() => setMenuOpen(true)} />

        {/* CONTENT */}
        <div className="flex-1 px-4 pt-3 pb-3 overflow-y-auto">
          <p className="text-center text-[11px] text-darker mb-4">
            Find Your Group and Start Growing Connection
          </p>

          <div className="space-y-4 mb-10">
            {groups.map((item) => (
              <CommunityCard key={item.slug} item={item} />
            ))}
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

function CommunityCard({ item }: any) {
  return (
    <Link href={`/community/${item.slug}`} className="block">
      <div className="rounded-[8px] border border-red/20 bg-[#FFF7F7] shadow-[0_2px_4px_rgba(0,0,0,0.08)] overflow-hidden">
        
        {/* image */}
        <div className="w-full h-[160px] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            width={350}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>

        {/* text row */}
        <div className="px-4 py-2 flex justify-between items-start text-darker">
          <div>
            <div className="text-sm font-semibold">{item.title}</div>
            {item.subtitle && (
              <div className="text-[11px]">{item.subtitle}</div>
            )}
          </div>

          <span className="text-[12px] text-red font-semibold">Detail</span>
        </div>
      </div>
    </Link>
  );
}
