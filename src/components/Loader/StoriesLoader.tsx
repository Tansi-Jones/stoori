export const StoriesLoader = () => {
  return (
    <article>
      <div className="bg-white/5 p-4 border border-white/5 rounded-xl w-full h-32 flex items-center justify-between gap-8">
        <div className="space-y-3 animate-pulse w-[500px]">
          <div className="bg-white/5 rounded-lg w-20 h-2"></div>
          <div className="bg-white/5 rounded-lg w-full h-3"></div>
          <div className="bg-white/5 rounded-lg w-full h-2"></div>
          <div className="bg-white/5 rounded-lg w-full h-2"></div>
          <div className="bg-white/5 rounded-lg w-7/12 h-2"></div>
        </div>
        <div className="bg-white/5 rounded-lg w-48 h-24 animate-pulse hidden md:block"></div>
      </div>
    </article>
  );
};
