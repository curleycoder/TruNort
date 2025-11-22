"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { MenuDrawer } from "@/components/MenuDrawer";

type EventItem = {
  id: number;
  title: string;
  subtitle?: string;
  date?: string;
  location?: string;
  image: string;
};

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "ARITZIA WAREHOUSE SALE 2025",
    subtitle:
      "BACK TO EVENTS CALENDAR",
      date:"AUGUST 26 - SEPTEMBER 1 (WEST BUILDING)",
    image: "/events/event1.png",
  },
  {
    id: 2,
    title: "Summer Arts Festival",
    subtitle:
      "Art activities & performances\nMacLean Park and Across the Eastside Arts District",
    date: "July 18–27, 2025",
    image: "/events/event2.png",
  },
  {
    id: 3,
    title: "The 49th Annual Vancouver Folk Music Festival",
    date: "July 17, 18, 19 | 2026",
    location: "Ḵay̓almaxw / Iy̓álmexw Jericho Beach Park",
    image: "/events/event3.png",
  },
];

export default function EventsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        {/* HEADER */}
        <Header title="Local Events" onMenuClick={() => setMenuOpen(true)} />

        {/* CONTENT */}
        <div className="flex-1 px-4 pt-4 pb-12 overflow-y-auto space-y-2">
          <p className="text-center text-sm text-darker">
            Find the Latest Local Events and Festivals
          </p>

          <section className="space-y-4">
            {EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </section>
        </div>

        {/* BOTTOM NAV */}
        <BottomNav />

        {/* SLIDE-IN MENU */}
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}

function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="bg-snow rounded-xl border border-darker/25 drop-shadow-[0_1px_2px_#6B150F] overflow-hidden">
      {/* image */}
      <div className="w-full h-[150px] p-5">
        <Image
          src={event.image}
          alt={event.title}
          width={340}
          height={150}
          className="w-full object-cover"
        />
      </div>

      {/* text */}
      <div className="px-4 py-3 space-y-3 pt-15">
        <h3 className="text-sm font-semibold text-black uppercase">
          {event.title}
        </h3>

        {event.subtitle && (
          <p className="text-xs text-black whitespace-pre-line">
            {event.subtitle}
          </p>
        )}

        {event.date && (
          <p className="text-xs text-darker mt-1">{event.date}</p>
        )}

        {event.location && (
          <p className="text-xs text-darker">{event.location}</p>
        )}
      </div>
    </article>
  );
}
