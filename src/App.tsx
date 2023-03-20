import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import store from "./store/store";
import Navigation from "./navigations";

import "./App.scss";


function App() {
  return (
    <Router>
      <ReduxProvider store={store} >
        <div className="App w-screen h-screen">
          <Navigation />
        </div>
      </ReduxProvider>
    </Router>
  )
}

export default App
