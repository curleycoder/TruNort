"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header2";
import { MenuDrawer } from "@/components/MenuDrawer";
import { markArrivalItemDone } from "@/lib/arrivalProgress";

type Props = {
  slug: string; // e.g. "sin", "msp"
  title: string; // header title
  children: ReactNode; // page content
};

export function ArrivalDetailLayout({ slug, title, children }: Props) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDone = () => {
    markArrivalItemDone(slug);
    router.push("/guide");
  };

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        <Header
          title={title}
          onMenuClick={() => setMenuOpen(true)}
          onBack={() => router.push("/guide")}
        />

        <div className="flex-1 px-6 pt-6 pb-32 overflow-y-auto">{children}</div>

        {/* DONE BUTTON above bottom area */}
        <div className="absolute bottom-16 left-0 right-0 px-6">
          <button
            type="button"
            onClick={handleDone}
            className="w-full rounded-md bg-red py-3 text-center text-base text-white drop-shadow-[1px_2px_6px_#6B150F]"
          >
            Mark as Done
          </button>
        </div>

        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}
