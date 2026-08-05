import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, "");

const emptyEvent = {
  title: "",
  description: "",
  date: "",
  time: "",
  location: "",
};

function EventForm({ onEventCreated, editingEvent = null, onCancelEdit }) {
  const [event, setEvent] = useState(() => {
    if (!editingEvent) {
      return { ...emptyEvent };
    }

    return {
      title: editingEvent.title || "",
      description: editingEvent.description || "",
      date: editingEvent.date || "",
      time: editingEvent.time || "",
      location: editingEvent.location || "",
    };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!API_URL) {
      setError("API endpoint is missing. Add VITE_API_URL to your .env file.");
      return;
    }

    if (!event.title || !event.date || !event.time || !event.location) {
      setError("Please fill in the required event details.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const url = editingEvent
        ? `${API_URL}/events/${editingEvent.id}`
        : `${API_URL}/events`;
      const method = editingEvent ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      setEvent({ ...emptyEvent });
      onCancelEdit?.();
      onEventCreated?.();
    } catch (error) {
      console.error("Error saving event:", error);
      setError(error.message || "Something went wrong while saving the event.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setEvent({ ...emptyEvent });
    onCancelEdit?.();
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-7">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">Operations</p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            {editingEvent ? "Edit Event" : "Create Event"}
          </h2>
        </div>
        <div className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
          {editingEvent ? "Update" : "New"}
        </div>
      </div>

      {error && (
        <div className="mb-5 rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Event title</label>
          <input
            name="title"
            value={event.title}
            onChange={handleChange}
            placeholder="Event title"
            className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Description</label>
          <textarea
            name="description"
            value={event.description}
            onChange={handleChange}
            placeholder="Describe the event"
            rows="4"
            className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Date</label>
            <input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-white outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Time</label>
            <input
              type="time"
              name="time"
              value={event.time}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-white outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Location</label>
          <input
            name="location"
            value={event.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting
              ? editingEvent
                ? "Saving..."
                : "Creating..."
              : editingEvent
                ? "Save Changes"
                : "Create Event"}
          </button>

          {editingEvent && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 font-medium text-slate-200 transition hover:bg-slate-700"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default EventForm;