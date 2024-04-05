export const CommentInputBox = () => {
  return (
    <article className="space-y-3 border-white/5 border rounded-lg p-3">
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
        </div>
      </div>

      <div>
        <textarea
          className="bg-transparent w-full placeholder:text-white/30 border-none outline-none resize-none text-sm font-light"
          name="comment"
          id="comment"
          cols={30}
          rows={4}
          autoFocus
          placeholder="What do you think?"
        ></textarea>
      </div>

      <div className="flex items-center justify-end space-x-5">
        <button className="text-white rounded-full text-sm font-light">
          Cancel
        </button>
        <button className="bg-white text-black rounded-full px-3 py-[5px] font-normal text-sm">
          Respond
        </button>
      </div>
    </article>
  );
};
