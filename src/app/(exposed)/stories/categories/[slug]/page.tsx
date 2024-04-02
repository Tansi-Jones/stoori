import { StoriesArticle } from "@/components/Articles/StoriesArticle";
import { Footer } from "@/components/Footer/Footer";
import { SearchBox } from "@/components/Search/Search";
import { storiesCategories } from "@/constant/stories.category";

type Props = {
  params: {
    slug: string;
  };
};

export default function Category({ params }: Props) {
  const categories = storiesCategories.find(
    (category) => category.slug === params?.slug
  );

  return (
    <>
      <main className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl p-2 md:text-5xl mt-10 font-extrabold text-center bg-gradient-to-r from-white/30 via-white/70 to-white bg-clip-text text-transparent">
          {categories?.title}
        </h1>

        <div className="mt-10 mb-16">
          <SearchBox />
        </div>

        <section className="space-y-3">
          {categories?.stories.map((story, index) => (
            <StoriesArticle key={index} story={story} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
