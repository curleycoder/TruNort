"use client";

import { ArrivalDetailLayout } from "@/components/Guide";

export default function SinPage() {
  return (
    <ArrivalDetailLayout slug="sin" title="Social Insurance Number">
      <h1 className="text-lg font-semibold text-darker mb-3">
        Social Insurance Number (SIN)
      </h1>

      <p className="text-sm text-darker mb-3">
        Your Social Insurance Number (SIN) is a 9-digit number you need to work
        in Canada and access government programs and benefits. Most employers,
        schools, and banks will ask for it, so apply as soon as you arrive.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">
        Where can you apply?
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>
          <span className="font-semibold">In person</span> at a Service Canada
          Centre.
        </li>
        <li>
          <span className="font-semibold">Online</span> through the Service
          Canada website.
        </li>
        <li>
          <span className="font-semibold">By mail</span> if you cannot apply in
          person (slower).
        </li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        What documents do you need?
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Valid passport with your entry stamp.</li>
        <li>
          Study permit, work permit, visitor record, or COPR (depending on your
          status).
        </li>
        <li>Proof of address in Canada (for contact purposes).</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        Typical processing time
      </h2>
      <p className="text-sm text-darker mb-3">
        In person, you usually receive your SIN on the same day on a printed
        letter. Online or mail applications can take several weeks.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">Tips</h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Memorize your SIN and avoid carrying it on paper.</li>
        <li>
          Only share it with trusted organizations (employer, bank, school).
        </li>
        <li>
          If you suspect fraud or misuse, contact Service Canada as soon as
          possible.
        </li>
      </ul>
    </ArrivalDetailLayout>
  );
}
