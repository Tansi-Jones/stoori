import Link from "next/link";
import { Navigation } from "@/components/Navbar/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="space-y-8 my-20">
        <h1 className="p-2 text-3xl sm:text-4xl md:text-5xl leading-10 xl:text-6xl 2xl:text-7xl font-extrabold text-center bg-gradient-to-r from-white/30 via-white/70 to-white bg-clip-text text-transparent">
          Tech Insight: Elevating Code, Crafting Content
        </h1>

        <p className="text-center font-light w-full md:max-w-xl mx-auto text-white/80">
          &rdquo;Embark on a journey through the ever-evolving tech landscape as
          Tansi Jones shares her insights, illuminating the path to a digital
          future filled with endless possibilities and innovation.&rdquo;
        </p>

        <div className="flex justify-center items-center">
          <Link
            href="/stories"
            className="outline-none border-none hover:bg-zinc-300 transition bg-zinc-200 rounded-full px-6 py-2 text-sm inline-block text-black"
          >
            Read Stories
          </Link>
        </div>
      </main>
    </>
  );
}
