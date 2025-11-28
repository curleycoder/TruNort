"use client";

import { ArrivalDetailLayout } from "@/components/Guide";

export default function SchoolsPage() {
  return (
    <ArrivalDetailLayout slug="schools" title="Schools & Education">
      <h1 className="text-lg font-semibold text-darker mb-3">
        Schools & Education
      </h1>

      <p className="text-sm text-darker mb-3">
        If you have children, one of the first tasks is registering them for
        school. In BC, children usually attend public school in the catchment
        area where you live.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">
        Types of schools
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Elementary school – typically Kindergarten to Grade 7.</li>
        <li>Secondary school – typically Grade 8 to 12.</li>
        <li>Public, private, and faith-based options exist.</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        How to register
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Find your local school district and catchment school online.</li>
        <li>Check which documents they require before you visit.</li>
        <li>Book an appointment if the district requires it.</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        What to bring for registration
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Child&apos;s passport and immigration documents.</li>
        <li>Proof of your address (rental agreement, utility bill).</li>
        <li>
          Child&apos;s previous school records or report cards, if available.
        </li>
        <li>Immunization records, if you have them.</li>
      </ul>
    </ArrivalDetailLayout>
  );
}
