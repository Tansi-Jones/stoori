export default function loading() {
  const tagsArray: number[] = new Array(2).fill(0);

  return (
    <>
      <div className="bg-white/5 rounded-xl w-20 h-5 mt-14 mb-10 animate-pulse xl:ml-10 2xl:ml-20"></div>
      <main className="w-full max-w-3xl mx-auto mb-16">
        <section className="my-8 space-y-4">
          <div className="space-y-2">
            <div className="bg-white/5 rounded-lg w-full h-3"></div>
            <div className="bg-white/5 rounded-lg w-6/12 h-3"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center justify-between gap-8">
              {tagsArray.map((_, index) => (
                <div
                  className="bg-white/5 rounded-lg w-20 h-2"
                  key={index}
                ></div>
              ))}
            </div>
            <div className="hidden md:flex items-center justify-between gap-8">
              {tagsArray.map((_, index) => (
                <div
                  className="bg-white/5 rounded-lg w-20 h-2"
                  key={index}
                ></div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-5 animate-pulse">
          <div className="bg-white/5 rounded-lg w-full h-32"></div>
          <div className="space-y-2">
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-8/12 h-2"></div>
          </div>
          <div className="space-y-2">
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-8/12 h-2"></div>
          </div>
          <div className="space-y-2">
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-8/12 h-2"></div>
          </div>
          <div className="bg-white/5 rounded-lg w-full h-32"></div>
          <div className="space-y-2">
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-full h-2"></div>
            <div className="bg-white/5 rounded-lg w-8/12 h-2"></div>
          </div>
        </section>
      </main>
    </>
  );
}
