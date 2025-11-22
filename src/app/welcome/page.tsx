export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] h-[800px] bg-white shadow-xl overflow-hidden">
        {/* background image */}
        <img
          src="/welcome.png"
          alt="Person with Canadian flag"
          className="absolute bg-red inset-0 h-full w-full object-cover brightness-75"
        />

        {/* overlay content */}
        <div className="relative z-10 flex flex-col h-full px-4 pt-40 pb-8 text-center text-white">
          <h1 className="text-3xl font-bold leading-tight">
            Your Newcomer Journey
            <br />
            Starts Here
          </h1>

          <div className="mt-auto">
            <a
              href="/home"
              className="inline-block mx-auto rounded-md bg-red px-16 py-3 text-center text-base text-white drop-shadow-[1px_2px_6px_#6B150F]"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
