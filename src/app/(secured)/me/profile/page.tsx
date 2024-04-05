export default function Profile() {
  return (
    <main className="space-y-8 w-full max-w-3xl mx-auto mt-16">
      <section className="space-y-5">
        <div>
          <h1 className="text-2xl font-medium">Profile</h1>
          <p className="text-sm text-white/50 font-light">
            This is how others will see you on the site.
          </p>
        </div>
        <hr className="border-white/10" />
      </section>

      <form action="" className="space-y-5">
        <div className="flex flex-col space-y-2">
          <label htmlFor="stooriId" className="text-sm">
            Stoori Id
          </label>
          <input
            type="text"
            name="stooriId"
            id="stooriId"
            disabled
            className="bg-transparent disabled:bg-white/5 border outline-none border-white/5 rounded-md p-2 text-sm"
          />
          <p className="text-sm text-white/50 font-light">
            This is your stoori unique identifier.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="text-sm">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-transparent border outline-none border-white/20 rounded-md p-2 text-sm"
          />
          <p className="text-sm text-white/50 font-light">
            This is your public display name. It can be your real name or a
            pseudonym.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="walletAddress" className="text-sm">
            Wallet address
          </label>
          <input
            type="text"
            name="walletAddress"
            id="walletAddress"
            disabled
            className="bg-transparent disabled:bg-white/5 border outline-none border-white/20 rounded-md p-2 text-sm"
          />
          <p className="text-sm text-white/50 font-light">
            This is the address associate with your account and where you will
            receive your earnings.
          </p>
        </div>

        <button
          type="button"
          className="outline-none border-none hover:bg-zinc-300 transition bg-zinc-200 rounded px-6 py-2 text-sm inline-block text-black"
        >
          Update account
        </button>
      </form>
    </main>
  );
}
