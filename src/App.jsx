import LandingPage from "./components/LandingPage";
import EventForm from "./components/EventForms";
import EventList from "./components/EventList";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <LandingPage />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <EventForm />
          </div>

          <div className="lg:col-span-2">
            <EventList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;