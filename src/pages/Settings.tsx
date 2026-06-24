import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { supabase } from "@/lib/supabase";

export default function Settings() {
  const [, navigate] = useLocation();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [profile, setProfile] = useState({
    full_name: "",
    golf_handicap: "",
    height: "",
    weight: "",
    main_goal: "",
    distance_unit: "yards",
    weight_unit: "kg",
  });

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      navigate("/auth");
      return;
    }

    setEmail(user.email || "");

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data && !error) {
      setProfile({
        full_name: data.full_name || "",
        golf_handicap: data.golf_handicap?.toString() || "",
        height: data.height?.toString() || "",
        weight: data.weight?.toString() || "",
        main_goal: data.main_goal || "",
        distance_unit: data.distance_unit || "yards",
        weight_unit: data.weight_unit || "kg",
      });
    }

    setLoading(false);
  }

  async function saveProfile() {
    setSaving(true);
    setMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      navigate("/auth");
      return;
    }

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      full_name: profile.full_name,
      golf_handicap: profile.golf_handicap ? Number(profile.golf_handicap) : null,
      height: profile.height ? Number(profile.height) : null,
      weight: profile.weight ? Number(profile.weight) : null,
      main_goal: profile.main_goal,
      distance_unit: profile.distance_unit,
      weight_unit: profile.weight_unit,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      setMessage("Could not save settings.");
    } else {
      setMessage("Settings saved successfully.");
    }

    setSaving(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/auth");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-cream p-8 md:p-12">
        <p className="text-black/60">Loading settings...</p>
      </div>
    );
  }

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
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-2xl font-semibold">Profile</h2>
            <p className="mb-6 text-black/60">
              Update your name, handicap, goals and personal details.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-black/10 p-4"
                placeholder="Full name"
                value={profile.full_name}
                onChange={(e) =>
                  setProfile({ ...profile, full_name: e.target.value })
                }
              />

              <input
                className="rounded-2xl border border-black/10 p-4"
                placeholder="Golf handicap"
                value={profile.golf_handicap}
                onChange={(e) =>
                  setProfile({ ...profile, golf_handicap: e.target.value })
                }
              />

              <input
                className="rounded-2xl border border-black/10 p-4"
                placeholder="Height"
                value={profile.height}
                onChange={(e) =>
                  setProfile({ ...profile, height: e.target.value })
                }
              />

              <input
                className="rounded-2xl border border-black/10 p-4"
                placeholder="Weight"
                value={profile.weight}
                onChange={(e) =>
                  setProfile({ ...profile, weight: e.target.value })
                }
              />

              <input
                className="rounded-2xl border border-black/10 p-4 md:col-span-2"
                placeholder="Main goal"
                value={profile.main_goal}
                onChange={(e) =>
                  setProfile({ ...profile, main_goal: e.target.value })
                }
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-2xl font-semibold">Units</h2>
            <p className="mb-6 text-black/60">
              Switch between yards/metres and kg/lbs.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <select
                className="rounded-2xl border border-black/10 p-4"
                value={profile.distance_unit}
                onChange={(e) =>
                  setProfile({ ...profile, distance_unit: e.target.value })
                }
              >
                <option value="yards">Yards</option>
                <option value="metres">Metres</option>
              </select>

              <select
                className="rounded-2xl border border-black/10 p-4"
                value={profile.weight_unit}
                onChange={(e) =>
                  setProfile({ ...profile, weight_unit: e.target.value })
                }
              >
                <option value="kg">KG</option>
                <option value="lbs">LBS</option>
              </select>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-2xl font-semibold">Theme</h2>
            <p className="mb-6 text-black/60">
              Customise the look of AthletiGolf.
            </p>

            <button
              disabled
              className="rounded-full bg-cream px-5 py-3 text-sm text-black/50"
            >
              More themes coming soon
            </button>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Account
          </p>

          <h2 className="mb-4 text-3xl font-semibold">Account controls</h2>

          <p className="mb-2 text-white/60">Signed in as:</p>
          <p className="mb-6 font-semibold">{email}</p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={saveProfile}
              disabled={saving}
              className="rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 transition hover:bg-white/90 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Settings"}
            </button>

            <button
              onClick={handleLogout}
              className="rounded-2xl bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/15"
            >
              Log Out
            </button>
          </div>

          {message && <p className="mt-4 text-sm text-white/70">{message}</p>}
        </section>
      </div>
    </div>
  );
}