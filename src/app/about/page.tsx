"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header2";
import { MenuDrawer } from "@/components/MenuDrawer";

export default function AboutPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        <Header
          title="About TruNort"
          onMenuClick={() => setMenuOpen(true)}
          onBack={() => router.push("/community")}
        />

        {/* CONTENT */}
        <div className="flex-1 px-6 pt-1 pb-24 overflow-y-auto space-y-4">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/logo.svg"
              alt="TruNort Logo"
              width={80}
              height={80}
              className="opacity-90"
            />
            <h1 className="text-lg font-semibold text-darker">TruNort</h1>
          </div>

          <p className="text-sm text-darker leading-relaxed">
            TruNort is designed to support newcomers arriving in Canada by
            giving them clear, step-by-step guidance, resources, and community
            connections. Whether you’re looking for housing, career pathways,
            local events, or essential services like SIN and MSP, TruNort helps
            you navigate your first months and build your future with
            confidence.
          </p>

          <h2 className="text-base font-semibold text-darker mt-4">
            Our Mission
          </h2>
          <p className="text-sm text-darker leading-relaxed">
            To make the settlement process easier, clearer, and more supportive—
            helping newcomers feel informed, connected, and empowered.
          </p>

          <h2 className="text-base font-semibold text-darker mt-4">
            What We Offer
          </h2>

          <ul className="list-disc pl-6 text-sm text-darker leading-relaxed space-y-1">
            <li>Arrival Guide (SIN, MSP, banking, phone plans)</li>
            <li>PR pathway explanations</li>
            <li>Local events and community groups</li>
            <li>Shared experiences from other newcomers</li>
            <li>Career simulations and job guidance</li>
            <li>Housing search support</li>
          </ul>

          <h2 className="text-base font-semibold text-darker mt-4">
            Why We Built This
          </h2>
          <p className="text-sm text-darker leading-relaxed">
            Moving to a new country is overwhelming. TruNort gives newcomers one
            place where everything is organized, reliable, and easy to
            understand— from day one to permanent residency.
          </p>

          <p className="text-xs text-darker/70 mt-6 text-center">
            © {new Date().getFullYear()} TruNort — All rights reserved.
          </p>
        </div>

        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </main>
  );
}
