import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueNfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing";

class App extends React.Component {
  render() {
    return (
      <div
        className={"App"}
        style={{
          height: "1500px",
          background: "cornflowerblue",
        }}
      >
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
      </div>
    );
  }
}
export default App;
