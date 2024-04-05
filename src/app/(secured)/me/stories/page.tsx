import Link from "next/link";
import { Tabs } from "./_components/Tabs";

export default function Stories() {
  return (
    <main className="flex flex-col gap-8 my-16 w-full max-w-3xl mx-auto">
      <section>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">Your stories</h1>
          <Link
            href="/me/write"
            className="group inline-flex outline-none border-none text-black bg-[#CFDAE2] rounded-full px-3 py-2 text-sm"
          >
            Write a story
          </Link>
        </div>
      </section>

      <section>
        <Tabs />
      </section>
    </main>
  );
}
