import { StoriesArticle } from "@/components/Articles/StoriesArticle";
import { Footer } from "@/components/Footer/Footer";
import { SearchBox } from "@/components/Search/Search";
import { tags } from "@/constant/stories.category";

type Props = {
  params: {
    slug: string;
  };
};

export default function Tag({ params }: Props) {
  const tagFound = tags.filter((item) => item?.tag === params.slug);

  return (
    <>
      <main className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl p-2 md:text-5xl mt-10 font-extrabold text-center bg-gradient-to-r from-white/30 via-white/70 to-white bg-clip-text text-transparent">
          #{params.slug}
        </h1>

        <div className="mt-10 mb-16">
          <SearchBox />
        </div>

        <section className="space-y-3">
          {tagFound?.map((item, index) => (
            <StoriesArticle key={index} story={item} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
