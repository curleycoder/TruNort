"use client";

import Image from "next/image";

type HeaderProps = {
  title: string;
  onMenuClick: () => void;
  onBack?: () => void; // optional back arrow
};

export function Header({ title, onMenuClick, onBack }: HeaderProps) {
  return (
    <header className="relative bg-white">
            <div className="px-4 pt-6 flex items-center justify-between text-[10px] opacity-90" />


      {/* TITLE + BACK + MENU */}
      <div className="relative flex items-center justify-between px-5 py-4">
        {/* BACK BUTTON */}
        {onBack ? (
        <button onClick={onBack} className="p-2">
          <Image
            src="/icons/back.svg"
            alt="Back"
            width={15}
            height={15}
          />
        </button>
      ) : (
        <div className="w-[36px]" />
      )}
        {/* TITLE */}
        <h1 className="text-2xl font-bold text-darker">{title}</h1>

        {/* MENU BUTTON */}
        <button
          onClick={onMenuClick}
          className="h-8 w-8 flex flex-col justify-center items-center gap-[5px]"
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-darker rounded-full" />
          <span className="w-6 h-0.5 bg-darker rounded-full" />
          <span className="w-6 h-0.5 bg-darker rounded-full" />
        </button>
      </div>
    </header>
  );
}
