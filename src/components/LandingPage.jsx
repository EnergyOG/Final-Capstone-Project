import bgimage from "../assets/bg-img2.png";

function LandingPage({ onCreateClick, onViewEventsClick }) {
  return (
    <section
      className="relative flex min-h-[760px] items-center overflow-hidden bg-slate-950"
      style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_30%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 md:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-indigo-200">
            Event Operations Suite
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Manage every event with clarity and confidence.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
            Create, organize, update, and oversee your schedule from a polished dashboard built for modern event operations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onCreateClick}
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-900/40"
            >
              Create Event
            </button>

            <button
              type="button"
              onClick={onViewEventsClick}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              View Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
