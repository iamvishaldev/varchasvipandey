import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

// COMPONENETS
import Sidenav from "./components/Sidenav/Sidenav";
import Overview from "./components/Overview/Overview";

// PROJECTS
import CoviData from "./components/Projects/CoviData";
import Strenxible from "./components/Projects/Strenxible";
import SweetBeat from "./components/Projects/SweetBeat";
import ExpressStore from "./components/Projects/ExpressStore";
import FairAndSquare from "./components/Projects/FairAndSquare";
import Expressions from "./components/Projects/Expressions";

// BLOGS LOADER
import Blogs from "./components/Blogs/Blogs";

// FOOTER
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* SIDENAV WITH ROUTER LINKS */}
      <Sidenav />
      {/* PROJECTS */}
      <Route path="/" exact component={Overview} />
      <Route path="/expressions" component={Expressions} />
      <Route path="/covidata" component={CoviData} />
      <Route path="/strenxible" component={Strenxible} />
      <Route path="/sweetbeat" component={SweetBeat} />
      <Route path="/express-store" component={ExpressStore} />
      <Route path="/fair-and-square" component={FairAndSquare} />
      {/* BLOGS */}
      <Route path="/blogs" component={Blogs} />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
