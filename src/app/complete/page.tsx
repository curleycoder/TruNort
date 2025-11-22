"use client";

import Link from "next/link";

export default function SignupProfilePage() {
  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-snow shadow-xl flex flex-col">
        {/* ===== TOP GRADIENT HEADER ===== */}
        <div className="bg-gradient-to-b from-red to-[#6B150F] text-white pb-24">

          {/* title */}
          <div className="px-4 pt-6 pb-2">
            <p className="text-3xl text-center pt-10 font-semibold leading-tight">
              Complete Your Profile
            </p>
          </div>
        </div>

        {/* ===== WHITE FORM AREA ===== */}
        <div className="flex-1 bg-snow border border-red rounded-t-[40px] -mt-12 px-6 pt-6 pb-10 space-y-6">
          <div className="space-y-4">
            <ProfileQuestion
              label="What's your entry visa?"
              options={["None", "Express Entry", "Provincial Nominee", "Family Sponsorship", "Other"]}
            />
            <ProfileQuestion
              label="What's your current status in Canada?"
              options={["None", "Visitor", "Student", "Worker", "PR", "Citizen"]}
            />
            <ProfileQuestion
              label="Which province are you (or moving to)?"
              options={["None", "BC", "Alberta", "Ontario", "Quebec", "Other"]}
            />
            <ProfileQuestion
              label="Which city?"
              options={["None", "Vancouver", "Toronto", "Calgary", "Montreal", "Other"]}
            />
            <ProfileQuestion
              label="What kind of community do you want?"
              options={["None", "Student-focused", "Family-oriented", "Professional network", "Newcomer support"]}
            />
            <ProfileQuestion
              label="How long are you in Canada?"
              options={["None", "< 6 months", "6–12 months", "1–3 years", "3+ years"]}
            />
          </div>

          <a
            href="/welcome"
              className="inline-block mx-auto rounded-md bg-red px-16 py-3 text-center text-base text-white drop-shadow-[1px_2px_6px_#6B150F]"
          >
            SAVE YOUR INFO
          </a>

          {/* FOOTER TEXT */}
          <p className="mt-4 text-[10px] text-darker text-center px-2 leading-snug">
            Please make sure your information is accurate so we can personalize your experience and
            connect you with the right opportunities.
          </p>
        </div>
      </div>
    </main>
  );
}

function ProfileQuestion({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-darker p-2">{label}</label>
      <div className="relative">
        <select
          className="w-full appearance-none rounded-md bg-white drop-shadow-[0_3px_5px_#6B150F22] px-4 py-2.5 text-xs text-darker shadow-[0_1px_2px_#6B150F22] focus:outline-none focus:ring-2 focus:ring-red"
          defaultValue={options[0]}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        {/* chevron */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-darker text-xs">
          ▼
        </span>
      </div>
    </div>
  );
}
