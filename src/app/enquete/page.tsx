import Link from "next/link";
import Image from "next/image";
import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
// import Enquete from "../assets/components/Enquete";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col bg-whiteBg">
      <Header />
      {/* <Enquete /> */}
      <Footer />
    </div>
  );
}
