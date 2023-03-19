import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./navigations";

import "./App.scss";


function App() {
  return (
    <Router>
      <div className="App w-screen h-screen">
        <Navigation />
      </div>
    </Router>
  )
}

export default App
