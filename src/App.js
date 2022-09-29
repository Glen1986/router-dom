import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Header, Body } from './components'

export default function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Body/>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

