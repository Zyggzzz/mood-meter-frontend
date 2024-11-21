import Image from "next/image";
import Link from "next/link";
import discordlogo from "@/app/assets/images/discordlogo.png";
export default function Home() {
  return (
    <div>
      <Image src={discordlogo.src} alt="discord logo" />
      <Link href="/contact" prefetch={true} />
    </div>
  );
}
