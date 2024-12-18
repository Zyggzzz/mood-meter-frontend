import Image from "next/image";
import bigLogo from "../images/bigLogo.svg";

export default function Header() {
  return (
    <header className="h-18 sticky flex w-screen items-center justify-between bg-whiteBg shadow">
      <Image
        width={100}
        height={50}
        src={bigLogo.src}
        alt="Yonder Logo"
        className="lg tablet:px-8 pointer-events-none h-12 w-auto px-5 lg:h-14"
        loading="eager"
      />
      <div
        id="gridContainer"
        className="grid h-full w-96 grid-cols-5 grid-rows-2"
      >
        <div id="gridItem" className="col-span-2 h-8 w-auto bg-whiteBg"></div>
        <div
          id="gridItem"
          className="col-span-3 h-8 w-auto bg-greenAccent"
        ></div>
        <div
          id="gridItem"
          className="col-span-3 h-8 w-auto bg-purpleAccent"
        ></div>
      </div>
    </header>
  );
}
