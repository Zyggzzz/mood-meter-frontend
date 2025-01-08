import Link from "next/link";
import Image from "next/image";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Meter from "./assets/components/Meter";

export default function HomePage() {
  return (
    <div id="root" className="flex h-screen w-screen flex-col bg-whiteBg">
      <Header />
      <Meter />
      <Footer />
    </div>
  );
}
