import React, { useEffect, useState } from "react";
import { EnqueteGet } from "~/server/apiCalls";
import Image from "next/image";
import Loading from "~/app/assets/images/loading.svg";

export default function EnqueteResponses() {
  async function getEnquetes() {
    const enquetes = await EnqueteGet();
    return enquetes;
  }

  const [enquetes, setEnquetes] = useState([]);

  useEffect(() => {
    getEnquetes().then((data) => setEnquetes(data));
  }, []);
  return (
    <div className="h-[200px] w-[30vw] rounded-lg bg-redAccent p-5 text-whiteBg">
      <h1 className="text-left text-2xl font-bold text-whiteBg">
        Enquete Antwoorden Aantal
      </h1>
      <h1 className="mt-4 text-left text-7xl font-extrabold">
        {enquetes.length ? (
          enquetes.length
        ) : (
          <Image src={Loading.src} alt="loading gif" width={50} height={50} />
        )}
      </h1>
    </div>
  );
}
