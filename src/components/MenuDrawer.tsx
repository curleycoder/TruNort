"use client";

import Image from "next/image";
import Link from "next/link";

type MenuDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  // parent (phone frame) must be `relative`
  return (
    <>
      {/* DIM BACKGROUND / CLICK BLOCKER */}
      {open && (
        <button
          onClick={onClose}
          className="absolute inset-0 z-20 bg-black/10"
          aria-label="Close menu"
        />
      )}

      {/* DROPDOWN PANEL */}
      <div
        className={`absolute top-0 left-0 z-30 w-full flex justify-center transition-transform duration-300 ease-out
        ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* constrain to phone width */}
        <div className="w-full">
          {/* RED STRIP */}
          <div className="bg-red px-8 py-9 flex items-center justify-between shadow-[0_2px_6px_#6B150F44]">
            <Image
              src="/icons/notification.svg"
              alt="Notifications"
              width={24}
              height={24}
            />
            <Image
              src="/icons/global.svg"
              alt="Language"
              width={24}
              height={24}
            />
          </div>

          {/* WHITE CARD */}
          <div className="px-4 pb-4">
            <div className="mt-2 rounded-xl bg-white px-8 py-10 shadow-[0_10px_24px_#6B150F33]">
              <div className="space-y-8">
                <MenuItem
                  href="/profile"
                  icon="/icons/profile.svg"
                  label="Profile"
                  onClick={onClose}
                />
                <MenuItem
                  href="/settings"
                  icon="/icons/settings.svg"
                  label="Settings"
                  onClick={onClose}
                />
                <MenuItem
                  href="/feedback"
                  icon="/icons/feedback.svg"
                  label="Feedback"
                  onClick={onClose}
                />
                <MenuItem
                  href="/about"
                  icon="/icons/info.svg"
                  label="About"
                  onClick={onClose}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MenuItem({
  href,
  icon,
  label,
  onClick,
}: {
  href: string;
  icon: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-4 text-[15px] text-darker group"
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-full border border-darker/20 group-hover:border-red/60 transition-colors">
        <Image src={icon} alt={label} width={20} height={20} />
      </div>
      <span className="font-semibold group-hover:text-red transition-colors">
        {label}
      </span>
    </Link>
  );
}
