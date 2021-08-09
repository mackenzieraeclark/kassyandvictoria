import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import RSVP from "./Components/RSVP";
import Timeline from "./Components/Timeline";
import Parking from "./Components/Parking"
import FAQs from "./Components/FAQs";
import Story from "./Components/Story";
import Gallery from "./Components/Gallery";
import Registry from "./Components/Registry";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero
          id="section1"
        />
        <Story
          id="section2"
        />
        <RSVP
          id="section3"
        />
        <Timeline
          id="section4"
        />
        <Parking
          id="section5"
        />
        <FAQs
          id="section6"
        />
        <Gallery />
        <Registry
          id="section7"
        />
        <Footer />
      </div>
    );
  }
}

export default App;