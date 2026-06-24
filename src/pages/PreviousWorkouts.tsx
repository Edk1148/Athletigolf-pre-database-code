import { useState } from "react";
import { Link } from "wouter";

const workouts = [
  {
    date: "17 June 2026",
    split: "Push Day",
    duration: "58 mins",
    exercises: [
      { name: "Incline DB Press", sets: "3 x 8", weight: "30kg" },
      { name: "Machine Chest Press", sets: "3 x 10", weight: "65kg" },
      { name: "Cable Flyes", sets: "3 x 12", weight: "22.5kg" },
      { name: "Tricep Pushdown", sets: "3 x 12", weight: "35kg" },
    ],
  },
  {
    date: "15 June 2026",
    split: "Pull Day",
    duration: "64 mins",
    exercises: [
      { name: "Lat Pulldown", sets: "3 x 10", weight: "60kg" },
      { name: "Seated Row", sets: "3 x 9", weight: "55kg" },
      { name: "Incline Curls", sets: "3 x 10", weight: "14kg" },
    ],
  },
];

export default function PreviousWorkouts() {
  const [selectedSplit, setSelectedSplit] = useState("All");

  const splitOptions = ["All", ...new Set(workouts.map((workout) => workout.split))];

  const filteredWorkouts =
    selectedSplit === "All"
      ? workouts
      : workouts.filter((workout) => workout.split === selectedSplit);

  const totalSessions = workouts.length;
  const totalExercises = workouts.reduce(
    (total, workout) => total + workout.exercises.length,
    0
  );

  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#171717] px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
          <div>
            <p className="text-sm text-[#7A1F1F] font-semibold mb-1 tracking-[0.3em] uppercase">
              Gym History
            </p>
            <h1 className="text-[#7A1F1F] text-4xl md:text-5xl font-bold">
              Previous Workouts
            </h1>
            <p className="text-black/50 mt-2">
              Review your recent sessions, exercises, sets and weights.
            </p>
          </div>

          <Link href="/workouts/submit">
            <button className="bg-[#7A1F1F] text-white px-5 py-3 rounded-2xl font-semibold hover:bg-[#651919] transition shadow-sm">
              + Submit Session
            </button>
          </Link>
        </div>

        {filteredWorkouts.length === 0 ? (
          <div className="bg-white rounded-[2rem] p-10 text-center border border-black/5">
            <h2 className="text-2xl font-bold text-[#7A1F1F] mb-2">
              No workouts yet
            </h2>
            <p className="text-black/50 mb-5">
              Submit a gym session and it’ll appear here.
            </p>

            <Link href="/gym/submit">
              <button className="bg-[#7A1F1F] text-white px-5 py-3 rounded-2xl font-semibold hover:bg-[#651919] transition">
                Submit First Session
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-5">
            {filteredWorkouts.map((workout, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-6 shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
                  <div>
                    <h2 className="text-2xl font-bold text-[#7A1F1F]">
                      {workout.split}
                    </h2>
                    <p className="text-black/50">{workout.date}</p>
                  </div>

                  <div className="bg-[#7A1F1F]/10 text-[#7A1F1F] px-4 py-2 rounded-full text-sm font-semibold w-fit">
                    {workout.duration}
                  </div>
                </div>

                <div className="grid gap-3">
                  {workout.exercises.map((exercise, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center bg-[#f7f3ea] rounded-2xl p-4 border border-black/5"
                    >
                      <p className="font-semibold">{exercise.name}</p>
                      <p className="text-black/60">{exercise.sets}</p>
                      <p className="font-semibold md:text-right text-[#7A1F1F]">
                        {exercise.weight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}