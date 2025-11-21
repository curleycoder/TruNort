export default function WelcomePage() {
  return (
    <div className="relative min-h-screen">
      {/* background image – put welcome.jpg in /public */}
      <img
        src="/welcome.png"
        alt="Person with Canadian flag"
        className="absolute inset-0 h-full w-full object-cover brightness-75"
      />

      {/* fake status bar time */}
      <div className="absolute top-4 left-0 right-0 flex justify-center text-xs text-white">
        19:02
      </div>

      {/* center content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 text-center text-white">
        <h1 className="text-3xl font-bold leading-tight">
          Your Newcomer Journey
          <br />
          Starts Here
        </h1>

        <a
          href="/login"
          className="mt-8 rounded-full bg-[#D52B1E] px-10 py-3 text-base font-semibold"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
