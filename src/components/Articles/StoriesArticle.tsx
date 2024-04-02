import Image from "next/image";
import Link from "next/link";

type Props = {
  story: {
    title: string;
    date: string;
    slug: string;
    description: string;
    thumbnail: string;
  };
};

export const StoriesArticle = ({ story }: Props) => {
  return (
    <Link href={`/stories/story/${story?.slug}`} className="block">
      <article className="group relative bg-white/5 p-5 border border-white/5 rounded-xl w-full flex items-center justify-between gap-y-28">
        <div className="space-y-2 w-[500px]">
          <p className="text-sm font-light text-white/30">{story?.date}</p>
          <h1 className="text-base leading-tight group-hover:underline">
            {story?.title}
          </h1>
          <p className="text-sm font-light text-white/50">
            {story?.description}
          </p>
        </div>
        <div className="relative bg-white/5 rounded-lg w-48 h-[7.5rem] overflow-auto hidden md:block">
          <Image
            src={story?.thumbnail}
            alt="thumbnail"
            fill
            sizes="100%"
            className="w-auto h-auto object-cover"
          />
        </div>
      </article>
    </Link>
  );
};
