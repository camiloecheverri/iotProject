import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Components/Navigation';
import setSchedule from './Components/setSchedule'
import home from './Components/home'
import { Provider } from "react-redux";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <div className="container p-4">
          <Route path="/set" component={setSchedule} />
          <Route exact path="/" component={home}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
