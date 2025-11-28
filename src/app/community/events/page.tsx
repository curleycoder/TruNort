"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header2";
import { MenuDrawer } from "@/components/MenuDrawer";

type Tab = "hub" | "events";
type HubInterest = "all" | "language" | "hands-on" | "sports";
type City = "all" | "vancouver" | "burnaby";
type EventType = "all" | "fun" | "musical" | "shopping";

const communityGroups = [
  {
    id: 1,
    image: "/community/language.jpg",
    title: "Language Exchange",
    subtitle: "Practice English, French",
    interest: "language" as HubInterest,
    city: "vancouver" as City,
  },
  {
    id: 2,
    image: "/community/crafting.jpg",
    title: "Crafting and Building",
    subtitle: "Hands-on creative projects",
    interest: "hands-on" as HubInterest,
    city: "burnaby" as City,
  },
  {
    id: 3,
    image: "/community/cooking.jpg",
    title: "Cooking Class",
    subtitle: "Learn recipes & make friends",
    interest: "hands-on" as HubInterest,
    city: "vancouver" as City,
  },
  // example sports group if you add:
  // {
  //   id: 4,
  //   image: "/community/sports.jpg",
  //   title: "Weekend Sports",
  //   subtitle: "Casual soccer & volleyball",
  //   interest: "sports" as HubInterest,
  //   city: "burnaby" as City,
  // },
];

const localEvents = [
  {
    id: 1,
    image: "/events/event1.png",
    title: "Aritzia Warehouse Sale 2025",
    body: "Back to events calendar\nAugust 26 - September 1 (West Building)",
    type: "shopping" as EventType,
    city: "vancouver" as City,
  },
  {
    id: 2,
    image: "/events/event2.png",
    title: "Summer Arts Festival",
    body: "Art activities & performances\nMacLean Park and Eastside Arts District\nJuly 18-27, 2025",
    type: "fun" as EventType,
    city: "vancouver" as City,
  },
  {
    id: 3,
    image: "/events/event3.png",
    title: "The 49th Annual Vancouver Folk Music Festival",
    body: "July 17, 18, 19 | 2026\nJericho Beach Park",
    type: "musical" as EventType,
    city: "vancouver" as City,
  },
];

export default function CommunityEventsPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("hub");

  const title = activeTab === "hub" ? "Community Hub" : "Local Events";

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        <Header
          title={title}
          onMenuClick={() => setMenuOpen(true)}
          onBack={() => router.push("/community")}
        />

        {/* TABS */}
        <div className="bg-white">
          <div className="flex border-b border-red/30">
            <button
              type="button"
              onClick={() => setActiveTab("hub")}
              className={`flex-1 py-2 text-sm font-semibold text-center transition-colors ${
                activeTab === "hub"
                  ? "bg-red text-snow border-b-2 border-red"
                  : "text-darker/60"
              }`}
            >
              Community Hub
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("events")}
              className={`flex-1 py-2 text-sm font-semibold text-center transition-colors ${
                activeTab === "events"
                  ? "bg-red text-snow border-b-2 border-red"
                  : "text-darker/60"
              }`}
            >
              Local Events
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-6 pt-5 pb-24 overflow-y-auto">
          {activeTab === "hub" ? (
            <CommunityHubSection />
          ) : (
            <LocalEventsSection />
          )}
        </div>

        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}

