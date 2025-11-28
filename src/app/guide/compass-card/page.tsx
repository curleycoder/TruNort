"use client";

import { ArrivalDetailLayout } from "@/components/Guide";

export default function CompassCardPage() {
  return (
    <ArrivalDetailLayout slug="compass-card" title="Compass Card & Transit">
      <h1 className="text-lg font-semibold text-darker mb-3">
        Compass Card & Public Transit
      </h1>

      <p className="text-sm text-darker mb-3">
        In Metro Vancouver, the Compass Card is the reloadable card used for
        SkyTrain, SeaBus, West Coast Express, and most buses. It makes using
        public transit cheaper and easier.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">
        Where to get a Compass Card
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>SkyTrain and SeaBus station vending machines.</li>
        <li>Select London Drugs and other retail partners.</li>
        <li>Online, with the card mailed to you.</li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">
        How to load money or passes
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>At station machines using cash, debit, or credit.</li>
        <li>Online by creating a Compass Card account.</li>
        <li>
          With AutoLoad so your balance or monthly pass renews automatically.
        </li>
      </ul>

      <h2 className="text-sm font-semibold text-darker mb-2">Zones and maps</h2>
      <p className="text-sm text-darker mb-3">
        Metro Vancouver transit is divided into zones. Fares depend on how many
        zones you cross and time of day. Use the transit map or trip planner app
        to see which zones you travel through and to plan the fastest route.
      </p>

      <h2 className="text-sm font-semibold text-darker mb-2">
        Tips for using transit
      </h2>
      <ul className="list-disc list-inside text-sm text-darker mb-3 space-y-1">
        <li>Always tap in and tap out with your Compass Card.</li>
        <li>Keep your card separate from other contactless cards.</li>
        <li>Check schedule changes on weekends and holidays.</li>
      </ul>
    </ArrivalDetailLayout>
  );
}
