import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, "");

function EventList({ refresh, onEventDeleted, onEditEvent }) {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEvents = async () => {
      if (!API_URL) {
        setError("API endpoint is missing. Add VITE_API_URL to your .env file.");
        setEvents([]);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/events`);
        const data = await response.json().catch(() => []);

        if (!response.ok) {
          throw new Error(data.message || `Request failed with status ${response.status}`);
        }

        setEvents(Array.isArray(data) ? data : []);
        setError("");
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Unable to load events right now.");
        setEvents([]);
      }
    };

    loadEvents();
  }, [refresh]);

  const deleteEvent = async (id) => {
    if (!API_URL) {
      setError("API endpoint is missing. Add VITE_API_URL to your .env file.");
      return;
    }

    const confirmed = window.confirm("Delete this event?");
    if (!confirmed) return;

    try {
      const response = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      onEventDeleted?.();
    } catch (error) {
      console.error("Error deleting event:", error);
      setError("Unable to delete the event right now.");
    }
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/25 backdrop-blur-xl sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300">Schedule</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Upcoming Events</h2>
        </div>
        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          {events.length} items
        </div>
      </div>

      {error && (
        <div className="mb-5 rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="space-y-5">
        {events.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/40 p-8 text-center text-slate-400">
            No events available.
          </div>
        ) : (
          events.map((event) => (
            <div key={event.id} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-indigo-400/40 hover:bg-slate-950/60">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-200">
                      Event
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{event.title}</h3>

                  <p className="mt-3 text-sm text-slate-400">
                    {event.date} • {event.time}
                  </p>

                  <p className="mt-3 text-slate-300">{event.description}</p>

                  <p className="mt-4 text-sm text-slate-400">📍 {event.location}</p>
                </div>

                <div className="flex gap-2 md:flex-col">
                  <button
                    type="button"
                    onClick={() => onEditEvent?.(event)}
                    className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => deleteEvent(event.id)}
                    className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EventList;