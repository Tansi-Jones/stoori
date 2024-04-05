import Link from "next/link";
import { Navigation } from "@/components/Navbar/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="space-y-8 my-20">
        <h1 className="p-2 text-3xl sm:text-4xl md:text-5xl leading-10 xl:text-6xl 2xl:text-7xl font-extrabold text-center bg-gradient-to-r from-white/30 via-white/70 to-white bg-clip-text text-transparent">
          Write, Publish, Earn in the Web3 Universe.
        </h1>

        <p className="text-center font-light w-full md:max-w-xl mx-auto text-white/80">
          Revolutionize blogging in the Web3 era. Share ideas, stories, and
          expertise in a decentralized community. Connect, create, and earn
          rewards!
        </p>

        <form action="">
          <div className="mx-auto w-full lg:w-2/3 xl:w-2/4 space-y-1">
            <label htmlFor="waitList" className="font-light">
              Join the waitlist
            </label>
            <div className="flex justify-center items-center space-x-2">
              <input
                type="email"
                id="waitList"
                placeholder="Enter your email"
                className="block w-full border flex-grow border-white/20 bg-transparent rounded-lg p-2"
              />
              <button
                type="button"
                className="outline-none border-none hover:bg-zinc-300 transition bg-zinc-200 rounded-lg px-6 py-2 text-base inline-block text-black w-40 lg:w-32"
              >
                Join now
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
