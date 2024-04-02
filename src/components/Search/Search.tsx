import Link from "next/link";

const tags = [
  {
    name: "blockchain",
    count: 5,
  },
  {
    name: "programming",
    count: 2,
  },
  {
    name: "defi",
    count: 1,
  },
  {
    name: "ethereum",
    count: 1,
  },
  {
    name: "smart-contracts",
    count: 1,
  },
  {
    name: "web3",
    count: 1,
  },
];

export const SearchBox = () => {
  return (
    <section>
      <form className="flex flex-col items-center justify-center gap-y-6">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search stories..."
          className="backdrop:blur-xl bg-white/5 rounded-full w-full block px-8 py-4 outline-none border border-white/5"
        />
        <div className="hidden md:flex items-center justify-between gap-8">
          {tags.map((tag) => (
            <Link
              href={`/stories/tags/${tag.name}`}
              key={tag.name}
              className="font-extralight text-white/70"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      </form>
    </section>
  );
};
