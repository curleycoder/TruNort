"use client";

import Image from "next/image";

type HeaderProps = {
  title: string;
  onMenuClick: () => void;
};

export function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-red text-white">
      {/* fake status bar spacing */}
      <div className="px-4 pt-2 pb-1 flex items-center justify-between text-[10px] opacity-90" />

      {/* logo + title + menu */}
      <div className="px-4 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="TruNort logo"
            width={32}
            height={32}
            className="h-10 w-auto"
          />
        </div>

        <h1 className="text-2xl font-semibold">{title}</h1>

        <button
          onClick={onMenuClick}
          className="h-8 w-8 flex flex-col justify-center items-center gap-[5px]"
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-white rounded-full" />
          <span className="w-6 h-0.5 bg-white rounded-full" />
          <span className="w-6 h-0.5 bg-white rounded-full" />
        </button>
      </div>
    </header>
  );
}
