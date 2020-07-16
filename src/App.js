import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Import Components
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
