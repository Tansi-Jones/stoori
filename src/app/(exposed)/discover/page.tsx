import { StoriesArticle } from "@/components/Articles/StoriesArticle";
import { SearchBox } from "@/components/Search/Search";
import { storiesCategories } from "@/constant/stories.category";

import Link from "next/link";

export default function Stories() {
  return (
    <>
      <main className="w-full max-w-3xl mx-auto">
        <div className="my-20">
          <SearchBox />
        </div>

        {storiesCategories.map((category, index) => (
          <section className="space-y-3 mb-12" key={index}>
            <div className="flex items-center justify-between">
              <h3 className="capitalize text-lg">{category?.title}</h3>
              <Link
                href={`/stories/categories/${category.slug}`}
                className="bg-white/5 border  border-white/5 rounded-lg text-sm font-light py-[5px] px-3 hover:bg-white/10 transition"
              >
                View all
              </Link>
            </div>

            {category.stories.map((story, index) => (
              <StoriesArticle key={index} story={story} />
            ))}
          </section>
        ))}
      </main>
    </>
  );
}
