"use client";

import { ArrivalDetailLayout } from "@/components/Guide";

export default function MspPage() {
  return (
    <ArrivalDetailLayout slug="msp" title="BC Medical Services Plan (MSP)">
      <h1 className="text-lg font-semibold text-darker mb-3">
        BC Medical Services Plan (MSP)
      </h1>

      <p className="text-sm text-darker mb-3">
        MSP is the public health insurance in British Columbia. It helps cover
        medically necessary doctor visits, hospital care, and some diagnostic
        tests. Newcomers should apply as soon as they arrive, because coverage
        may have a waiting period.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">
        How can you apply?
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>
          <span className="font-semibold">Online</span> via the Health Insurance
          BC website (fastest).
        </li>
        <li>
          <span className="font-semibold">By mail</span> using a paper
          application form.
        </li>
        <li>
          At some <span className="font-semibold">Service BC</span> locations or
          settlement agencies that can help you fill the form.
        </li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        What information do you need?
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Full name, date of birth, and contact information.</li>
        <li>Immigration document number (study permit, work permit, COPR).</li>
        <li>BC residential address.</li>
        <li>
          Details for your spouse and children if you are applying as a family.
        </li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">Waiting period</h2>
      <p className="text-sm text-darker mb-3">
        There can be a waiting period for MSP coverage to start. During this
        time, you may want private emergency health insurance to protect
        yourself from unexpected costs.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">
        After you are approved
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>You receive your BC Services Card (health card).</li>
        <li>Bring it to every clinic or hospital visit.</li>
        <li>Update MSP if you change your address or immigration status.</li>
      </ul>
    </ArrivalDetailLayout>
  );
}
