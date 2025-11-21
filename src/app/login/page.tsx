export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-6 pb-10 px-4 bg-snow">
      {/* fake time */}
      <div className="mb-4 text-xs text-[#9b9b9b] self-center">19:02</div>

      {/* card */}
      <div className="w-full max-w-sm rounded-full bg-linears px-6 pt-10 pb-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold text-white">Hello</h1>
        <p className="mb-8 text-lg font-semibold text-white">
          Log in to your Account
        </p>

        <div className="mb-6 space-y-4">
          <input
            type="email"
            placeholder="email"
            className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm placeholder:text-[#9b9b9b] focus:outline-none focus:ring-2 focus:ring-[#c02424]"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm placeholder:text-[#9b9b9b] focus:outline-none focus:ring-2 focus:ring-[#c02424]"
          />
        </div>

        {/* when clicked, just go to home screen */}
        <a
          href="/home"
          className="block w-full rounded-full bg-[#c02424] py-3 text-center text-sm font-semibold text-white"
        >
          SIGN IN
        </a>

        <p className="mt-3 text-right text-xs text-[#9b9b9b]">
          Forgot password?
        </p>

        <div className="mt-8 text-center text-xs text-[#9b9b9b]">
          Or continue with
          {/* icons could go here */}
        </div>

        <p className="mt-8 text-center text-xs">
          You have an account?{" "}
          <a href="/signup" className="font-semibold text-[#c02424]">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
