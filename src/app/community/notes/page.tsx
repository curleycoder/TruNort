"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header2";
import { MenuDrawer } from "@/components/MenuDrawer";

type Filter = "recent" | "liked" | "disliked" | "all";

const posts = [
  {
    id: 1,
    text: "I found my first job in Vancouver through a community center program...",
    avatar: "/profile1.svg",
    timeLabel: "Yesterday",
    createdAt: 1732588800000, // pretend timestamps
    likes: 18,
    dislikes: 1,
  },
  {
    id: 2,
    text: "First winter was tough, but dressing in layers helped a lot...",
    avatar: "/profile2.svg",
    timeLabel: "1 week ago",
    createdAt: 1732066800000,
    likes: 9,
    dislikes: 3,
  },
  {
    id: 3,
    text: "I finally passed my IELTS after 3 attempts through...",
    avatar: "/profile3.svg",
    timeLabel: "1 month ago",
    createdAt: 1729474800000,
    likes: 25,
    dislikes: 0,
  },
  {
    id: 4,
    text: "When I fisrt came to Canada I didn't know...",
    avatar: "/profile2.svg",
    timeLabel: "1 month ago",
    createdAt: 1729474880000,
    likes: 9,
    dislikes: 3,
  },
];

export default function SharedExperiencesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>("recent");
  const router = useRouter();

  const sortedPosts = [...posts].sort((a, b) => {
    switch (filter) {
      case "liked":
        return b.likes - a.likes;
      case "disliked":
        return b.dislikes - a.dislikes;
      case "recent":
        return b.createdAt - a.createdAt;
      case "all":
      default:
        return 0; // keep original order
    }
  });

  return (
    <main className="min-h-screen bg-white flex justify-center">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        {/* HEADER */}
        <Header
          title="Shared Experiences"
          onMenuClick={() => setMenuOpen(true)}
          onBack={() => router.push("/community")}
        />

        {/* PAGE CONTENT */}
        <div className="flex-1 px-4 pt-2 pb-10 overflow-y-auto space-y-6">
          {/* SHARE BOX */}
          <section className="p-3 px-0.5 space-y-2">
            <h2 className="text-sm text-darker">Share Your Experience</h2>

            <div className="rounded-lg border border-darker/40 overflow-hidden bg-white shadow-sm">
              <textarea
                placeholder="Write your experience..."
                className="w-full h-32 p-3 text-sm outline-none resize-none"
              />

              <div className="flex items-center justify-between border-t border-darker/30 bg-snow">
                <Image
                  src="/profile1.svg"
                  alt="user"
                  width={32}
                  height={32}
                  className="w-9 h-9 ml-2 rounded-full"
                />

                <button className="bg-red text-white text-base px-6 py-1.5 flex items-center gap-2 rounded-none">
                  Post
                  <Image
                    src="/icons/send.svg"
                    alt="send"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          </section>

          {/* FILTER BAR */}
          <section className="px-0.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-darker/70">Sort posts by</span>
              <div className="flex gap-2">
                <FilterChip
                  label="Recent"
                  active={filter === "recent"}
                  onClick={() => setFilter("recent")}
                />
                <FilterChip
                  label="Most liked"
                  active={filter === "liked"}
                  onClick={() => setFilter("liked")}
                />
                <FilterChip
                  label="Most disliked"
                  active={filter === "disliked"}
                  onClick={() => setFilter("disliked")}
                />
                <FilterChip
                  label="All"
                  active={filter === "all"}
                  onClick={() => setFilter("all")}
                />
              </div>
            </div>
          </section>

          {/* POSTS LIST */}
          <section className="space-y-6">
            {sortedPosts.map((post) => (
              <PostCard
                key={post.id}
                text={post.text}
                avatar={post.avatar}
                time={post.timeLabel}
              />
            ))}
          </section>
        </div>

        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2.5 py-1 rounded-full text-[11px] border transition-colors ${
        active
          ? "bg-red text-white border-red"
          : "bg-white text-darker border-darker/30"
      }`}
    >
      {label}
    </button>
  );
}

function PostCard({
  text,
  avatar,
  time,
}: {
  text: string;
  avatar: string;
  time: string;
}) {
  return (
    <div className="border border-darker/40 rounded-lg px-3 pt-2 pb-1 bg-white shadow-sm">
      <p className="text-sm text-darker leading-snug mb-2">{text}</p>

      <div className="border-t border-darker/30 flex items-center justify-between pt-1.5">
        {/* icons */}
        <div className="flex items-center gap-4 text-grey-olive text-xl">
          <Image
            src="/icons/like.svg"
            alt="like"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer"
          />
          <Image
            src="/icons/dislike.svg"
            alt="dislike"
            width={24}
            height={24}
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        {/* time + avatar */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-light text-darker">{time}</span>
          <Image
            src={avatar}
            alt="avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
