import { useRef, useState } from "react";
import LandingPage from "./components/LandingPage";
import EventForm from "./components/EventForms";
import EventList from "./components/EventList";

function App() {
  const [refresh, setRefresh] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const formSectionRef = useRef(null);
  const eventListRef = useRef(null);

  const triggerRefresh = () => {
    setRefresh((prev) => prev + 1);
  };

  const handleCreateEvent = () => {
    setSelectedEvent(null);
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleViewEvents = () => {
    eventListRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <LandingPage
        onCreateClick={handleCreateEvent}
        onViewEventsClick={handleViewEvents}
      />

      <main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="text-sm text-slate-300">Total Events</p>
            <p className="mt-2 text-3xl font-bold text-white">Live</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="text-sm text-slate-300">Operations</p>
            <p className="mt-2 text-3xl font-bold text-white">Event Managment</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="text-sm text-slate-300">Status</p>
            <p className="mt-2 text-3xl font-bold text-emerald-400">Available Events</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
          <div ref={formSectionRef} className="lg:sticky lg:top-6 lg:self-start">
            <EventForm
              key={selectedEvent ? selectedEvent.id || "edit-mode" : "create-mode"}
              onEventCreated={triggerRefresh}
              editingEvent={selectedEvent}
              onCancelEdit={() => setSelectedEvent(null)}
            />
          </div>

          <div ref={eventListRef}>
            <EventList
              refresh={refresh}
              onEventDeleted={triggerRefresh}
              onEditEvent={handleEditEvent}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;