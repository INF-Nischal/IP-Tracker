"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import IpDetails from "./IpDetails";
import { getGeoData } from "@/repository/geoRepository";

export default function Search() {
  const [ipAddress, setIpAddress] = useState<string>("");
  const [geoData, setGeoData] = useState<any>(null);
  const [trigger, setTrigger] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTrigger(!trigger);
    console.log("ipAddress", ipAddress);
  };

  useEffect(() => {
    async function getData() {
      const data = await getGeoData(ipAddress);
      setGeoData(data);
    }

    getData();
  }, [trigger]);

  return (
    <div className="relative bg-mobile-hero-pattern h-[40vh] w-screen sm:bg-hero-pattern bg-cover flex flex-col items-center pt-4 md:pt-8">
      <h1 className="font-medium text-white text-2xl">IP Address Tracker</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[540px] flex justify-center mt-4 md:mt-8 rounded-lg overflow-hidden"
      >
        <input
          type="text"
          className="w-full px-4 py-3 outline-none"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button
          type="submit"
          className="h-full w-[48px] bg-gray-500 flex justify-center items-center hover:bg-blue-300"
        >
          <Image
            src={"/icons/icon-arrow.svg"}
            alt="search"
            width={12}
            height={12}
          />
        </button>
      </form>
      <div className="absolute z-50 top-[60%] w-[90%] md:top-[80%] md:w-[60%] bg-white rounded-lg">
        <IpDetails geoData={geoData} />
      </div>
    </div>
  );
}
