export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="w-full max-w-sm bg-red shadow-lg overflow-hidden flex flex-col">
        {/* -------- HEADER -------- */}
        <header className="bg-red text-white px-4 pt-4 pb-3">
          {/* logo + title + menu */}
          <div className="flex items-center justify-between">
            {/* logo placeholder */}
            <div className="flex items-center gap-1">
              <image className="logo.svg"></image>
            </div>

            <h1 className="text-2xl font-semibold">Homepage</h1>

            {/* hamburger */}
            <button
              className="h-8 w-8 flex flex-col justify-center items-center gap-[3px]"
              aria-label="Menu"
            >
              <span className="w-5 h-0.5 bg-white rounded-full" />
              <span className="w-5 h-0.5 bg-white rounded-full" />
              <span className="w-5 h-0.5 bg-white rounded-full" />
            </button>
          </div>
        </header>

        {/* -------- SCROLLABLE CONTENT -------- */}
        <div className="flex-1 bg-snow px-4 pt-4 pb-2 space-y-6 overflow-y-auto">
          {/* hero / Start Your Journey */}
          <section>
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <div className="h-36 w-full bg-[url('/home-hero.png')] bg-cover bg-center" />
              {/* red overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-darker/80 via-red/70 to-red/40" />
            </div>
          </section>

          {/* Next Step */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-taupe">Next Step</h2>

            <div className="bg-white rounded-2xl shadow-sm border border-silver/40 px-4 py-3 flex items-center justify-between">
              {/* circle SIN */}
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full border-[5px] border-red flex items-center justify-center">
                  <span className="text-[10px] text-red font-semibold">
                    123 456 789
                  </span>
                </div>
                <p className="text-sm font-semibold text-taupe">
                  Social Insurance Number
                </p>
              </div>

              <a
                href="/arrival-guide"
                className="text-[11px] text-red font-semibold"
              >
                Details
              </a>
            </div>
          </section>

          {/* Latest Update */}
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-taupe">
              Latest Update
            </h2>

            <div className="bg-snow rounded-2xl shadow-sm border border-silver/60 px-4 py-3">
              <ul className="text-[11px] leading-relaxed text-taupe space-y-2 list-disc list-inside">
                <li>
                  <span className="underline">
                    Canada extends temporary measures for Palestinians in Canada
                  </span>
                  <br />
                  <span className="text-greyOlive">2025-08-01 18:48</span>
                </li>
                <li>
                  <span className="underline">
                    Canada invests in services to support economic integration
                    and fill labour market shortages
                  </span>
                  <br />
                  <span className="text-greyOlive">2025-07-23 11:02</span>
                </li>
                <li>
                  <span className="underline">
                    Canada launches measures to support those affected by 2025
                    wildfires
                  </span>
                  <br />
                  <span className="text-greyOlive">2025-07-02 11:00</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* -------- BOTTOM NAV -------- */}
        <nav className="bg-white border-t border-silver/70 px-8 py-2 flex items-center justify-between text-[11px]">
          {/* Home (active) */}
          <a
            href="/"
            className="flex flex-col items-center gap-0.5 text-red font-semibold"
          >
            <HomeIcon active />
            <span className="text-[10px]">Home</span>
          </a>

          {/* Events */}
          <a
            href="/events"
            className="flex flex-col items-center gap-0.5 text-grey-olive hover:text-red"
          >
            <CalendarIcon />
            <span className="text-[10px]">Events</span>
          </a>

          {/* PR Progress */}
          <a
            href="/pr-progress"
            className="flex flex-col items-center gap-0.5 text-grey-olive hover:text-red"
          >
            <ProgressIcon />
            <span className="text-[10px]">PR</span>
          </a>

          {/* Profile */}
          <a
            href="/profile"
            className="flex flex-col items-center gap-0.5 text-grey-olive hover:text-red"
          >
            <ProfileIcon />
            <span className="text-[10px]">Profile</span>
          </a>
        </nav>
      </div>
    </main>
  );
}
