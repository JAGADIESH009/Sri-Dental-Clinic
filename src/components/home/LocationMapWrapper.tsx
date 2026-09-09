"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#f9f5ed] animate-pulse rounded-xl" />
});

export default LocationMap;
