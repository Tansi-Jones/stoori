import { ClockIcon } from "@/icons/icons";
import { BackButton } from "@/components/Buttons/Button";
import { Footer } from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default function Story({ params }: Props) {
  return (
    <>
      <div className="xl:ml-10 2xl:ml-20 mt-14">
        <BackButton />
      </div>

      <main className="w-full max-w-3xl mx-auto mb-16">
        <section className="my-8 space-y-4">
          <h1 className="text-2xl font-bold leading-tight group-hover:underline">
            Why TypeScript is the Better Choice over JavaScript
          </h1>

          <div className="flex items-center justify-between">
            <div className="hidden md:flex text-sky-400 items-center justify-between gap-3">
              <Link href={`#`} className="font-light">
                #blockchain
              </Link>
              <Link href={`#`} className="font-light">
                #programming
              </Link>
              <Link href={`#`} className="font-light">
                #defi
              </Link>
            </div>
            <div className="flex items-center text-white justify-between gap-8">
              <p className="font-light">Wed 12 July 2023</p>
              <p className="font-light flex items-center space-x-1">
                <ClockIcon aria-hidden="true" />
                <span>5-7 mins read</span>
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8 mb-10">
          <div className="relative rounded-lg w-full h-48 overflow-auto">
            <Image
              src="https://res.cloudinary.com/remeek/image/upload/v1688775960/flexibble/ofnj03bqihffukfmwzle.jpg"
              alt="image"
              fill
              sizes="100%"
              className="w-auto h-auto object-cover"
            />
          </div>

          <div className="space-y-3">
            <p className="font-light text-white/90">
              As a developer, you want to write code that is not only
              functional, but also easy to maintain and extend. This is where
              TypeScript comes in. While JavaScript is the most popular
              programming language in the world, TypeScript offers several
              advantages that make it a better choice for many projects.
            </p>
            <p className="font-light text-white/90">
              First and foremost, TypeScript is a typed language, which means
              that variables have a specific type (such as string, number, or
              boolean) and the compiler will check for type errors at compile
              time. This makes it easier to catch errors early on and prevents
              runtime exceptions, saving you time and frustration.
            </p>
            <p className="font-light text-white/90">
              In addition, TypeScript has a rich type system that allows you to
              define interfaces, classes, and other advanced types that make
              your code more organized and self-documenting. This not only
              improves the readability of your code, but also makes it easier
              for other developers to understand and work with.
            </p>
          </div>
        </section>

        <section className="space-y-8 mb-10">
          <div className="relative rounded-lg w-full h-48 overflow-auto">
            <Image
              src="https://res.cloudinary.com/remeek/image/upload/v1688737556/flexibble/im1unlxhu9hhhrfxbwqq.png"
              alt="image"
              fill
              sizes="100%"
              className="w-auto h-auto object-cover"
            />
          </div>

          <div className="space-y-3">
            <p className="font-light text-white/90">
              As a developer, you want to write code that is not only
              functional, but also easy to maintain and extend. This is where
              TypeScript comes in. While JavaScript is the most popular
              programming language in the world, TypeScript offers several
              advantages that make it a better choice for many projects.
            </p>
            <p className="font-light text-white/90">
              First and foremost, TypeScript is a typed language, which means
              that variables have a specific type (such as string, number, or
              boolean) and the compiler will check for type errors at compile
              time. This makes it easier to catch errors early on and prevents
              runtime exceptions, saving you time and frustration.
            </p>
            <p className="font-light text-white/90">
              In addition, TypeScript has a rich type system that allows you to
              define interfaces, classes, and other advanced types that make
              your code more organized and self-documenting. This not only
              improves the readability of your code, but also makes it easier
              for other developers to understand and work with.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
