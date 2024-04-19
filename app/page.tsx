import { useMemo } from "react";
import dynamic from "next/dynamic";
import Search from "@/components/Search";

export default function Home() {
  const Map = useMemo(
    () => dynamic(() => import("@/components/Map"), { ssr: false }),
    []
  );

  return (
    <main className="h-screen bg-slate-100">
      <Search />
      <div className="w-[100vw] h-[60vh]">
        <Map />
      </div>
    </main>
  );
}
