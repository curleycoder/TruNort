"use client";

import { ArrivalDetailLayout } from "@/components/Guide";

export default function JobSearchPage() {
  return (
    <ArrivalDetailLayout slug="job-search" title="Job Search Guide">
      <h1 className="text-lg font-semibold text-darker mb-3">
        Job Search Guide
      </h1>

      <p className="text-sm text-darker mb-3">
        Finding your first job in Canada takes time. You may start with a
        survival job while you build local experience and connections.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">
        Where to look for jobs
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Online job boards and company websites.</li>
        <li>LinkedIn and professional networking events.</li>
        <li>Community employment centres and newcomer agencies.</li>
        <li>Referrals from friends, classmates, and coworkers.</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        What you should prepare
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>A Canadian-style resume and cover letter.</li>
        <li>Updated LinkedIn profile.</li>
        <li>List of references (if you have them).</li>
        <li>Basic interview answers for common questions.</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        Tips for newcomers
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Don&apos;t be afraid to start small and move up.</li>
        <li>Volunteer or take short courses to gain Canadian experience.</li>
        <li>Keep track of your applications and follow up politely.</li>
      </ul>
    </ArrivalDetailLayout>
  );
}
