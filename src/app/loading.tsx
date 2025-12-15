/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* PAGE CONTENT */}
      <div
        className={`transition-opacity duration-1000 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </div>

      {/* LOADER OVERLAY (YOUR ANIMATION) */}
      {loading && (
        <div className="fixed inset-0 z-9999 bg-white flex justify-center items-center overflow-hidden">
          <div className="flex flex-col items-center w-[60vw]">

            {/* Loading text + moving lines */}
            <div className="flex items-end gap-[1vw] overflow-hidden w-[25vw]">
              <div className="flex flex-col gap-[0.5vh] mb-[1.5vh] w-[4vw]">
                <div
                  className="w-[2vw] h-[0.2vw] bg-[#773b67] rounded"
                  style={{ animation: "line-move 0.6s linear infinite" }}
                />
                <div
                  className="w-[2vw] h-[0.2vw] bg-[#773b67] rounded"
                  style={{ animation: "line-move 0.6s linear infinite 0.2s" }}
                />
                <div
                  className="w-[2vw] h-[0.2vw] bg-[#773b67] rounded"
                  style={{ animation: "line-move 0.6s linear infinite 0.4s" }}
                />
              </div>

              <p className="text-[3vw] uppercase tracking-[0.8vw] text-[#773b67] loading-font">
                Loading
              </p>
            </div>

            {/* BUS */}
            <div className="relative mt-[3vh]">
              <img src="/images/bus2.png" className="w-[18vw]" alt="bus" />

              {/* Wheels */}
              <img
                src="/images/ring.png"
                className="w-[2vw] absolute left-[14%] bottom-[-11%]"
                style={{ animation: "wheel-bounce 0.6s ease-in-out infinite" }}
                alt=""
              />
              <img
                src="/images/ring.png"
                className="w-[2vw] absolute left-[28%] bottom-[-11%]"
                style={{ animation: "wheel-bounce 0.6s ease-in-out infinite 0.02s" }}
                alt=""
              />
              <img
                src="/images/ring.png"
                className="w-[2vw] absolute left-[66%] bottom-[-11%]"
                style={{ animation: "wheel-bounce 0.6s ease-in-out infinite 0.05s" }}
                alt=""
              />

              {/* ROAD */}
              <div className="absolute bottom-[-12%] left-0 w-full overflow-hidden">
                <div
                  className="flex gap-[1vw]"
                  style={{ animation: "road-move 1.5s linear infinite" }}
                >
                  <div className="w-[10vw] h-[0.3vw] bg-[#773b67] rounded-2xl" />
                  <div className="w-[3vw] h-[0.3vw] bg-[#773b67] rounded-2xl" />
                  <div className="w-[4vw] h-[0.3vw] bg-[#773b67] rounded-2xl" />
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
