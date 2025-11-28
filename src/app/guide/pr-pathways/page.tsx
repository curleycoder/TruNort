"use client";

import { ArrivalDetailLayout } from "@/components/Guide";

export default function PrPathwaysPage() {
  return (
    <ArrivalDetailLayout slug="pr-pathways" title="PR Pathways (Overview)">
      <h1 className="text-lg font-semibold text-darker mb-3">
        Permanent Residency Pathways (Overview)
      </h1>

      <p className="text-sm text-darker mb-3">
        There are several ways to apply for Permanent Residency (PR) in Canada.
        The right pathway depends on your work experience, studies, language
        level, and where you live in Canada.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">
        Common PR options
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Express Entry (Federal Skilled Worker, CEC, FST).</li>
        <li>Provincial Nominee Programs (PNP), including BC PNP.</li>
        <li>PR through family sponsorship (spouse, partner, children).</li>
        <li>PR after certain types of Canadian work or study experience.</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        What you should track early
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Language test scores (IELTS, CELPIP, or TEF, etc.).</li>
        <li>Work experience (NOC code, full-time hours, job duties).</li>
        <li>Education credentials (and if needed, credential assessment).</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">Important note</h2>
      <p className="text-sm text-darker mb-3">
        Immigration rules change over time. Always check the official government
        website or speak to a licensed immigration professional before making
        decisions. This page is a starting point, not legal advice.
      </p>
    </ArrivalDetailLayout>
  );
}
