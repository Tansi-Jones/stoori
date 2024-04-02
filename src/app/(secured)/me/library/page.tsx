import { StoriesArticle } from "@/components/Articles/StoriesArticle";
import { tags } from "@/constant/stories.category";

export default function Library() {
  const tagFound = tags.filter((item) => item?.tag === "blockchain");

  return (
    <main className="flex flex-col gap-8 my-16 w-full max-w-3xl mx-auto">
      <section>
        <h1 className="text-3xl font-medium">Your library</h1>
      </section>

      <section className="space-y-3">
        {tagFound?.map((item, index) => (
          <StoriesArticle key={index} story={item} />
        ))}
      </section>
    </main>
  );
}
