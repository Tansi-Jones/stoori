import { AuthDropdown } from "@/components/Navbar/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="relative flex items-center justify-between py-3 my-5">
        <Link href="/">
          <div className="relative w-20 h-6">
            <Image
              src="/stoori.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-auto h-auto"
            />
          </div>
        </Link>

        <div className="flex items-center gap-x-5">
          <button className="bg-white text-black rounded-full px-3 py-[4px] text-sm">
            Publish
          </button>
          <AuthDropdown />
        </div>
      </nav>

      {children}
    </>
  );
}
