"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header2";
import { MenuDrawer } from "@/components/MenuDrawer";

const historySections = [
  {
    slug: "indigenous",
    title: "The Beginning:",
    subtitle: "Indigenous People",
    image: "/history/indigenous.jpg",
  },
  {
    slug: "european-arrival",
    title: "European Arrival",
    subtitle: "(1500s–1700s)",
    image: "/history/european-arrival.jpg",
  },
  {
    slug: "confederation",
    title: "Confederation",
    subtitle: "The Birth of Canada (1867)",
    image: "/history/confederation.jpg",
  },
  {
    slug: "immigration-waves",
    title: "Immigration Waves",
    subtitle: "Late 1800s–1900s",
    image: "/history/immigration.png",
  },
  {
    slug: "world-wars",
    title: "World Wars",
    subtitle: "(1914–1945)",
    image: "/history/world.jpg",
  },
  {
    slug: "world-wars",
    title: "World Wars",
    subtitle: "(1914–1945)",
    image: "/history/world.jpg",
  },
];

export default function CanadaHistoryPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        {/* RED HEADER */}
        <Header
          title="Canada History"
          onMenuClick={() => setMenuOpen(true)}
          onBack={() => router.push("/community")}
        />
        {/* CONTENT */}
        <div className="flex-1 px-6 pt-6 pb-6 overflow-y-auto">
          <p className="text-center text-[11px] text-darker mb-4">
            Grow Your Knowledge about Your New Country
          </p>

          <div className="space-y-3">
            {historySections.map((item) => (
              <HistoryCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
        {/* MENU DRAWER */}
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}

type HistoryItem = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
};

function HistoryCard({ item }: { item: HistoryItem }) {
  return (
    <Link href={`/history/${item.slug}`} className="block">
      <div className="flex gap-3 rounded-[8px] border border-red/20 bg-[#FFF7F7] shadow-[0_2px_4px_rgba(0,0,0,0.08)] px-3 py-3">
        <div className="w-[90px] h-[70px] overflow-hidden rounded-[4px]">
          <Image
            src={item.image}
            alt={item.title}
            width={90}
            height={70}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="text-sm font-semibold text-darker">
              {item.title}
            </div>
            <div className="text-[11px] text-darker">{item.subtitle}</div>
          </div>

          <div className="flex justify-end mt-2">
            <span className="inline-block rounded-[6] bg-red px-5 py-[3px] text-[10px] text-white shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              Read
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
