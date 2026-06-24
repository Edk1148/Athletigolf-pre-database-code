const GOLF_GREEN = "#1F4D3A";

export default function RoundHistory() {
  const rounds = [
    {
      course: "Wentworth",
      score: "78 (+6)",
      gir: "58%",
      fir: "64%",
      putts: 31,
      comp: true,
      date: "May 12, 2026",
    },
    {
      course: "St Andrews",
      score: "82 (+10)",
      gir: "44%",
      fir: "61%",
      putts: 35,
      comp: false,
      date: "May 8, 2026",
    },
    {
      course: "Royal Birkdale",
      score: "76 (+4)",
      gir: "67%",
      fir: "71%",
      putts: 29,
      comp: true,
      date: "May 1, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-cream p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] text-xs text-[#1F4D3A]/70 mb-4">
            Golf
          </p>

          <h1 className="text-5xl font-semibold mb-4">Round History</h1>

          <p className="text-black/60 text-lg">
            Review previous rounds and track performance trends over time.
          </p>

          <section className="grid md:grid-cols-4 gap-6 mb-12 mt-10">
            {[
              ["Rounds Logged", "41"],
              ["Average Score", "78.6"],
              ["Best Round", "76"],
              ["Handicap", "12.4"],
            ].map(([label, value], index) => (
              <div
                key={index}
                className={`rounded-[2rem] p-6 shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  index === 0 || index === 3
                    ? "bg-[#1F4D3A] text-white"
                    : "bg-[#1F4D3A] text-white"
                }`}
              >
                <p
                  className={`text-sm mb-3 ${
                    index === 0 || index === 3
                      ? "text-white/60"
                      : "text-white/60"
                  }`}
                >
                  {label}
                </p>

                <h2 className="text-4xl font-semibold">{value}</h2>
              </div>
            ))}
          </section>
        </div>

        <div className="grid gap-6">
          {rounds.map((round, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex items-center justify-center">
                  <button className="bg-[#1F4D3A] text-white px-3 py-8 rounded-2xl hover:opacity-90 transition font-medium">
                    <span
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                      }}
                    >
                      DETAILS
                    </span>
                  </button>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-black/50 mb-2">{round.date}</p>

                  <h2 className="text-3xl font-semibold mb-3">
                    {round.course}
                  </h2>

                  <div
                    className={`inline-block px-4 py-2 rounded-full text-white text-sm ${
                      round.comp ? "bg-orange-400" : "bg-blue-400"
                    }`}
                  >
                    {round.comp ? "Competition Round" : "General Play"}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    ["Score", round.score],
                    ["GIR", round.gir],
                    ["FIR", round.fir],
                    ["Putts", round.putts],
                  ].map(([label, value], i) => (
                    <div
                      key={i}
                      className="bg-cream rounded-2xl px-6 py-5 min-w-[120px] border border-[#1F4D3A]/10"
                    >
                      <p className="text-sm text-[#1F4D3A]/70 mb-2">
                        {label}
                      </p>

                      <h3 className="text-2xl font-semibold">{value}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}