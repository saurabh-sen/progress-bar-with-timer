"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState<number>(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (progress > 0) {
      timer = setInterval(() => {
        setProgress(progress - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [progress]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By SAURABH
          </a>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center p-12 space-y-5">
        <div className="">
          <p className="text-3xl font-semibold">
            How to create a timer with progress bar?
          </p>
        </div>

        <div className="container">
          <div className="progress__bar__container bg-gray-100 shadow-md rounded-md text-gray-400 p-6 space-y-3">
            <p className="text-sm font-semibold ">{progress} Seconds</p>
            <div className="bar__track border border-green-500 rounded-md shadow-md sm:w-80 w-full h-5">
              <div
                className="progress__bar bg-blue-500 rounded-md h-full"
                style={{ width: `${100 - progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
