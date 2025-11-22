"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { MenuDrawer } from "@/components/MenuDrawer";

export default function SharedExperiencesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex justify-center">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">

        {/* HEADER */}
        <Header title="Shared Experience" onMenuClick={() => setMenuOpen(true)} />

        {/* PAGE CONTENT */}
        <div className="flex-1 px-4 pt-2 pb-10 overflow-y-auto space-y-6">
            <section className="p-3 space-y-2 px-0.5">
            <h2 className="text-sm font-regular text-darker">
                Share Your Experience
            </h2>

            <div className="rounded-lg border border-darker overflow-hidden bg-white">
                <textarea
                placeholder="Write Your Experience..."
                className="w-full h-32 p-3 text-sm outline-none resize-none"
                />

                <div className="flex items-center justify-between border-t border-darker">
                <Image
                    src="/profile1.svg"
                    alt="user"
                    width={32}
                    height={32}
                    className="w-9 h-9"
                />

                <button className="bg-red text-white text-base px-6 py-1.5 flex items-center gap-2 rounded-none">
                    Post
                    <Image
                    src="/icons/send.svg"
                    alt="send"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    />
                </button>
                </div>
            </div>
            </section>


          {/* POSTS LIST */}
          <section className="space-y-6">
            <PostCard
              text="I found my first job in Vancouver through a community center program..."
              avatar="/profile1.svg"
              time="Yesterday"
            />

            <PostCard
              text="First winter was tough, but dressing in layers helped a lot..."
              avatar="/profile2.svg"
              time="1 week ago"
            />

            <PostCard
              text="I finally passed my IELTS after 3 attempts through..."
              avatar="/profile3.svg"
              time="1 month ago"
            />
          </section>
        </div>

        <BottomNav />
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
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
    <div className="border border-darker rounded-lg px-3 py-1 bg-white shadow-sm">
      <p className="w-full h-22 pt-2 text-base text-darker leading-snug">{text}</p>

      <div className="border-t border-darker flex items-center justify-between">
        {/* icons */}
        <div className="flex items-center gap-4 text-grey-olive text-xl">
          <Image
                src="/icons/like.svg"
                alt="user"
                width={32}
                height={32}
                className="w-6 h-6"
              />
          <Image
                src="/icons/dislike.svg"
                alt="user"
                width={32}
                height={32}
                className="w-6 h-6"
              />
          <Image
                src="/icons/comment.svg"
                alt="user"
                width={32}
                height={32}
                className="w-6 h-6"
              />
        </div>

        {/* time + avatar */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-light text-darker">{time}</span>
          <Image src={avatar} alt="avatar" width={32} height={32} className="rounded-full" />
        </div>
      </div>
    </div>
  );
}
