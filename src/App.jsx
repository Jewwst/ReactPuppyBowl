import { Routes, Route } from "react-router-dom"
import AllPlayers from "./components/allPuppies"
import SinglePlayer from "./components/SinglePlayer"
import Nav from "./components/Navbar"

function App() {
return (
  <div className="App">
  <h1>Puppy Bowl React</h1>
 <Nav />
  <Routes>
  <Route path="/" element={<AllPlayers />} />
  <Route path="/:id" element={<SinglePlayer />} />
</Routes>
 </div>
  )
}

export default App