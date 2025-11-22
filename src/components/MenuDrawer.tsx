"use client";

import Image from "next/image";
import Link from "next/link";

type MenuDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  // parent container (phone frame) MUST be `relative`
  return (
    <>
      {/* click blocker – optional, transparent */}
      {open && (
        <button
          onClick={onClose}
          className="absolute inset-0 z-20"
          aria-label="Close menu"
        />
      )}

      <div
        className={`absolute top-0 right-0 z-30 h-full w-[70%] bg-white shadow-2xl transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* red header area inside drawer */}
        <div className="bg-red text-white px-5 py-4.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/notification.svg"
              alt="Notifications"
              width={24}
              height={24}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">Shabnam</span>
            <Image
              src="/icons/profile-menu.svg"
              alt="Profile"
              width={28}
              height={28}
            />
          </div>
        </div>

        {/* menu items */}
        <div className="px-6 pt-8 pb-6 flex flex-col justify-between h-[calc(100%-80px)]">
          <div className="space-y-8">
            <MenuItem href="/arrival-guide" icon="/icons/guide.svg" label="Arrival Guide" />
            <MenuItem href="/shared-experiences" icon="/icons/notes-menu.svg" label="Shared Experiences" />
            <MenuItem href="/pr-progress" icon="/icons/tracker-menu.svg" label="Permanent Residency Progress" />
            <MenuItem href="/housing" icon="/icons/housing.svg" label="Find Housing" />
            <MenuItem href="/events" icon="/icons/event-menu.svg" label="Local Event" />
            <MenuItem href="/history" icon="/icons/history.svg" label="Canada History" />
            <MenuItem href="/community" icon="/icons/hub.svg" label="Community Hub" />
          </div>

          <div className="space-y-4 pb-4">
            <MenuItem href="/settings" icon="/icons/settings.svg" label="Settings" />
            <MenuItem href="/feedback" icon="/icons/feedback.svg" label="Feedback" />
            <MenuItem href="/about" icon="/icons/info.svg" label="About" />
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
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 text-[15px] text-darker hover:text-red"
    >
      <Image src={icon} alt={label} width={22} height={22} />
      <span className="font-semibold">{label}</span>
    </Link>
  );
}
