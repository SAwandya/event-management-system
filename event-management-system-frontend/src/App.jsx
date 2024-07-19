import './App.css'
import EventCard from './components/EventCard'
import EventList from './components/EventList'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      <div>
        {" "}
        <NavBar />
        <EventCard/>
      </div>
    </>
  );
}

export default App
