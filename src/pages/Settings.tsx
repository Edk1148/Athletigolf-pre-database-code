export default function Settings() {
  const settings = [
    {
      title: "Profile",
      description: "Update your name, handicap, goals and personal details.",
      status: "Coming Soon",
    },
    {
      title: "Notifications",
      description: "Control workout reminders, round reminders and progress alerts.",
      status: "Coming Soon",
    },
    {
      title: "Units",
      description: "Switch between yards/metres and kg/lbs.",
      status: "Coming Soon",
    },
    {
      title: "Theme",
      description: "Customise the look of AthletiGolf.",
      status: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen bg-cream p-8 md:p-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
            Settings
          </p>

          <h1 className="mb-4 text-5xl font-semibold">
            Manage your AthletiGolf account
          </h1>

          <p className="text-lg leading-relaxed text-black/60">
            Control your account, preferences and app experience from one place.
          </p>
        </div>

        <section className="grid gap-6">
          {settings.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h2 className="mb-2 text-2xl font-semibold">{item.title}</h2>
                <p className="text-black/60">{item.description}</p>
              </div>

              <span className="w-fit rounded-full bg-cream px-4 py-2 text-sm text-black/50">
                {item.status}
              </span>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Account
          </p>

          <h2 className="mb-4 text-3xl font-semibold">
            Account controls
          </h2>

          <p className="mb-6 max-w-3xl text-white/60">
            Login, logout, subscription and data controls will live here once
            the database and authentication are fully connected.
          </p>

          <button className="rounded-2xl bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/15">
            Log Out Coming Soon
          </button>
        </section>
      </div>
    </div>
  );
}