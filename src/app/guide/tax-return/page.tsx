"use client";

import { ArrivalDetailLayout } from "@/components/Guide";

export default function TaxReturnPage() {
  return (
    <ArrivalDetailLayout slug="tax-return" title="Tax Return Basics">
      <h1 className="text-lg font-semibold text-darker mb-3">
        Tax Return Basics
      </h1>

      <p className="text-sm text-darker mb-3">
        In Canada, most people file an income tax return once a year. Even if
        your income is low, filing can give you access to benefits and credits
        from the government.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">
        When do you file?
      </h2>
      <p className="text-sm text-darker mb-3">
        The tax year is January 1 to December 31. Personal tax returns are
        usually due at the end of April the following year.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">
        What documents do you need?
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>T4 slips from employers (shows your income and tax paid).</li>
        <li>Rent receipts or property tax info (for some credits).</li>
        <li>Receipts for tuition, childcare, and some medical expenses.</li>
        <li>Your SIN and personal details for you and your family.</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        How can you file?
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Online using certified tax software.</li>
        <li>With help from a tax clinic or accountant.</li>
        <li>By mail, using paper forms (slower).</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">Why it matters</h2>
      <p className="text-sm text-darker mb-3">
        Filing on time helps you stay in good standing with the government and
        makes sure you receive any benefits or refunds you are eligible for.
      </p>
    </ArrivalDetailLayout>
  );
}
