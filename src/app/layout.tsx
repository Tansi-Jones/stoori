import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stoori",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="relative w-full h-screen">
          <Image
            src="/assets/bg-center.svg"
            width={1540}
            height={800}
            priority
            alt="center-flare"
            className="fixed top-0 left-0 -z-10 w-auto h-auto"
          />

          <div className="h-full z-10 overflow-auto">
            <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-0">
              {children}
            </div>
          </div>

          <Image
            src="/assets/bg-bottom.svg"
            width={1340}
            height={900}
            priority
            alt="bottom-flare"
            className="fixed bottom-0 left-0 -z-10 w-auto h-auto"
          />
        </div>
      </body>
    </html>
  );
}
