import './App.css'
import EventCard from './components/EventCard'
import EventList from './components/EventList'
import NavBar from './components/NavBar'
import { RouterProvider } from "react-router-dom";
import router from './routes';



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
