"use client";
import { Smile, Frown, Meh } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import smallLogo from "~/app/assets/images/smallLogo.svg";
import { MoodCall } from "~/server/apiCalls";
import Link from "next/link";

export default function Meterv2() {
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>,
    mood: string,
  ) => {
    e.preventDefault();
    setShowDialog(true);
    MoodCall(mood);
  };
  return (
    <main>
      <div
        id="dialog"
        className={`${showDialog ? "grid" : "hidden"} fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform grid-cols-4 grid-rows-3 bg-purpleAccent p-2 shadow-lg base:w-[95vw] base:grid-rows-3 smallPhone:h-fit smallPhone:w-[90vw] smallPhone:grid-rows-2 phone:h-[240px] phone:w-[80vw] tablet:h-fit tablet:w-[50vw] laptop:h-fit laptop:w-[40vw]`}
      >
        <h1 className="col-span-3 row-span-1 flex items-center justify-center text-center font-bold text-whiteBg base:col-span-4 base:text-center smallPhone:col-span-3 smallPhone:text-base phone:text-lg tablet:text-xl laptop:text-2xl">
          Dankjewel voor je feedback! Vul hier onder nog een enquete in.
        </h1>
        <div
          id="logo"
          className="col-span-1 row-span-2 hidden items-center justify-center smallPhone:flex phone:flex tablet:flex"
        >
          <Image
            width={500}
            height={500}
            alt="Small Yonder logo"
            src={smallLogo.src}
            className="h-3/4 w-3/4 object-contain"
            loading="eager"
          />
        </div>
        <p className="col-span-3 row-span-1 flex items-center justify-center text-center text-whiteBg base:col-span-4 smallPhone:col-span-3 smallPhone:text-sm phone:text-base tablet:text-lg laptop:text-xl">
          {showDialog
            ? "We hebben je feedback ontvangen en zullen er zo snel mogelijk naar kijken."
            : ""}
        </p>
        <Link
          href={"/enquete"}
          className="col-span-2 col-start-2 row-start-4 m-2 flex items-center justify-center border-2 border-whiteBg bg-blackPrimary px-6 py-2 text-lg font-semibold text-whiteBg shadow-md transition-all duration-200 ease-in-out hover:bg-redAccent hover:text-whiteBg focus:outline-none focus:ring-2 focus:ring-purpleAccent focus:ring-offset-2"
        >
          Enquete
        </Link>
      </div>

      <div className="flex h-[calc(100vh-64px-144px)] w-full flex-col items-center justify-around phone:flex-row">
        <button
          onClick={(e) => {
            handleSubmit(e, "happy");
          }}
          className="flex flex-col items-center"
        >
          <Smile
            size={0}
            className="h-[175px] w-[175px] stroke-greenAccent tablet:h-[200px] tablet:w-[200px] laptop:h-[300px] laptop:w-[300px] desktop:h-[400px] desktop:w-[400px]"
          />
        </button>
        <button
          onClick={(e) => {
            handleSubmit(e, "meh");
          }}
          className="flex flex-col items-center"
        >
          <Meh
            size={0}
            className="h-[175px] w-[175px] stroke-purpleAccent tablet:h-[200px] tablet:w-[200px] laptop:h-[300px] laptop:w-[300px] desktop:h-[400px] desktop:w-[400px]"
          />
        </button>
        <button
          onClick={(e) => {
            handleSubmit(e, "mad");
          }}
          className="flex flex-col items-center"
        >
          <Frown
            size={0}
            className="h-[175px] w-[175px] stroke-redAccent tablet:h-[200px] tablet:w-[200px] laptop:h-[300px] laptop:w-[300px] desktop:h-[400px] desktop:w-[400px]"
          />
        </button>
      </div>
    </main>
  );
}
