"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { housingListings } from "../listings";

export default function HousingDetailPage() {
  const router = useRouter();
  const params = useParams();

  const id = Number(params.id);
  const listing = housingListings.find((l) => l.id === id);

  if (!listing) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="mb-4">Listing not found.</p>
          <button
            className="px-4 py-2 rounded bg-red text-white text-sm"
            onClick={() => router.push("/community/housing")}
          >
            Back to Housing
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex justify-center py-6">
      {/* phone frame */}
      <div className="relative w-[390px] bg-white shadow-xl overflow-hidden flex flex-col">
        {/* ================= HERO SECTION ================= */}
        <div className="relative h-[350px]">
          {/* IMAGE CONTAINER WITH ROUNDED BOTTOM */}
          <div className="absolute inset-0 overflow-hidden rounded-b-[40px]">
            <Image
              src={listing.image}
              alt={`${listing.type} in ${listing.location}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* STATUS BAR + TITLE */}
          <div className="absolute inset-x-0 top-0 px-5 pt-6">
            <div className="relative flex items-center text-white">
              {/* LEFT: BACK BUTTON */}
              <button
                onClick={() => router.back()}
                className="p-2 absolute left-0"
              >
                <Image
                  src="/icons/back-snow.svg"
                  alt="Back"
                  width={15}
                  height={15}
                />
              </button>

              {/* MIDDLE: PERFECTLY CENTERED TITLE */}
              <h1 className="text-3xl font-semibold mx-auto">Housing</h1>
            </div>
          </div>

          {/* AVATAR */}
          <div className="absolute left-6 -bottom-6 flex items-center gap-3 z-10">
            <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
              {/* Placeholder avatar – replace with real avatar later */}
              <Image
                src="/profile3.svg"
                alt="Profile avatar"
                width={100}
                height={100}
                className="rounded-full bg-white border-4 border-white shadow-md"
              />{" "}
            </div>

            <span className="text-white text-2xl font-semibold drop-shadow">
              {listing.hostName}
            </span>
          </div>
        </div>

        {/* ================= CONTENT CARD ================= */}
        <div className="flex-1 bg-white pt-16 px-6 pb-10">
          {/* Location */}
          <div className="flex justify-between text-[15px] mb-2 text-darker">
            <span className="font-semibold">Location</span>
            <span>{listing.location}</span>
          </div>
          <hr className="border-t border-gray-200 mb-4" />

          {/* Type */}
          <div className="flex justify-between text-[15px] mb-2 text-darker">
            <span className="font-semibold">Type</span>
            <span>{listing.type}</span>
          </div>
          <hr className="border-t border-gray-200 mb-4" />

          {/* Price */}
          <div className="flex justify-between items-baseline text-[15px] mb-2 text-darker">
            <span className="font-semibold">Price</span>
            <div className="flex items-baseline gap-1">
              <span className="text-[10px]">{listing.currency}</span>
              <span className="text-[18px]">
                {listing.price.replace("/ month", "")}
              </span>
              <span className="text-[13px] ml-1">/ month</span>
            </div>
          </div>
          <hr className="border-t border-gray-200 mb-4" />

          {/* Duration */}
          <div className="flex justify-between text-[15px] mb-8 text-darker">
            <span className="font-semibold">Duration</span>
            <span>{listing.duration}</span>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="w-[70%] py-3 rounded-md bg-red text-white text-[16px] shadow-md"
              onClick={() => alert("Contact host (connect later)")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
