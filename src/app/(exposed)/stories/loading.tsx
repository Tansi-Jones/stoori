import { StoriesLoader } from "@/components/Loader/StoriesLoader";

export default function loading() {
  const articlesArray: number[] = new Array(6).fill(0);
  const tagsArray: number[] = new Array(6).fill(0);

  return (
    <main className="w-full max-w-3xl mx-auto">
      <section>
        <form className="flex flex-col items-center justify-center gap-y-6 my-20">
          <div className="backdrop:blur-xl bg-white/5 rounded-full w-full block px-8 py-5 border border-white/5">
            <div className="bg-white/5 rounded-lg w-20 h-2 animate-pulse"></div>
          </div>

          <div className="hidden md:flex items-center justify-between gap-8">
            {tagsArray.map((_, index) => (
              <div className="bg-white/5 rounded-lg w-20 h-2" key={index}></div>
            ))}
          </div>
        </form>
      </section>

      <section className="space-y-3 mb-12">
        {articlesArray.map((_, index) => (
          <StoriesLoader key={index} />
        ))}
      </section>
    </main>
  );
}
