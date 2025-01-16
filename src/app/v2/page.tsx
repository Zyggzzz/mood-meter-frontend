import Link from "next/link";
import Image from "next/image";
import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import Meterv2 from "../assets/components/v2/Meter";

export default function HomePage() {
  return (
    <div id="root" className="flex h-screen w-screen flex-col bg-whiteBg">
      <Header />
      <Meterv2 />
      <Footer />
    </div>
  );
}