/* COMMUNITY HUB TAB */
function CommunityHubSection() {
  const [interestFilter, setInterestFilter] = useState<HubInterest>("all");
  const [cityFilter, setCityFilter] = useState<City>("all");

  const filteredGroups = communityGroups.filter((group) => {
    const matchesInterest =
      interestFilter === "all" ? true : group.interest === interestFilter;
    const matchesCity = cityFilter === "all" ? true : group.city === cityFilter;
    return matchesInterest && matchesCity;
  });

  return (
    <div>
      <p className="text-center text-xs text-darker mb-4">
        Find your group and start growing connection.
      </p>

      {/* FILTERS – LABEL + DROPDOWN IN ONE ROW */}
      <div className="flex w-full items-center gap-4 mb-4 text-[11px]">
        {/* Interest block */}
        <div className="flex items-center gap-2 flex-1">
          <span className="whitespace-nowrap text-darker/80">
            Filter by interest
          </span>
          <div className="flex-1">
            <Dropdown
              value={interestFilter}
              onChange={(v) => setInterestFilter(v as HubInterest)}
              options={[
                { value: "all", label: "All" },
                { value: "language", label: "Language" },
                { value: "hands-on", label: "Hands-on" },
                { value: "sports", label: "Sports" },
              ]}
            />
          </div>
        </div>

        {/* City block */}
        <div className="flex items-center gap-2 flex-1">
          <span className="whitespace-nowrap text-darker/80">
            Filter by city
          </span>
          <div className="flex-1">
            <Dropdown
              value={cityFilter}
              onChange={(v) => setCityFilter(v as City)}
              options={[
                { value: "all", label: "All" },
                { value: "vancouver", label: "Vancouver" },
                { value: "burnaby", label: "Burnaby" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            className="rounded-lg bg-snow border border-red/25 overflow-hidden drop-shadow-[0_1px_3px_#6B150F22]"
          >
            <Image
              src={group.image}
              alt={group.title}
              width={340}
              height={160}
              className="w-full h-[150px] object-cover"
            />

            <div className="flex items-center justify-between px-4 py-3 text-[12px]">
              <div>
                <div className="font-semibold text-darker">{group.title}</div>
                <div className="text-darker/80">{group.subtitle}</div>
                <div className="text-[11px] text-darker/60 mt-1">
                  Location:{" "}
                  {group.city === "vancouver"
                    ? "Vancouver"
                    : group.city === "burnaby"
                    ? "Burnaby"
                    : group.city}
                </div>
              </div>
              <button className="text-[11px] font-semibold text-red underline">
                Detail
              </button>
            </div>
          </div>
        ))}

        {filteredGroups.length === 0 && (
          <p className="text-center text-xs text-darker/60 mt-4">
            No groups match these filters yet.
          </p>
        )}
      </div>
    </div>
  );
}

/* LOCAL EVENTS TAB */
function LocalEventsSection() {
  const [typeFilter, setTypeFilter] = useState<EventType>("all");
  const [cityFilter, setCityFilter] = useState<City>("all");

  const filteredEvents = localEvents.filter((event) => {
    const matchesType = typeFilter === "all" ? true : event.type === typeFilter;
    const matchesCity = cityFilter === "all" ? true : event.city === cityFilter;
    return matchesType && matchesCity;
  });

  return (
    <div>
      <p className="text-center text-xs text-darker mb-4">
        Find local events happening around you.
      </p>

      {/* FILTERS – LABEL + DROPDOWN IN ONE ROW */}
      <div className="flex w-full items-center gap-4 mb-4 text-[11px]">
        {/* Type block */}
        <div className="flex items-center gap-2 flex-1">
          <span className="whitespace-nowrap text-darker/80">
            Filter by type
          </span>
          <div className="flex-1">
            <Dropdown
              value={typeFilter}
              onChange={(v) => setTypeFilter(v as EventType)}
              options={[
                { value: "all", label: "All" },
                { value: "fun", label: "Fun" },
                { value: "musical", label: "Musical" },
                { value: "shopping", label: "Shopping" },
              ]}
            />
          </div>
        </div>

        {/* City block */}
        <div className="flex items-center gap-2 flex-1">
          <span className="whitespace-nowrap text-darker/80">
            Filter by city
          </span>
          <div className="flex-1">
            <Dropdown
              value={cityFilter}
              onChange={(v) => setCityFilter(v as City)}
              options={[
                { value: "all", label: "All" },
                { value: "vancouver", label: "Vancouver" },
                { value: "burnaby", label: "Burnaby" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-lg bg-snow border border-red/25 px-4 py-4 drop-shadow-[0_1px_3px_#6B150F22]"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={340}
              height={160}
              className="w-full h-[150px] object-cover mb-3"
            />
            <div className="text-[11px] leading-tight text-darker">
              <div className="font-semibold mb-1">{event.title}</div>
              {event.body.split("\n").map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
              <div className="mt-1 text-darker/70">
                Type:{" "}
                {event.type === "fun"
                  ? "Fun"
                  : event.type === "musical"
                  ? "Musical"
                  : event.type === "shopping"
                  ? "Shopping"
                  : "Other"}
              </div>
              <div className="text-darker/70">
                City:{" "}
                {event.city === "vancouver"
                  ? "Vancouver"
                  : event.city === "burnaby"
                  ? "Burnaby"
                  : event.city}
              </div>
            </div>
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <p className="text-center text-xs text-darker/60 mt-4">
            No events match these filters right now.
          </p>
        )}
      </div>
    </div>
  );
}

/* REUSABLE DROPDOWN */
function Dropdown({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-1.5 text-[12px] bg-white border border-red/40 rounded-full appearance-none focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-3 top-2 text-[10px] text-darker/60">
        ▼
      </span>
    </div>
  );
}
