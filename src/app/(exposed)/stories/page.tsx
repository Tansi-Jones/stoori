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
          <section className="space-y-3 mb-3" key={index}>
            {category.stories.map((story, index) => (
              <StoriesArticle key={index} story={story} />
            ))}
          </section>
        ))}
      </main>
    </>
  );
}
