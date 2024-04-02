"use client";

import { storiesTabLinks } from "@/constant";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Tabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="flex gap-8 border-b border-white/20 outline-none">
        {storiesTabLinks?.map((link, index) => (
          <Tab
            className={({ selected }) =>
              classNames(
                "outline-none font-light py-2 transform transition-all",

                selected
                  ? "border-b border-white/80"
                  : "text-white/70 hover:text-white/60 border-b border-white/0"
              )
            }
            key={index}
          >
            {link?.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="py-5">
        <Tab.Panel className="text-center font-light">
          You have no stories in progress
        </Tab.Panel>
        <Tab.Panel className="text-center font-light">
          You haven’t published any public stories yet.
        </Tab.Panel>
        <Tab.Panel className="text-center font-light">
          No archived stories
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
