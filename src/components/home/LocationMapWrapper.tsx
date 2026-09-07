"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#f9f5ed] animate-pulse rounded-[calc(2.5rem-0.5rem)]" />
});

export default LocationMap;
