function EventForm() {
  return (
    <div className="bg-slate-900 rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-6">
        Create New Event
      </h2>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Event Title"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
        />

        <textarea
          placeholder="Description"
          rows="4"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
        />

        <input
          type="date"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
        />

        <input
          type="time"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
        />

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold">
          Save Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;