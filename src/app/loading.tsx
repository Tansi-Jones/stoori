export default function loading() {
  return (
    <>
      <main className="space-y-8 my-20 animate-pulse">
        <div className="space-y-2">
          <div className="bg-white/5 border border-white/5 rounded-lg w-full h-4"></div>
          <div className="bg-white/5 border border-white/5 rounded-lg w-80 mx-auto h-4"></div>
        </div>
        <div className="space-y-2 w-full md:w-8/12 mx-auto">
          <div className="bg-white/5 border border-white/5 rounded-lg w-full h-2"></div>
          <div className="bg-white/5 border border-white/5 rounded-lg w-full h-2"></div>
          <div className="bg-white/5 border border-white/5 rounded-lg w-80 mx-auto h-2"></div>
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-white/5 border border-white/5 rounded-full w-32 mx-auto h-7"></div>
        </div>
      </main>
    </>
  );
}
