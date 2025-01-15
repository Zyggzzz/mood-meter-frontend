"use client";
import { Smile, Frown, Meh } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import smallLogo from "../images/smallLogo.svg";
import { EnqueteCall } from "~/server/apiCalls";
import { enqueteResultType } from "~/app/types/apiCalls";

export default function Enquete() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const enquete: enqueteResultType = {
      name: formData.get("name")?.toString() ?? "",
      address: formData.get("adress")?.toString() ?? "",
      age: parseInt(formData.get("age")?.toString() ?? "0"),
      residence: formData.get("residence")?.toString() ?? "",
      prevEdu: formData.get("prevEdu")?.toString() ?? "",
      course: formData.get("course")?.toString() ?? "",
    };
    EnqueteCall(enquete);
  };

  return (
    <main className="h-[calc(100vh-8rem-5rem)]">
      <div className="my- flex h-full flex-col items-center justify-center px-2 smallPhone:px-4 tablet:px-6 laptop:px-8">
        <h1 className="my-2 overflow-hidden text-center font-inter text-2xl font-bold smallPhone:text-3xl tablet:text-4xl">
          Enquete
        </h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(event);
          }}
          className="border-borderColor flex w-full max-w-[90%] flex-col space-y-2 rounded-lg border-8 p-5 smallPhone:max-w-[80%] tablet:max-w-[60%] laptop:max-w-[40%]"
        >
          <label htmlFor="name" className="font-inter text-sm tablet:text-base">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="border border-black p-1 font-inter outline-none tablet:p-2"
          />
          <label
            htmlFor="adress"
            className="font-inter text-sm tablet:text-base"
          >
            Adres
          </label>
          <input
            type="text"
            name="adress"
            className="border border-black p-1 font-inter outline-none tablet:p-2"
          />
          <label
            htmlFor="residence"
            className="font-inter text-sm tablet:text-base"
          >
            Woonplaats
          </label>
          <input
            type="text"
            name="residence"
            className="border border-black p-1 font-inter outline-none tablet:p-2"
          />
          <label htmlFor="age" className="font-inter text-sm tablet:text-base">
            Leeftijd
          </label>
          <input
            type="number"
            name="age"
            className="border border-black p-1 font-inter outline-none tablet:p-2"
          />
          <label
            htmlFor="prevEdu"
            className="font-inter text-sm tablet:text-base"
          >
            Vorige opleiding
          </label>
          <input
            type="text"
            name="prevEdu"
            className="border border-black p-1 font-inter outline-none tablet:p-2"
          />
          <label
            htmlFor="course"
            className="font-inter text-sm tablet:text-base"
          >
            Opleiding waarvoor je bent gekomen
          </label>
          <input
            type="text"
            name="course"
            className="border border-black p-1 font-inter outline-none tablet:p-2"
          />
          <button
            type="submit"
            className="self-center border-2 border-white bg-blackPrimary px-4 py-2 font-inter text-sm text-white shadow-md smallPhone:text-base tablet:text-lg"
          >
            Inleveren
          </button>
        </form>
      </div>
    </main>
  );
}
