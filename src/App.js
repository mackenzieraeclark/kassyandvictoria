import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Timeline from "./Components/Timeline";
import Parking from "./Components/Parking"
import FAQs from "./Components/FAQs"
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
        <Timeline
          id="section2"
        />
        <Parking
          id="section3"
        />
        <FAQs
          id="section4"
        />
        <Story
          id="section5"
        />
        <Gallery />
        <Registry
          id="section6"
        />
        <Footer />
      </div>
    );
  }
}

export default App;