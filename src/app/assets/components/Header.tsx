import Image from "next/image";
import bigLogo from "../images/bigLogo.svg";

export default function Header() {
  return (
    <header className="bg-whiteBg h-18 sticky flex w-screen items-center justify-between shadow">
      <Image
        width={100}
        height={50}
        src={bigLogo.src}
        alt="Yonder Logo"
        className="lg pointer-events-none h-12 w-auto pl-8 lg:h-14"
      />
      <div
        id="gridContainer"
        className="grid h-full w-96 grid-cols-5 grid-rows-2"
      >
        <div id="gridItem" className="bg-whiteBg col-span-2 h-8 w-auto"></div>
        <div
          id="gridItem"
          className="bg-greenAccent col-span-3 h-8 w-auto"
        ></div>
        <div
          id="gridItem"
          className="bg-purpleAccent col-span-3 h-8 w-auto"
        ></div>
      </div>
    </header>
  );
}
