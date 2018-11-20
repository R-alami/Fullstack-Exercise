import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Podcasts from "./components/Podcasts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Container>
          <Podcasts />
          <Podcasts />
          <Podcasts />
        </Container>
      </div>
    );
  }
}

export default App;
