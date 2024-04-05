export const Comments = () => {
  return (
    <article className="space-y-3 my-4">
      <div className="flex items-center gap-x-2">
        <div
          style={{
            background:
              "linear-gradient(to right, rgb(249, 176, 196), rgb(47, 16, 189))",
          }}
          className="outline-none w-8 h-8 rounded-full text-transparent"
        >
          h
        </div>
        <div className="text-sm">
          <p>tsijones</p>
          <p className="text-sm font-light text-white/40">3 days ago</p>
        </div>
      </div>

      <p className="text-sm font-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        deserunt ipsa est perspiciatis pariatur natus cumque suscipit assumenda
        qui quis!
      </p>
    </article>
  );
};
