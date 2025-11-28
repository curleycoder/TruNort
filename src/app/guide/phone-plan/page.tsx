"use client";

import { ArrivalDetailLayout } from "@/components/Guide";

export default function PhonePlanPage() {
  return (
    <ArrivalDetailLayout slug="phone-plan" title="Buying a Phone Plan">
      <h1 className="text-lg font-semibold text-darker mb-3">
        Buying a Phone Plan
      </h1>

      <p className="text-sm text-darker mb-3">
        A Canadian phone number is important for job applications, banking, and
        everyday life. You can choose between prepaid plans and monthly
        contracts, depending on your status and budget.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">Main options</h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>
          <span className="font-semibold">Prepaid / pay-as-you-go</span> – easy
          to start, no credit check, good for newcomers.
        </li>
        <li>
          <span className="font-semibold">Monthly plan</span> – usually more
          data and better price over time, but may require credit check or
          deposit.
        </li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">Where to buy</h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Carrier stores in malls (Rogers, Telus, Bell, Freedom, etc.).</li>
        <li>Electronics shops and big box stores.</li>
        <li>Online, with SIM card mailed to your address.</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        What you need to bring
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Passport and immigration document.</li>
        <li>Canadian address.</li>
        <li>
          For monthly plans, sometimes proof of income or a deposit if you have
          no credit history.
        </li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        Tips to save money
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Check if your employer or school has partner discounts.</li>
        <li>
          Compare data limits carefully; extra data can be very expensive.
        </li>
        <li>Use Wi-Fi at home/school for heavy data usage.</li>
      </ul>
    </ArrivalDetailLayout>
  );
}
