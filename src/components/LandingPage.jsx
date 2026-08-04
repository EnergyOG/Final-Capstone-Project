import bgimage from "../assets/landing-img.png";
function LandingPage() {
  return (
    <section
      className="relative h-100 bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Event Management Dashboard
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
          Create, organize, update, and manage your events from one modern,
          intuitive dashboard.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition duration-300">
            Create Event
          </button>

          <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition duration-300">
            View Events
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
