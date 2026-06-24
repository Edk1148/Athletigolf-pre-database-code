export default function Analytics() {
  const topStats = [
    ["Handicap", "12.4"],
    ["Avg Score", "78.6"],
    ["Workouts / Week", "5"],
    ["Driving Distance", "262y"],
  ];

  return (
    <div className="min-h-screen bg-cream p-8 md:p-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-4 font-semibold">
            AthletiGolf Analytics
          </p>

          <h1 className="text-5xl  font-semibold mb-4">
            Performance Intelligence
          </h1>

          <p className="text-black/60 text-lg max-w-3xl">
            Connect your golf performance, gym training and long-term progress
            to uncover the habits that lead to lower scores and better athletic performance.
          </p>
        </div>

        {/* TOP STATS */}
        <section className="grid md:grid-cols-4 gap-6 mb-12">
          {topStats.map(([label, value], index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-6 shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-black/50 text-sm mb-3">{label}</p>
              <h2 className="text-4xl font-semibold">{value}</h2>
            </div>
          ))}
        </section>

        {/* ATHLETIGOLF INSIGHTS */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-3 w-3 rounded-full bg-[#D4AF37]" />
            <h2 className="text-3xl font-semibold">
              AthletiGolf Insights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "+11 Yards",
                text: "Driving distance increased during periods of consistent leg training."
              },
              {
                title: "Best Scoring Weeks",
                text: "Your lowest scores occur after completing 4+ workouts."
              },
              {
                title: "Biggest Opportunity",
                text: "Approach play remains the largest contributor to dropped shots."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-6 shadow-sm border border-[#D4AF37]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-3 text-[#D4AF37]">
                  {item.title}
                </h3>

                <p className="text-black/60 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GOLF ANALYTICS */}
        <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 mb-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="mb-8">
            <p className="text-sm text-black/50 mb-2">
              Golf Analytics
            </p>

            <h2 className="text-3xl font-semibold">
              Score Trend
            </h2>
          </div>

          <div className="grid grid-cols-5 gap-4 items-end h-56">
            {[82, 80, 79, 78, 76].map((score, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3"
              >
                <div
                  className="w-full rounded-t-2xl bg-[#1F4D3A]"
                  style={{ height: `${(90 - score) * 10}px` }}
                />

                <p className="font-semibold">{score}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GOLF + GYM */}
        <section className="grid lg:grid-cols-2 gap-8 mb-10">

          {/* GOLF */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5">
            <h2 className="text-3xl font-semibold mb-8">
              Golf Performance
            </h2>

            <div className="space-y-8">
              {[
                ["Driving Accuracy", "65%"],
                ["Greens in Regulation", "56%"],
                ["Scrambling", "47%"],
                ["Putting", "72%"],
              ].map(([label, value], index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>

                  <div className="h-4 bg-black/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1F4D3A] rounded-full"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GYM */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5">
            <h2 className="text-3xl font-semibold mb-8">
              Gym Performance
            </h2>

            <div className="space-y-8">
              {[
                ["Workout Consistency", "88%"],
                ["Strength Progress", "76%"],
                ["Leg Training", "82%"],
                ["Recovery Score", "70%"],
              ].map(([label, value], index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>

                  <div className="h-4 bg-black/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#7A1F1F] rounded-full"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* INSIGHT ENGINE */}
        <section className="bg-slate-950 text-white rounded-[2rem] p-8 shadow-2xl border border-[#D4AF37]/20">
          <p className="uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-4">
            AthletiGolf Insight Engine
          </p>

          <h2 className="text-4xl font-semibold mb-6">
            Recommended Focus
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Your strongest scoring periods occur when you complete at least
            four gym sessions per week while maintaining recovery before
            competition rounds. Continue building lower-body strength and
            focus practice time on approach shots from 120–170 yards.
          </p>

          <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
            <h3 className="text-2xl font-semibold mb-3 text-[#D4AF37]">
              Next Target
            </h3>

            <p className="text-white/70">
              Reach a 10 handicap by improving GIR above 60% and maintaining
              workout consistency above 85%.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
