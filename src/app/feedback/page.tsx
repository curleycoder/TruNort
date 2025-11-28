"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header2";
import { MenuDrawer } from "@/components/MenuDrawer";

export default function FeedbackPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        <Header
          title="Feedback"
          onMenuClick={() => setMenuOpen(true)}
          onBack={() => router.push("/community")}
        />

        {/* CONTENT */}
        <div className="flex-1 px-6 pt-6 pb-24 overflow-y-auto space-y-6">
          <p className="text-xs text-darker text-center">
            Help us improve TruNort by sharing your thoughts.
          </p>

          {/* STAR RATING */}
          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setRating(num)}
                className="text-2xl"
              >
                <span className={num <= rating ? "text-red" : "text-darker/40"}>
                  ★
                </span>
              </button>
            ))}
          </div>

          {/* TEXT FIELD */}
          <div className="rounded-lg border border-darker px-3 py-2">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-36 text-sm outline-none resize-none"
              placeholder="Write your feedback..."
            />
          </div>

          {/* OPTIONAL SCREENSHOT */}
          <div>
            <p className="text-[11px] text-darker/70 mb-1">
              Screenshot (optional)
            </p>
            <input
              type="file"
              accept="image/*"
              className="w-full text-[11px]"
            />
          </div>

          {/* SUBMIT */}
          <button className="w-full py-3 bg-red text-white rounded-md text-base drop-shadow-[1px_2px_6px_#6B150F]">
            Submit Feedback
          </button>
        </div>

        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}
