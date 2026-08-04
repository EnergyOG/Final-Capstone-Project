import LandingPage from "./components/LandingPage";
import EventForms from "./components/EventForms";
import EventList from "./components/EventList";

function App(){
  return (
    <div className="text-yellow-300">
      <LandingPage/>
      <EventForms/>
      <EventList/>
    </div>
  )
}

export default App
