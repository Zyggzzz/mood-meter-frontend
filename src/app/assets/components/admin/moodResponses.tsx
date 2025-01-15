import React, { useEffect, useState } from "react";
import { MoodGet } from "~/server/apiCalls";
import Image from "next/image";
import Loading from "~/app/assets/images/loading.svg";

export default function MoodResponses() {
  async function getMoods() {
    const moods = await MoodGet();
    return moods;
  }

  const [moods, setMoods] = useState([]);

  useEffect(() => {
    getMoods().then((data) => setMoods(data));
  }, []);
  return (
    <div className="h-[200px] w-[30vw] rounded-lg bg-redAccent p-5 text-whiteBg">
      <h1 className="text-left text-2xl font-bold text-whiteBg">
        Mood Antwoorden Aantal
      </h1>
      <h1 className="mt-5 text-left text-7xl font-extrabold">
        {moods.length ? (
          moods.length
        ) : (
          <Image src={Loading.src} alt="loading gif" width={50} height={50} />
        )}
      </h1>
    </div>
  );
}
