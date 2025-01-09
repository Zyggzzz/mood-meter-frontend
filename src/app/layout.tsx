import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={"bg-whiteBg"}>
      <body>{children}</body>
    </html>
  );
}
