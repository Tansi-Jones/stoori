"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { CloseIcon, EditIcon, MenuIcon } from "@/icons/icons";
import { menuLinks, subMenuLinks } from "@/constant";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const path = usePathname();

  return (
    <nav className="relative flex items-center justify-between backdrop:blur-xl bg-white/5 rounded-full py-3 px-5 my-5">
      <Link href="/">
        <div className="relative w-16 h-5">
          <Image
            src="/stoori.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-auto h-auto"
          />
        </div>
      </Link>

      <div className="space-x-8 hidden md:block">
        {menuLinks.map((item, index) => (
          <Link
            href={item?.href}
            key={index}
            className={
              path.indexOf(item.href) !== -1 ? "text-white" : "text-white/70"
            }
          >
            {item?.name}
          </Link>
        ))}
      </div>

      <AuthButton />
    </nav>
  );
};

export const SubMenuPopup = () => {
  return (
    <Popover className="relative block md:hidden">
      {({ open }) => (
        <>
          <Popover.Button className="outline-none">
            {open ? (
              <span className="flex h-5 w-5 shrink-0 items-center justify-center text-white sm:h-6 sm:w-6">
                <CloseIcon aria-hidden="true" />
              </span>
            ) : (
              <span className="flex h-5 w-5 shrink-0 items-center justify-center text-white sm:h-6 sm:w-6">
                <MenuIcon aria-hidden="true" />
              </span>
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-4 -translate-x-1/2 transform backdrop-blur-sm">
              <div className="relative grid gap-5 bg-white/5 border border-white/5 rounded-xl p-5">
                {menuLinks.map((item, index) => (
                  <Link
                    href={item?.href}
                    key={index}
                    className="-m-3 flex items-center rounded-lg p-[6px] transition duration-150 ease-in-out hover:bg-white/5 focus:outline-none"
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export const AuthButton = () => {
  const auth = true;

  return (
    <>
      {auth ? (
        <AuthDropdown />
      ) : (
        <button className="group inline-flex outline-none border-none text-black bg-zinc-300 rounded-full px-3 py-1 text-sm">
          Connect
        </button>
      )}
    </>
  );
};

export const AuthDropdown = () => {
  const [randomGradient, setRandomGradient] = useState<string>("");

  useEffect(() => {
    applyRandomGradient();
  }, []);

  const getRandomColor = (): string => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    while (color.length < 6) {
      color = "0" + color;
    }
    return "#" + color;
  };

  const generateRandomGradient = (): string => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(to right, ${color1}, ${color2})`;
  };

  const applyRandomGradient = (): void => {
    const randomGradient = generateRandomGradient();
    setRandomGradient(randomGradient);
  };

  return (
    <Popover className="relative block">
      {() => (
        <>
          <Popover.Button
            style={{ background: randomGradient }}
            className="outline-none w-7 h-7 rounded-full text-transparent"
          >
            h
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 mt-4 -translate-x-28 transform backdrop-blur-sm">
              <>
                <div className="relative grid gap-5 bg-[#1D1521] border border-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-x-3">
                    <div
                      style={{ background: randomGradient }}
                      className="outline-none w-10 h-10 rounded-full text-transparent"
                    >
                      h
                    </div>
                    <div className="text-sm">
                      <p>tsijones</p>
                      <p className="text-white/60">x03s4w_</p>
                    </div>
                  </div>

                  <Link
                    href="/me/write"
                    className="-m-3 flex items-center rounded-lg py-2 pl-2 pr-14 transition duration-150 ease-in-out hover:bg-white/5 focus:outline-none"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center text-white sm:h-6 sm:w-6">
                      <EditIcon aria-hidden="true" />
                    </div>
                    <div className="ml-1 pr-2">
                      <p className="text-sm font-light text-white/80">Write</p>
                    </div>
                  </Link>

                  <hr className="border-white/20" />

                  {subMenuLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg py-2 pl-2 pr-14 transition duration-150 ease-in-out hover:bg-white/5 focus:outline-none"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center text-white sm:h-6 sm:w-6">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-1 pr-2">
                        <p className="text-sm font-light text-white/80">
                          {item.name}
                        </p>
                      </div>
                      <div
                        className={`${
                          item?.name === "Stats" ? "block" : "hidden"
                        } text-xs bg-white/5 border border-white/5 rounded font-light px-1`}
                      >
                        Beta
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
